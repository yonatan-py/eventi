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
