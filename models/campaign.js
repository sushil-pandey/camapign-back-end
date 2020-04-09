const mongoose = require('mongoose');

var Camapign = mongoose.model('Campaign', {
    // id: { type: 'string', columnName: '_id' },
    name: { type: String },
    stdate: { type: String },
    eddate: { type: String  },
    tbudget: { type: Number },
    dbudget: { type: Number },
    timp: { type: Number },
    dimp: { type: Number },
    pmpid: { type: Number},
    minbid: { type: Number},
    maxbid: { type: Number},
    currency :{ type: String },
    timeZone :{ type: String},
    country: { type: String},
    state:{type:String},
    city: { type: String},
    // cityOption: { type: 'string', required: true },
    // countryOption: { type: 'string', required: true },
});

module.exports = { Camapign };