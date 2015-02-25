Template.rsvp.helpers({
	RSVPs: function  () {
		return events().filter(function (event) {
			return !event.status.rsvp;
		})
	}
});

Template.rsvp.events({
	'change input[type="radio"]': function (jQueryEvent, BlazeTemplateInstance) {
		for(var user in this.users){
			if(this.users[user].userId == Meteor.userId()){
				this.users[user].rsvp = true;
				if(jQueryEvent.target.defaultValue == "going"){
					this.users[user].going = true;
				}
				else{
					this.users[user].going = false;
				}
			}
			Events.update(this._id, this);
		}
	}
});