// create some users
if(Meteor.users.find().count() == 0){
	var users = JSON.parse(Assets.getText("fixtures/users.json"));
	for(user in users){
		Accounts.createUser(users[user]);
	}

	// create some events
	var events = JSON.parse(Assets.getText("fixtures/events.json"));
	for(var event in events){ 
		Events.insert(events[event]);
	}

	// put some users in events
	var demo = Events.findOne({title: "demonstraion against accupation"});
	var stand = Events.findOne({title: "stand in jafa"});

	var doron = Meteor.users.findOne({username: "doron"});
	var shai = Meteor.users.findOne({username: "shai"});

	demo.users.push({userId:doron._id, rsvp: false});
	demo.users.push({userId: shai._id, rsvp: false});

	Events.update(demo._id, demo);

	stand.users.push({userId:doron._id, rsvp: false});
	stand.users.push({userId: shai._id, rsvp: false});

	Events.update(stand._id, stand);
}