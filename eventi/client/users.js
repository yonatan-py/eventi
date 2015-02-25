Template.users.helpers({
    users: function () {
        return Meteor.users.find();
    }
});

Template.users.events({
    'click .new-user': function(){
        Session.set('main-view', 'new-user');
    }
})