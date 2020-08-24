var AWS = require('aws-sdk');

var iotdata = new AWS.IotData({endpoint:"a3lj7ua1d0mnqo-ats.iot.ap-southeast-2.amazonaws.com"});

exports.handler = function(event, context, callback) {

console.log("Start Light",iotdata);

    var params = {
        topic: 'arduino/incoming',
        payload: 'start light',
        qos: 0
        };


    iotdata.publish(params, function(err, data){
        if(err){
            console.log("Error occured : ",err);
        }
        else{
            console.log("success.....");
           
        }
    });

    callback(null, {
        "dialogAction": {
          "type": "ConfirmIntent",
          //"fulfillmentState": "Fulfilled", // <-- Required
          "message": {
            "contentType": "PlainText",
            "content": "Please wait a while we turn on the light. Once you see the light turn on please place your bottle through the bin. Use the camera on your to send me a picture of the bottle. Thanks Mate, to collect your reward please see someone at the till."
          },
          "intentName": "RecycleBottle",
        }
    });
};