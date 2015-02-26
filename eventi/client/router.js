Router.route('/', function () {
    this.render('eventi');
});

Router.route('/rsvp/:id/:answer', function () {
    console.log(this.params);
    var notificationId = this.params.id;
    var going = this.params.answer;
    going = going == "yes" ? true : false;
    var notification = Notifications.findOne({"notification_id": notificationId});
    var eventId = notification.event;
    var userId = notification.user;
    var event = Events.findOne({_id: eventId});

    for(var user in event.users){
        if(event.users[user].userId == userId){
            event.users[user].rsvp = true;
            event.users[user].going = going;
            break;
        }
    }
    Events.update(event._id, {$set: {users: event.users}});

    if(going){
        this.render('yes');
    }
    else{
        this.render('no');
    }
});