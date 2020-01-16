const AWS= require("aws-sdk");
AWS.config.update({region:'ap-south-1'});

const dynamodb=new AWS.DynamoDB();


//filtering on the basis of table name

var params={
	ExclusiveStartTableName:'td_notes',
	Limit:0
}


dynamodb.listTables({},(err,data)=>{ //replace the empty objet with params
	if(err){
		console.log(err);
	}
	else{
		console.log(data);	
	}
})


//describing a table

dynamodb.describeTable({TableName: "td_notes"},(err,data)=>{
	err?console.log(err):console.log(JSON.stringify(data,null,2));
})

//creating a table

var att_def=[{AttributeName:"user_id",AttributeType:"S"},{AttributeName:"timestamp",AttributeType:"N"}]

var key_schema=[{AttributeName:"user_id",KeyType:"HASH"},{AttributeName:"timestamp",KeyType:"RANGE"}]

var prov_throughput={ReadCapacityUnits:1,WriteCapacityUnits:1}

dynamodb.createTable({TableName:"td_notes_sdk",AttributeDefinitions:att_def,KeySchema:key_schema,
	ProvisionedThroughput:prov_throughput},(err,data)=>{
			err?console.log(err):console.log(JSON.stringify(data,null,2));		
	})

//updating the rcu of the table

dynamodb.updateTable({
	TableName:"td_notes_sdk",
	ProvisionedThroughput:{ReadCapacityUnits:2,WriteCapacityUnits:1}
},(err,data)=>{
	err?console.log(err):console.log(JSON.stringify(data,null,2));
})

//deleting the table
dynamodb.deleteTable({
	TableName:"td_notes_sdk"},(err,data)=>{
	err?console.log(err):console.log(JSON.stringify(data,null,2));
})