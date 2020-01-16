const AWS=require("aws-sdk");
AWS.config.update({region:'ap-south-1'});

const dClient=new AWS.DynamoDB.DocumentClient();


dClient.put({TableName:'td_notes_sdk',Item:{user_id:'11',timestamp:1,title:'Testing Conditional',content:"asd"},
ConditionExpression: "#t=:t",
ExpressionAttributeNames:{
	'#t': 'timestamp'
},
ExpressionAttributeValues:{
	':t':1
}
},(err,data)=>{
	err?console.log(err):console.log(data);
})