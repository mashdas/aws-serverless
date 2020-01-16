const AWS=require('aws-sdk');
AWS.config.update({region:'ap-south-1'});
const dynamodb=new AWS.DynamoDB.DocumentClient();

const tableName=process.env.TABLE_NAME;

exports.handler=async(event)=>{
	let userid=event.pathParamters.userid;
    let data= await dynamodb.delete({
    	TableName: tableName,
    	Key:{
    		userid:userid
    	}
    }).promise();

	
	var stuff=return{
		statusCode: 200,
		body: JSON.stringify({"User deleted successfully"});
	};

    

}