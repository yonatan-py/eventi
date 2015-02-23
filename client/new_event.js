Template.newEvent.events({
	'click #new-event .save': function () {
		var date = $('#new-event input.date').val();
		var title = $('#new-event input.title').val();
		Meteor.call('addEvent', {
			date: date,
			title: title,
			// admins: [Meteor.userId()],
			// users: []
		});
		// Events.insert({
		// 	date: date,
		// 	title: title,
		// 	admins: [Meteor.userId()],
		// 	users: []
		// });
	}
});