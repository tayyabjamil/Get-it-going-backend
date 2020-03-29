const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

router.post("/", (req, res, next) => {
  const campaignBacker = new CampaignBacker({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  campaignBacker
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(201).json({
    createdBacker: campaignBacker
  });
});

router.get("/" ,(req, res) => {
    CampaignBacker.find((err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Retriving Students:" + JSON.stringify(err, undefined, 2)
        );
      }
    });
  });
  router.get('/:id',(req,res)=>{
        if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('NO record with given id : ${req.params.id}');
        CampaignBacker.findById(req.params.id,(err,doc)=>{
            if (!err){
                res.send(doc);
                console.log(doc)
            }
            else{
                console.log("Error in Retriving Campagin  Backers:"+JSON.stringify(err,undefined, 2));
            }
    
            })
    
    });
    
  // router.get("/:id" ,(req, res) => {
  //   CampaignBacker.findById(req.params.id,(err,doc)=>{
  //               if (!err){
  //                   res.send(doc);
  //               }
  //               else{
  //                   console.log("Error in Retriving Campagin  Backers:"+JSON.stringify(err,undefined, 2));
  //               }
        
  //               })
  // })

  module.exports = router;
