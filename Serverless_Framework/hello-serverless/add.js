module.exports.add= async (event,context)=>{
	let {num,num2}=JSON.parse(event.body);

	return{
		statusCode:200,
		body: JSON.stringify({
			num1:num1,
			num2:num2,
			result: num1+num2
		}),
	};
};