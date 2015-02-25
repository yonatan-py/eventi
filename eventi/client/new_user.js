Template.newUser.events({
   'click #new-user .save': function(){
       var username = $('#new-user .username').val();
       var email = $('#new-user .email').val();
       var phone = $('#new-user .phone').val();
       Meteor.call('addUser', {
            username: username,
            email: email,
            phone: phone
       });
   }
});