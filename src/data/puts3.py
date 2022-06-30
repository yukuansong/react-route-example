import json
import boto3    
s3 = boto3.resource('s3')
s3object = s3.Object('log-0625-2022', 'logs/your_file.log')

# json_data=[{"id":100, "Description":" I am not feeling well", "Doctor": "hello, thanks for contacting us", "Patient":"Hey Doctor"}]
with open('./clean.json', 'r') as f:
  data = json.load(f)

for element in data:
  s3object = s3.Object('log-0625-2022', 'logs/medical' + str(element["id"]) + '.log')
  e =[]
  e.append(element)
  s3object.put(
    Body=(bytes(json.dumps(e).encode('UTF-8')))
  )
