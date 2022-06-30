import json

with open('./mydata.json', 'r') as f:
  data = json.load(f)

for x in data:
  print(x["id"])
