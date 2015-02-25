import smtplib
from email.mime.text import MIMEText
from pystache import render
import ipdb

from settings import HOST

class EmailNotificationSender():
	def __init__(self, mongo_db):
		self.smtp = smtplib.SMTP('localhost')
		self.notifications = mongo_db['notifications']
		self.users = mongo_db['users']

	def send(self, user, event):
		
		user = self.users.find_one({'_id': user['userId']})
		email = user.get('emails')[0]['address']
		notification_id = self.notifications.insert({
			'user': user['_id'],
			'event': event['_id'],
		})



		self.notifications.update({"_id": notification_id}, {"$set": {"notification_id": str(notification_id)}})

		fd = open('./email.html', 'rb')
		message = render(fd.read(), {
			'id': notification_id,
			'host': HOST
		})
		
		msg = MIMEText(message, 'html')
		

		msg['Subject'] = 'eventi notification'
		msg['From'] = 'info@eventi.com'
		msg['To'] = email

		self.smtp.sendmail('info@eventi.com', [email], msg.as_string())
	
	def __del__(self):	
		self.smtp.quit()