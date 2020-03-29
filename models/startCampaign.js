const mongoose = require("mongoose");

var startCampaignSchema = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  title: String,
  tagline: String,
  amount: String,
  description: String,
  pledgeAmount:String,
  rewardDetails:String,
  mainImage:String,
  vedio:String,
  rewardImages:String,
  userAccount: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "userAccount",
    required:true 
  },
  
});
module.exports = mongoose.model("startCampaign", startCampaignSchema);
//