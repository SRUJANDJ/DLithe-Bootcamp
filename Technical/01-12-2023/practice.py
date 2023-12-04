"""Write a program to add a new element to the end 
of the list using python in built function"""

print("\n")
li=[1,2,3,4,5]
li.append(6)
print(li)
print("##########################################append")

"""write a program to insert an element at the specified 
location of list using python in built function"""
li=[1,2,3,4,5]
li.insert(1,10)
print(li)
print("##########################################insert")

"""write a program to add one list to another list using 
python in built function"""
list1=[1,2,3,4]
list2=[5,6,7,8]
list1.extend(list2)
print(list1)
print("##########################################extend")

"""write a program to remove element from specified location
 in the list using python in built function"""
li=[1,2,3,4,5]
print(li.pop(2))
print(li)
print("##########################################pop")

"""program to make copy of list using python in built 
function"""
li=[1,2,3,4,5]
newlist=li.copy()
print(newlist)
print("##########################################copy")



#string methods
""" write a python program to remove the value in
 begining and ending of the string """
string="aaaathis is a sentanceaaaaa"
string=string.strip()
print(string)
print("##########################################strip")


#program to replace the letter in the string
string="this is a s_nt_nce"
string=string.replace("_","")
print(string)
print("##########################################replace")

#given a string input convert it into a list
string="this is a string"
string.split()
print(string)
print("##########################################split")

#convert all the letters in the string to uppercase
string="this is a sentence"
string=string.upper()
print(string)
print("##########################################uppper")
#program to check if there is no numbers in string
string="the number 9>8"
for i in string:
    if i.isdigit():
        print("the number is ",i)
        print("##########################################isdigit")

print("\n")






print([(i) for i in range(1,100) if i%2==0])
print([(i) for i in range(1,100) if i%2!=0])



li=[1,2,3,4,5,6,7,8]
li=list(filter(lambda x:(x%2==0),li))
print(li)


a=10
b=5
print(" values are {} and {}".format(a,b));