var express = require("express");
var userapi = require("../api/registerUserApi");
let registerRoute = express.Router();
let mail = require("../config/sendmail");
let request = require("request");
let nodemailer = require("../node_modules/nodemailer");
let stripe = require("stripe")("sk_test_mPpjf9O07bZc18qdv3BnzLMC");

console.log("in the router");

registerRoute.post("/registerUser", async function(req, res) {
  console.log("this is the file from the frontend----");
  let data = req.body;
  data["status"] = "inactive";
  data["token"] = Math.floor(Math.random() * 1000);
  console.log(data);
  console.log("uploading file");
  let link =
    "http://192.168.100.44:7070/verifyUser/" + data.email + "/" + data.token;
  console.log(link);
  try {
    let obj = await userapi.findUser(data);
    console.log("result", obj);
    console.log("user already exsists");

    if (obj.length == 0) {
      console.log("nooooooo user found");
      try {
        let user = await userapi.createUser(data);
        console.log(user.email);
        if (user.length != 0) {
          try {
            let mailUser = await mail.sendmail(link, "createuser", user.email);
            //console.log("user", user);
            res.send(user);
          } catch (err) {
            res.send(err);
          }
        }
      } catch (err) {
        res.send(err);
      }
    } else {
      res.send({ error: "user already exists" });
    }
  } catch (err) {
    res.send(err);
  }
});

registerRoute.get("/verifyUser/:email/:token", async function(req, res) {
  console.log("in the updateuser router function");
  let email = req.params.email;
  let token = req.params.token;
  // let query= {"email":email,"token":token};
  let query = { email, token };
  token = Math.floor(Math.random() * 1000);
  console.log(req.body);
  console.log("in the verify Route");
  let loginLink;
  console.log(loginLink);
  try {
    console.log("in te correct router");
    let obj1 = await userapi.updateUser(query, {
      token: token,
      status: "active"
    });
    if (obj1) {
      res.redirect("http://localhost:3000/login");
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

registerRoute.post("/login", async function(req, res) {
  console.log("in the authenticate router");
  let data = req.body;
  console.log("data is", data);
  if (data.length != 0) {
    try {
      let user = await userapi.authenticateUser(data);
      console.log("user is", user);
      if (user != null) {
        console.log(user);
        let { username, email, firstname, lastname, _id } = user;
        res.send({ username, email, firstname, lastname, _id });
      } else {
        res.send({ error: "invalid user or password or verify your mail " });
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  } else {
    res.send({ user: "no data is send in the body" });
  }
});

registerRoute.get("/stripeRedirect", async function(req, res) {
  console.log("in the authenticate router");
  // console.log("the reesponse is",res);
  let code = req.query.code;

  let options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "Post",
    uri: `https://connect.stripe.com/oauth/token?client_secret=sk_test_mPpjf9O07bZc18qdv3BnzLMC&code=${code}&grant_type=authorization_code`
  };
  request(options, function(err, response, body) {
    let myBody = JSON.parse(body);
    console.log("the customer account is ", myBody.stripe_user_id);
  });
});
registerRoute.post("/customer", async function(req, res) {
  let data = req.body;
  
  if (data.stripeToken) {
    stripe.customers.create(
      {
        description: "Customer for ella.miller@example.com",
        email: "r.rashijain95@gmail.com"
      },
      function(err, customer) {
        if(req.body)
        {
        console.log("the id of customer is", customer.id);
        stripe.customers.createSource(
          customer.id,
          { source: data.stripeToken },
          function(err, card) {
            // asynchronously called
            if (err) {
              console.log("error is", err);
            } else {
              console.log("the card id is ", card);
              stripe.tokens
                .create(
                  {
                    customer: customer.id,
                    card: card.id
                  },
                  {
                    stripe_account: "acct_1CHu5tGVYoV94DQn"
                  }
                )
                .then(function(token) {
                  console.log("the new token is",token);
                  stripe.charges
                    .create(
                      {
                        amount: 100,
                        currency: "USD",
                        // source: data.stripeToken,
                       
                        source: token.id,
                        application_fee: 10
                      },
                      {
                        stripe_account: "acct_1CHu5tGVYoV94DQn"

                        // destination: {
                        //   amount: 70,
                        //   account: "acct_1CHu5tGVYoV94DQn"

                        // }
                      }
                    )
                    .then(function(charge) {
                      console.log("the charge is ", charge);
                    });
                  // asynchronously called
                });
            }
          }
        );
        // asynchronously called
      }
      else{

      }
    }
    );
  }
});
//more work to do is to store the account_id  of the connected account and the customer_id into the db.use these values to get the tokens and creating the charges.
registerRoute.get("/list",async function(req,res)
{
  console.log("in the list route");
  stripe.customers.listCards('cus_Ci2MSQhsS2Rxt8'
  , function(err, cards) {
    // asynchronously called
    res.send(cards);
    console.log("cards list is",cards);
  });
})
// we will use the customer id from the data base to retreive the list of the cards for a particular customer
module.exports = registerRoute;
