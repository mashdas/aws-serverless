const AWS=require('aws-sdk');
AWS.config.update({region:"ap-south-1"});

const lambda=new AWS.Lambda({
	endpoint:"THE_ENDPOINT"
});

var params={
	FunctionName: "HelloWorldFunction",
	Payload: new Buffer('{}')
};

var data=await lambda.invoke(params);

console.log(data);