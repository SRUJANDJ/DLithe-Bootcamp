"""Why json?
*exchange of data between server and the application
*easy to read and write for humans and easy to parse and generate for machines
*json  module is py helps in converting  json to py and py to json
*json is supported across diffrent programming languages


where it is used?
*in web-dvpmnt for exchange of data between server and client
*can be used in diffrent databases like mongodb
*can be used for testing purpose"""

""" import json
user_details={"firstname":"srujan","lastname":"DJ","age":22}

json_user_details=json.dumps(user_details)
print(user_details)
print(json_user_details)


py_user_details=json.loads(json_user_details)
print(py_user_details)



#write
data_to_write = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

json_file_path = "example.txt"
with open(json_file_path, 'w') as json_file:
    json.dump(data_to_write, json_file, indent=4)
print("Data written to", json_file_path)


#read
json_file_path = "example.txt"
with open(json_file_path, 'r') as json_file:
    data_read = json.load(json_file)

print("Data read from", json_file_path)
print(data_read)

#extract
name_value = data_read["name"]
age_value = data_read["age"]
city_value = data_read["city"]
print("Name:", name_value)
print("Age:", age_value)
print("City:", city_value) """






import json
""" json_str_obj=json.dumps("srujan")
print(json_str_obj)
json_num_obj=json.dumps(22)
print(json_num_obj)
json_dict_obj=json.dumps({"user_details":{"name":"srujan","age":22}})
print(json_dict_obj)
json_arr_obj=json.dumps(["bibin","nikil","shri"])
print(json_arr_obj)
json_bool_obj=json.dumps(True)
print(json_bool_obj) """

""" data={"c":1,"b":2,"a":3}
data_s=json.dumps(data,sort_keys=True,indent=4)
print(data_s)
 """



""" json_string = {"name": "srujan", "age": 22, "state":"karnataka"}
print(type(json_string))
python_dict = json.loads(json_string)
print(type(python_dict))
print(python_dict) """


""" user_details={"firstname":"srujan","lastname":"DJ","age":22}
print(type(user_details))
json_user_details=json.dumps(user_details)
print(type(json_user_details))
print(json_user_details)


py_user_details=json.loads(json_user_details)
print(type(py_user_details))
print(py_user_details) """


""" user_details = {
    "name": "srujan",
    "age": 22,
    "state": "karnataka"
}

file_path = "example.json"
with open(file_path, 'w') as f:
    json.dump(user_details, f, indent=4)


file_path = "example.json"
with open(file_path, 'r') as f:
    data = json.load(f)
print(data)

extra_data = {"year": 2001}

with open(file_path,"r+") as f:
    data = json.load(f)
    data.update(extra_data)
    f.seek(0)
    json.dump(data, f, indent=4)

file_path = "example.json"
with open(file_path, 'r') as f:
    data = json.load(f)
print(data)

 """


""" user_details={"firstname":"srujan","lastname":"DJ","age":22}
using_encoder=json.JSONEncoder().encode(user_details)
print(type(using_encoder))
print(using_encoder)

user_details='{"firstname":"srujan","lastname":"DJ","age":22'
try:
  using_decoder=json.JSONDecoder().decode(using_encoder)
  print(type(using_decoder))
  print(using_decoder)
except json.JSONDecodeError as e:
  print(f"{e}") """



import requests

url = "https://gbfs.citibikenyc.com/gbfs/2.3/gbfs.json"
path = "task.json"
response = requests.get(url)

data = response.json()
with open(path, 'w') as f:
  json.dump(data, f, indent=4)


with open(path,"r") as f:
  data=json.load(f)
print(data)



