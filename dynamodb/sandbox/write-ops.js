const AWS=require("aws-sdk");
AWS.config.update({region:'ap-south-1'});

const dClient=new AWS.DynamoDB.DocumentClient();

//writing an object to a table

dClient.put({TableName:"td_notes_sdk",Item:{user_id:"12scd4",timestamp:2133,title:'volex',content:'wire'}},
	(err,data)=>{
		err?console.log(err):console.log(data);

})

// //updating using update...one can do it using the put functionality too

dClient.update({TableName:"td_notes_sdk",Key:{"user_id":"12scd4",timestamp:2133},UpdateExpression:'set #t=:t',
	ExpressionAttributeNames:{'#t':'title'},ExpressionAttributeValues:{':t':"Updated Title"}},(err,data)=>{
		err?console.log(err):console.log(data);		
	})

// //deleting stuff


dCLient.delete({TableName:'td_notes_sdk',Key:{user_id:'12scd4',timestamp:2133}},(err,data)=>{
	err?console.log(err):console.log(data)
})


//batchWrite

dClient.batchWrite({
	RequestItems:{
		'td_notes_sdk':[
           {
           	DeleteRequest: {
           		Key:{
           			user_id:'12scd4',
           			timestamp:2133
           		}
           	}  
           
           },
           {
            PutRequest:{
            	Item:{
            		user_id:'11',
            		timestamp:1,
            		title:"some_title",
            		content:"some_content"
            	}
            }

           },
           {
            PutRequest:{
            	Item:{
            		user_id:'12',
            		timestamp:2,
            		title:"some_other_title",
            		content:"some_other_content"
            	}
            }

           }



		]
	}
},(err,data)=>{
	err?console.log(err):console.log(data)
})