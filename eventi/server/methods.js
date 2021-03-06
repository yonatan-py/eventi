Meteor.methods({
	'addEvent': function  (event) {
		var users = [];
		var _users = Meteor.users.find().fetch();
		for(var user in _users){
			users.push({
				userId: _users[user]._id,
				rsvp: false
			});
		}
		Events.insert({
			time: event.time,
			title: event.title,
			admins: [this.userId],
			users: users,
            location: event.location,
            notifications: getDefaultNotifications(event.time)
		});
	},
    'addUser': function(user) {
        var userId = Accounts.createUser({
            username: user.username,
            email: user.email
        });
        Meteor.users.update(userId, {$set: {phone: user.phone}});
    }
});