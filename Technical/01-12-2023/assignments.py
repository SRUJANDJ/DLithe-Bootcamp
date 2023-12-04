#Question 5
""" li=[[1,3,9,0],[5,7,8,4],[4,3,0,1]]
nl=[]
def checking(i,nl):
    for j in range(i+1,len(nl)):
        if nl[i]==nl[j]:
            container[0].append(nl[i])
            break
    if nl[i] not in container[0]:
        container[1].append(nl[i])

for i in li:
    nl.extend(i)
print(nl)
container=[[],[]]
for i in range(len(nl)):
    if nl[i] in container[0]:
        continue
    checking(i,nl)
print(container) """

#Question 7

def find_length(nl,ml):
    x=0
    if len(nl)==1:
        n=int(len(ml)/2)
    elif len(nl)>int(len(ml)/2):
        n=2
        x=1
    else:
        n=int(len(ml)/len(nl))
    return n,x

ml=[1,3,5,7,9,11,13,15,17,19]
nl=[2,4,6,8,10,12,14,16,18,20,22,24,26]
n,x=find_length(nl,ml)
m=int(n)
for i in range(len(nl)):
    ml.insert(n-x,nl[i])
    if x==0:
        n+=(m+1)
    else:
        n+=m
print(ml)


#Question 1
""" string="srujan is my $$ name m@n$$#.,,"
for i in string:
    if not i.isalnum() and  i!=" ":
        string=string.replace(i,"")
print(string)
 """
#Question 3
""" string=input()
string=string.title().split()
dictionary={}
for i in range(len(string)):
    dictionary[i]=string[i]
print(dictionary) """

#Question 6
""" string="my name is srujan"
string=string.split()
print(string)
string=string[::-1]

print(" ".join(string))
 """
""" #Question 4
dictionary={1:"a",
            2:"b",
            3:"c",
            4:"d",
            5:"e",
            6:"e",  
            "e":"E"}
search_word=input()
for i,j in dictionary.items():
    if str(i)==search_word:
        print("value",j)
    elif str(j)==search_word:
        print("key",i) """

#Question 2
""" print("Hi Guys how are you")


name="srujan"
mark="?"
print(name,"how are you",mark) 


age=22
print(f"I am {age} years old")



start="9.30"
end="5.30"
print("The session starts at {} and ends at {}".format(start,end))



print("The session starts at {starts} and ends at {ends}".format(ends=end,starts=start))

print("hi""hello")

print(r"The \n End")
print("The \n End")

for i in range(5):
    print(i)

for i in range(5):
    print(i,end=' ') """


                