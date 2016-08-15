/**
 * Created by tuyuantao on 16/8/14.
 */


function find(table, res) {

    var data = null;
    var  mongodb = require('mongodb');
    var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
    var  db = new mongodb.Db('test', server, {safe:true});
    db.open(function(err, db){
        if(!err) {
            console.log("connect db successfully!");
            db.createCollection(table, {safe:true}, function(err, collection){
                if(err) {
                    data = err;
                } else {
                    collection.find().toArray(function(err, docs){
                        if(res != null) {
                            res.render('index', {'docs': docs});
                        }
                        console.log( docs);

                    });
                }
            });
        }
    });

    return data;
}

function insert(table, data) {
    var  mongodb = require('mongodb');
    var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
    var  db = new mongodb.Db('test', server, {safe:true});
    db.open(function(err, db){
        if(!err) {
            console.log("connect db successfully!");
            db.createCollection(table, {safe:true}, function(err, collection){
                if(err) {
                    console.log(err);
                } else {
                    collection.insert(data, {safe:true}, function(err, result){
                        console.log(result);
                    });
                }
            });
        }
    });
}

exports.find = find;
exports.insert = insert;