const mongoose = require('mongoose');
var  {Camapign}  = require('../models/campaign');
var ObjectId = require('mongoose').Types.ObjectId;





module.exports.register = (req, res, next) => {
    var user = new Camapign({
        name : req.body.name,
        stdate : req.body.stdate,
        eddate : req.body.eddate,
        tbudget : req.body.tbudget,
        dbudget : req.body.dbudget,
        timp : req.body.timp,
        dimp : req.body.dimp,
        pmpid : req.body.pmpid,
        minbid : req.body.minbid,
        maxbid : req.body.maxbid,
        currency : req.body.currency,
        timeZone : req.body.timeZone,
        country : req.body.country,
        city : req.body.city,


    })
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.get=(req, res, next) =>{
    Camapign.find((err,docs)=>{
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });

    }

    module.exports.update=(req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.params.id}`);
    
            var user ={
                name : req.body.name,
                stdate : req.body.stdate,
                eddate : req.body.eddate,
                tbudget : req.body.tbudget,
                dbudget : req.body.dbudget,
                timp : req.body.timp,
                dimp : req.body.dimp,
                pmpid : req.body.pmpid,
                minbid : req.body.minbid,
                maxbid : req.body.maxbid,
                currency : req.body.currency,
                timeZone : req.body.timeZone,
                country : req.body.country,
                city : req.body.city,
        
        
            }
        Camapign.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
        });
    };
module.exports.delete= (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Camapign.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
};
