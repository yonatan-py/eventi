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
    var oneDay = 1000*60*60*24;
    var now = new Date;
    if(now > date){
        return [];
    }
    var diff = date - now;
    diff = diff / oneDay;
    var halfWay = new Date;
    halfWay.setDate(halfWay.getDate() + diff / 2);
    return [
            {
                date: now,
                done: false
            },
            {
                date: halfWay,
                done: false
            }
    ];
}
