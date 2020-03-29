const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const backCampaign = require("../models/backCampaign");
var ObjectId = require("mongoose").Types.ObjectId;

router.post('/',(req,res)=>{
    var campaignData = new backCampaign({
    
        reward:     req.body.reward,
        name: req.body.name,
        investment:req.body.investment
        
    })
    campaignData.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log("Error in Backing  Campaign "+JSON.stringify(err,undefined, 2))}
    });
})

router.get("/", (req, res) => {
    backCampaign.find((err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Retriving Students:" + JSON.stringify(err, undefined, 2)
        );
      }
    });
  });
module.exports = router;
