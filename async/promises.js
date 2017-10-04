var isMomHappy = true;

var willIgetNewPhone = new Promise(
	function(resolve, reject) {
		if (isMomHappy) {
			var phone = {
				brand : "Samsung",
				color : "Black"
			};
			resolve(phone);
		}
		else {
			var reason = new Error('mom is not happy');
			reject(reason);
		}
	}
);

var showOff = function(phone) {
	var line = `Check out my new ${phone.color} ${phone.brand} phone!`;
	//setTimeout(function(line) {
		return Promise.resolve(line);
	//}, 1000)
}

function askMom() {
	willIgetNewPhone
		.then(function(phone) {
			return showOff(phone);
		})
		.then(function(whoSaw) {
			console.log(whoSaw);
		})
		.catch(function(err) {
			console.log(err);
		})
};

askMom();