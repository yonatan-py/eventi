Session.setDefault('main-view', 'events');

Template.loggedin.helpers({
	showEvents: function  () {
		return Session.get('main-view') == 'events' ? 'events' : '';		
	},
	showNewEvent: function  () {
		return Session.get('main-view') == 'new-event' ? 'new-event' : '';		
	},
	showEventsUAdmin: function  () {
		return Session.get('main-view') == 'events-u-admin' ? 'events-u-admin' : '';		
	},
	showAdminEvent: function  () {
		return Session.get('main-view') == 'admin-event' ? 'admin-event' : '';		
	},
    showUsers: function  () {
        return Session.get('main-view') == 'users' ? 'users' : '';
    },
    showNewUser: function  () {
        return Session.get('main-view') == 'new-user' ? 'new-user' : '';
    }
});

