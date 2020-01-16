##The Lambda service needs to be up and running
>>Command: sam local start-lambda
O/P:you get an ip address as an endpoint on which the lambda service is running...call it THE_ENDPOINT
##We can now trigger the lambda function from our application code using the AWS sdk.



##To generate local sam event data:

sam local generate-event <service> <event>
Example: sam local generate-event s3 put> event.json
