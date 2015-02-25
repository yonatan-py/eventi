Template.newEvent.events({
	'click #new-event .save': function () {
		var date = $('#new-event input.date').val();
		var title = $('#new-event input.title').val();
		var location = $('#new-event input.location').val();
        Meteor.call('addEvent', {
			date: date,
			title: title,
            location: location
		});
	}
});