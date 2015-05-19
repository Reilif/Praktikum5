/**
 * Created by Robin on 19.05.2015.
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MailSchema   = new Schema({
    _id:String,
    sender:String,
    recipients:[],
    cc:[],
    text:String,
    mid:String,
    fpath:String,
    bcc:[],
    to:[],
    replyto:String,
    ctype:String,
    fname:String,
    date:String,
    folder:String,
    subject:String
});

// assign a function to the "methods" object of our animalSchema
MailSchema.statics.allFolders = function (cb) {
    return this.model('mails').find().distinct("folder", cb);
};

MailSchema.statics.getFolderMessage = function (folderName,cb) {
    console.log("Alle Nachrichten in Ordner:" + folderName);
    var msgs = this.find({"folder": folderName}, cb);
    return msgs;
};

module.exports = mongoose.model('mails', MailSchema);