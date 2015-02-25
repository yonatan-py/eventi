Template.menuToggle.events({
	'click .menu-toggle': function () {
		$('.menu-content').toggle();
	}
});

Template.menu.events({
	'click .menu-item.events': function () {
		Session.set('main-view', 'events');
	},
	'click .menu-item.create-event': function () {
		Session.set('main-view', 'new-event');
	},
	'click .menu-item.events-u-admin': function () {
		Session.set('main-view', 'events-u-admin');
	},
    'click .menu-item.users': function () {
        Session.set('main-view', 'users');
    },
});