let express = require('express');
let categoryApi = require('../api/category');
let categoryRoute = express.Router();
let multer = require('multer');
let categoryStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploadedImages');

    },
    filename: function (req, file, cb) {

        cb(null, file.originalname);
    }
})

let upload = multer({ storage: categoryStorage });
//let upload = multer().single('image')

categoryRoute.post("/addCategory", upload.single('image'),async function (req, res) {
    console.log("create categoryyyyyyy", req.file);
    // console.log("body", req.body);

    let data = req.body;
   data.image = req.file.originalname;
    
    //  data["image"]=req.files;
    // req.body.image = req.file.originalname;
    console.log("data is ", data);
    try {
        let category = await categoryApi.addCategory(data);
        console.log("category is", category);
        res.send(category);
       
    } catch (err) {
        console.log(err);
        res.send(err);
    }

})

categoryRoute.get("/list", async function (req, res) {
    console.log("in the list router function of category");
   // let email = req.params.email;
    let query = {};
    //console.log(req.body);
    try {
        console.log("in the correct router");
        let category = await categoryApi.getCategory(query);
        if (category.length!=0) {
            console.log(category);
            res.send(category);
        }
    }
    catch (err) {
        res.send(err);
        console.log(err);
    }
}

)

module.exports = categoryRoute;
