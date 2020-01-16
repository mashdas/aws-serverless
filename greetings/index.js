const greeting={
	"en":"Hello",
	"fr":"Bonjour",
	"ch":"ching chong"
	"ri":"Blyat",
	"uk":"maggit"
	"br":"oy ve"
}

exports.handler=async (event)=>{
	let name=event.pathParameter.name;
	let {lang,...info} = event.queryStringParameter.name;
    let message=`${greeting[lang]?greeting[lang] : greeting["en"]} ${name}`;

    let response={
    	message: message,
    	info:info,
    	timestamp: moment().unix()
    }

	 return {
		statusCode: 200,
		body: JSON.stringify(response)
	  }
}

