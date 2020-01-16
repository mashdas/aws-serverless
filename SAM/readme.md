1>aws s3 mb mash-sam


2>aws cloudformation package --template-file template.yml --output-template-file sam-template.yml --s3-bucket mash-sam


a3>aws cloudformation deploy --template-file sam-template.yml --stack-name sam_stack --capabilities CAPABILITY_IAM


