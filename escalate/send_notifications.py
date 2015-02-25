from datetime import datetime

from pymongo import MongoClient
import ipdb

from send_mail import EmailNotificationSender

client = MongoClient()
db = client['database']
events = db['events']
users = db['users']

now = datetime.now()

email_notfication_sender = EmailNotificationSender(db)

for event in events.find():
	date = event.get('time')
	if not date or date < now:
		continue
	notifications = event.get('notifications')
	for notification in notifications:
		# ipdb.set_trace()
		if not notification.get('done') and notification.get('time') < now:
			print notification.get('time')
			
			for user in event.get('users'):
				email_notfication_sender.send(user, event)




