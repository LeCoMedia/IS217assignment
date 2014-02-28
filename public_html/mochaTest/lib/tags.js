exports = module.exports = {};

exports.parse = function(args, defaults) {
	var options = {}
		if (typeof defaults === "object" && !(defaults instanceof Array)) {
    		options = defaults
   		}

	for (var i in args) { //cycle throuhgh args
		var arg = args [i];
		//check if long formed tag
		if (arg.substr(0, 2) === "--") {
			arg = arg.substr(2);
			//check for equals sign
			if (arg.indexOf("=") != -1) {
				arg = arg.split("=");
				var key =arg.shift();
				options[key] = arg.join("=");
				var value = arg.join("=");
 
    			if (/^[0-9]+$/.test(value)) {
        			value = parseInt(value, 10);
    				}
    			options[key] = value;
				}
			}
		}
	return options;
}

