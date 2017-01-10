prefix = 'Relaying: ';

module.exports = function(message) {
	console.log(prefix + message);
}

var flights = require('../date');

var flight = require('../flight');

for (var number in flight){
	flight[number] = flight(flights[number]);
};

exports.flight = function(req, res){
	res.json(flight.getInformation());
	var number = req.param('number');
	if (typeof flights[number] === 'undefined'){
		req.states(404).json({status: 'error'});
	} else{
		res.json(flights[number].getInformation());
	}
}