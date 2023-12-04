print("\n")

""" 
if condition1:
	print("Condtion 1 executed")
else:
	print("Condtion 2 executed")



if condition1:
	print("Condtion 1 executed")
elif condition2:
	print("Condtion 2 executed")
elif condition3:
	print("Condtion 3 executed")
else:
	print("Condtion 4 executed")



if a>=b and a>=c:
	print(a," is the greatest")
elif b>=c:
	print(b," is the greatest")
else:
	print(c," is the greatest")
	

if condition: print("condition executed")

print("condition1 executed") if condition else print("condition 2 executed") 
"""

""" a=29 
b=20
c=-30

if a>=b and a>=c:
	print(a," is the greatest")
elif b>=c:
	print(b," is the greatest")
else:
	print(c," is the greatest") """
	
#shorthand representation
	
""" if True: print("condition executed") """

""" print("condition1 executed") if False else print("condition 2 executed")

print(round(4.655,2))

li=[1,2,[3,4,5,6,7]]
print(li[2][0:2])


 """
#li=[1234,1234,1234,1234]
""" li=list(map(int,input("enter list values\t").split()))
checksum=li[0]
for i in range(1,len(li)):
    checksum=checksum+li[i]
    print("\n",checksum)
    while len(str(checksum))>2:
        checksum=int(str(checksum)[0])+int(str(checksum)[1:])
        print(checksum)
print("\nfinal checksum",checksum) """





print("\n")

string=input("Enter you string\n").split()
dictionary={}
for i in range(len(string)):
    dictionary[i]=string[i]
print(dictionary)
for i in range(len(dictionary)):
    for j in range(len(dictionary)-i-1):
        if dictionary[j]>dictionary[j+1]:
            dictionary[j],dictionary[j+1]=dictionary[j+1],dictionary[j]
print(dictionary)

            
    
    