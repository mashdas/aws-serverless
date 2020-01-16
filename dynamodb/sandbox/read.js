const AWS=require("aws-sdk");
AWS.config.update({region:'ap-south-1'});

const dClient=new AWS.DynamoDB.DocumentClient();


dClient.get({
	TableName:'td_notes_sdk',
	Key:{
		user_id:'11',
		timestamp:1
	}
},(err,data)=>{
	err?console.log(err):console.log(data);
})


dCLient.query({
	TableName: 'td_notes_sdk',
	KeyConditionExpression:"user_id=:uid",
	ExpressionAttributeValues:{
		"uid":'11'	
	}
},(err,data)=>{
	err?console.log(err):console.log(data);
})



dClient.scan({
	TableName:"td_notes_sdk",
	FilterExpression: "cat=:cat",
	ExpressionAttributeValues:{
		":cat":"general"
	}
},(err,data)=>{
	err?console.log(err):console.log(data);	
})



//Reading from multiple tables

var params={
	RequestItems:{
		"td_notes":{
			Keys:[{userid:"1",timestamp:"22"}]
		},
		"td_notes_sdk":{
			Keys:[{userid:"1",timestamp:"22"}]
		}
	}
};

dClient.batchGet(params,(err,data)=>{
   err?console.log(err):console.log(data);	
})














