const mongoose = require("mongoose")

 var backCampaignSchema = mongoose.Schema({
    name:String,
    reward:String,

investment:String,
useraccount:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'userAccount',
}
})
module.exports = mongoose.model('backCampaign',backCampaignSchema);