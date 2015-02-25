Router.route('/', function () {
    this.render('eventi');
});

Router.route('/rsvp/:id/:answer', function () {
    console.log(this.params);
    var notificationId = this.params.id;
    var answer = this.params.answer;
    answer = answer == "yes" ? true : false;
    var notification = Notifications.findOne({"notification_id": notificationId});
    var eventId = notification.event;
    var userId = notification.user;
    var event = Events.findOne({_id: eventId});

    console.log(event);
    this.render('answer');

});