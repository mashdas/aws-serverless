const AWS=require('aws-sdk');
const stepFunctions=new AWS.StepFunctions();

exports.handler = async (event) => {
    let params={
        stateMachineArn:"arn:aws:states:ap-south-1:052884545342:stateMachine:Simple_State_Machine",
        input:JSON.stringify(event),
        name:"ble_de_la_bley"
    }
    
    var data=await stepFunctions.startExecution(params).promise();
    console.log(data);
    return data;
};

