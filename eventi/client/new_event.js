Template.newEvent.events({
	'click #new-event .save': function () {
		var date = new Date($('#new-event input.date').val());
		var title = $('#new-event input.title').val();
		var location = $('#new-event input.location').val();
        Meteor.call('addEvent', {
			time: date,
			title: title,
            location: location
		});
	}
});