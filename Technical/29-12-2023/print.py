name="srujan"
price_one=20
price_two=30
quantity=5
item="book"
age=22

# % operator
print("There is item %s with quantity %d and price  %d each"%(item,quantity,price_two))
print("My name is %s and age is %d\n"%(name,age))


#f string
print(f"There is item {item} with quantity {quantity} and price  {price_two} each")
print(f"My name is {name} and age is {age}\n")


#format
print("There is item {} with quantity {} and price  {} each".format(item,quantity,price_two))
print("My name is {} and age is {}\n".format(name,age))

#end
for i in range(1,11):
    print(i,end=" ")
print("\n")


#sep
print(item,quantity,price_two,sep=", ")

value=15.117
print(f"{value:.2f}")
txt="how are you"
print("{:<10}".format(txt))


