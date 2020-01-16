//Pre-requisites:This lambda function has permission to execute the nested function.
//the called function "calculator" accepts events with parameters {operation:"mul",input:{operand1: number,operand2:number}




const AWS=require('aws-sdk');
AWS.config.update({region:'ap-south-1'});

var lambda= new AWS.Lambda();

exports.handler = async (event) => {
  let number = event.number;
  let payload=JSON.stringify({operation:"mul",input:{operand1: number,operand2:number}})
  
  let params={
      FunctionName:"calculator",
      InvocationType: "RequestResponse",
      Payload: payload
  }
  
  let data=await lambda.invoke(params).promise();
  let result =JSON.parse(data.Payload);
  return result.body
};
