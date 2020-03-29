const mongoose = require("mongoose")

 var campaignReviewSchema = mongoose.Schema({
  
  comment:String,
  details:String,
  startCampaign:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'startCampaign',
    required:true 
},

})
module.exports = mongoose.model('campaignReview',campaignReviewSchema);