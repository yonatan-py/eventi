Template.eventsUAdmin.helpers({
	events: function(){
		return Events.find().fetch();
	}
});

Template.eventsUAdmin.events({
	'click #events-u-admin .event': function () {
		Session.set('admin-event', this);
		Session.set('main-view', 'admin-event');
	}
});