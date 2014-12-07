Session.setDefault('main-view', 'events');

Template.loggedin.helpers({
	showEvents: function  () {
		return Session.get('main-view') == 'events' ? 'events' : '';		
	},
	showNewEvent: function  () {
		return Session.get('main-view') == 'new-event' ? 'new-event' : '';		
	}
});