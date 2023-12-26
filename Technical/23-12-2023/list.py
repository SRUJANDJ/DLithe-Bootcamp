
#append()	Adds an element at the end of the list
fruits = ['apple', 'banana', 'cherry']
fruits.append("orange")

#clear()	Removes all the elements from the list
fruits = ['apple', 'banana', 'cherry', 'orange']
fruits.clear()

#copy()	Returns a copy of the list
fruits = ['apple', 'banana', 'cherry', 'orange']
x = fruits.copy()

#count()	Returns the number of elements with the specified value
fruits = ['apple', 'banana', 'cherry','apple']
x = fruits.count("apple")


#extend()	Add the elements of a list (or any iterable), to the end of the current list
fruits = ['apple', 'banana', 'cherry']
cars = ['Ford', 'BMW', 'Volvo']
fruits.extend(cars)


#index()	Returns the index of the first element with the specified value
fruits = ['apple', 'banana', 'cherry']
x = fruits.index("cherry")

#insert()	Adds an element at the specified position
fruits = ['apple', 'banana', 'cherry']
fruits.insert(1, "orange")

#pop()	Removes the element at the specified position
fruits = ['apple', 'banana', 'cherry']
fruits.pop(1)

#remove()	Removes the item with the specified value
fruits = ['apple', 'banana', 'cherry']
fruits.remove("banana")

#reverse()	Reverses the order of the list
fruits = ['apple', 'banana', 'cherry']
fruits.reverse()

#sort()	Sorts the list
cars = ['Ford', 'BMW', 'Volvo']
cars.sort()


#list comprehension
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []
for x in fruits:
  if "a" in x:
    newlist.append(x)
print(newlist)

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x for x in fruits if "a" in x]
print(newlist)

#accept items other than apple
newlist = [x for x in fruits if x != "apple"]

#using range
newlist = [x for x in range(10)]
