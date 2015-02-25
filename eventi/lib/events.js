events = function () {
	var query = {
		"users.userId": Meteor.userId()
	};
	return Events.find(query).fetch().map(function (event) {
		var user = event.users.filter(function (user) {
			return user.userId == Meteor.userId();
		})[0];
		event.status = user;
		return event;
	});
}

getDefaultNotifications = function(date){
    console.log('date: ', date)
    var date = new Date(date);
    var oneDay = 1000 * 60 * 60 * 24;
    var now = new Date;
    console.log('now: ', now);
    if(now > date){
        return [];
    }
    var diff = date - now;
    console.log('set: ', diff);
    diff = diff / oneDay;
    console.log('divide: ', diff);
    var halfWay = new Date;

    halfWay.setDate(halfWay.getDate() + diff / 2);
    console.log('halfway: ', halfWay);
    return [{
                time: now,
                done: false
            },
            {
                time: halfWay,
                done: false
            }
    ];
}
