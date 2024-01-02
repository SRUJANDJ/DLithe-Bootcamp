""" import re
def validity(data,key):
    if re.match(data,key):
        print(key, "Valid")
    else:
        print("invalid",key)



user_details={"firstname":"srujan",'email':"srujandj@gmail.com","password":"Srujan@1","date":"21/3/2001","id":"DT101"}


pattern=r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[com|COM]+$'
validity(pattern,user_details['email'])

pattern = r'^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-]).*$'
validity(pattern,user_details['password'])

pattern=r'^([1-31])/([1-12])/\d{4}$'
validity(pattern,user_details['date'])

pattern = r'^DT\d{3}$'
validity(pattern,user_details['id']) """



""" user_details=[{"name":"bibin","age":20},
              {"name":"nikil","age":19},
              {"name":"shri","age":18},
              {"name":"varsha","age":17},
              {"name":"ziya","age":16}]

sorted_userdetails=sorted(user_details,key=lambda x:x['age'])
print(sorted_userdetails) """


""" li=[[1,2,3],[7,8,9],[4,5,6]]
max_ele=max(max(li,key=lambda x:max(x)))
print(max_ele) """


""" al_list=["sorting","my","name","is","srujan","how","about","you"]
list_sorted=sorted(al_list,key=lambda x:len(x))
print(list_sorted) """

""" values={"a":1,"b":2,"c":3}
new_values=dict(map(lambda x:(x[1],x[0]),values.items()))
print(new_values) """



""" words=['apple','banana','kiwi','orange','grape']
newone=list(filter(lambda x:'a' in x,words))
print(newone) """