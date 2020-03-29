const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();

const CampaignReview = require("../models/campaignReview")
const StartCampaign = require("../models/startCampaign")

router.post("/", (req, res, next) => { 
  StartCampaign.findById(req.body.startCampaignId)
  .exec()
    .then(startCampaign => {
      if (!startCampaign) {
        return res.status(404).json({
          message: "Campagin not found"
        });
      }
      const campaignReview = new CampaignReview({
   
        _id: new mongoose.Types.ObjectId(),
        comment: req.body.comment,
        details: req.body.details,
        startCampaign:req.body.startCampaignId,
      });
      return campaignReview.save();
    })
    .then(result => {
      res.send(result)
      res.status(201).json({
        message: "Review Posted",
      });
    })
    .catch(err => {
      console.log('NO Campaign found');
      return res.status(404).json({
        message: "No Campaign found"
      });
    });
});
router.get('/:id',(req,res)=>{
  CampaignReview.find({startCampaign:req.params.id})
  .exec()
  .then(user => {
    if (user.length < 1) {
      return res.status(404).json({
        message: "No Review Posted"
      });
    }else{
      res.send(user)
    }
  
  }
  )
})
router.get('/',(req,res)=>{
  CampaignReview.find()
  .exec()
  .then(user => {
    if (user.length < 1) {
      return res.status(404).json({
        message: "No Review Posted"
      });
    }else{
      res.send(user)
    }
  
  }
  )
})

  module.exports = router;
