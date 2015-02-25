from pymongo import MongoClient

client = MongoClient()
db = client['database']
events = db['events']
users = db['users']

for event in events.find():
	print event

for user in users.find():
	print user['emails']

