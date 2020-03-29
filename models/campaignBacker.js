const mongoose = require("mongoose")

 var campaignBackerSchema = mongoose.Schema({
  name:String,

  startCampagins:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'startCampaign',
},

})
module.exports = mongoose.model('campaignBacker',campaignBackerSchema);