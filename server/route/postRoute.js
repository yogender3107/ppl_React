let express = require('express');
let postApi = require('../api/postApi');
let postRoute = express.Router();
let multer = require('multer');
let postStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploadedImages');

    },
    filename: function (req, file, cb) {

        cb(null, file.originalname);
    }
})

let upload = multer({ storage: postStorage });
//let upload = multer().single('image')

postRoute.post("/createPost", upload.single('image'), async function (req, res) {
    console.log("create pooooooooost", req.file);
    // console.log("body", req.body);

    let data = req.body;
    // data.image = req.file;
    
    data["image"]=req.file.originalname;
    console.log("data of post in route",data);
    // req.body.image = req.file.originalname;
    try {
        let post = await postApi.createPost(data);
        console.log("post is", post);
        res.send(post);

    } catch (err) {
        console.log(err);
        res.send(err);
    }

})
// postRoute.post("/createPost", upload.single('image'), async function (req, res) {
//     console.log("create pooooooooost", req.file);
//     // console.log("body", req.body);

//     let data = req.body;
//     data.image = req.file.originalname;

//     // data["image"]=req.files;
//     //req.body.image = req.file.originalname;
//     console.log("data is ", data);
//     try {
//         let post = await postApi.createPost(data);
//         console.log("post is", post);
//         res.send(post);

//     } catch (err) {
//         console.log(err);
//         res.send(err);
//     }

// })
postRoute.get("/list", async function (req, res) {
    console.log("in the list router function",req.query.data);
    // let email = req.params.email;
    let data=JSON.parse(req.query.data);
    console.log("this is the filter",data);
    let filter = data.filter;
    console.log("filter of the data is ",filter);
   let sort =data.sort;
     console.log("the sorting options are",sort);
     let options = data.options;
    //console.log(req.body);
    console.log("the options are",options);
    try {
        console.log("in the post router");
        let post = await postApi.getPost(filter,sort,options);
        if (post.length != 0) {
            console.log(post);
            res.send(post);
        }
    }
    catch (err) {
        res.send(err);
        console.log(err);
    }
}

)
postRoute.post("/addLike", async function (req, res) {
    console.log("in the checck ro likes id route");
    let query = { _id: [req.body.post_id] };
    let data = req.body.user_id;
    try {
        
                console.log("in the update likes route");
                let post = await postApi.addLike(query, data);
                if (post != 0) {
                    console.log("pooost is",post);

                    res.send(post);
                }

            }
            catch (err) {
                res.send(err);
            }



        
        
})
postRoute.get("/singlepost/:id", async function (req, res) {
    console.log("in the post router function");
    let id = req.params.id;
    let query = { _id: id };
    //console.log(req.body);
    try {
        console.log("in the post router");
        let singlePost = await postApi.getSinglePost(query);
        if (singlePost.length != 0) {
            console.log("output issssss", singlePost);
            res.send(singlePost[0]);
        }
    }
    catch (err) {
        res.send(err);
        console.log(err);
    }
}


)
postRoute.post("/singlepost/comment", async function (req, res) {
    console.log("in the add comment route of the single post");
    let post_id = req.body.id;
    console.log("post id is",post_id);
    let query = { _id: post_id };
    console.log("query isssssssss",query);
    let data={
        username:req.body.username,
        firstname:req.body.firstname,
        comment:req.body.comment,
    }
    console.log("data of Commnet is",data);
   try{
       let comment=await postApi.addComment(query,data);
       console.log("comment isssssssss",comment);
       res,send(comment);
   }catch(err)
   {
       res.send(err);
   }
})

postRoute.get("/count", async function (req, res) {
    console.log("in the count post router function");
    //console.log(req.body);
    let query={};
    try {
        console.log("in the post count  router");
        let count = await postApi.getCount(query);
          console.log("count of post is ",count);
            res.send({postCount: count});
        }
    
    catch (err) {
        res.send(err);
        console.log(err);
    }
}


)


    




module.exports = postRoute;