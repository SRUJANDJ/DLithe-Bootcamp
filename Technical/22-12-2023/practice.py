class operation():
    def __init__(self,num1,num2):
        self.num1 = num1
        self.num2 = num2
    def add(self):
        return self.num1 + self.num2
    def subtract(self):
        return self.num1 - self.num2
    def mul(self):
        return self.num1 * self.num2
    def division(self):
        return self.num1 / self.num2

item=operation(10,5)
print("Addition:", item.add())
print("Subtraction:", item.subtract())
print("Multiplication:", item.mul())
print("Division:", item.division())


import math

class Shape:
    def __init__(self):
        pass

    def area(self):
        return math.pi * self.radius**2

    def perimeter(self):
        return 2 * math.pi * self.radius
class circle(Shape):
    def __init__(self, radius):
        super().__init__()
        self.radius = radius
item = circle(5)
print("Area:", item.area())
print("Perimeter:", item.perimeter())



class Shape:
    def _init_(self):
        pass

    def area(self):
        pass

    def perimeter(self):
        pass

#Square
    
class Square():
    def _init_(self, side):
        self.side = side

    def area(self):
        return  side*side

    def perimeter(self):
        return 4 *side
    
# Rectangle

class Rectangle(Shape):
    def _init_(self,length,width,):
        super()._init_()
        self.length = length
        self.width = width

    def area(self): #l*w
        return self.length*self.width
    
    def perimeter(self): #2(l+w)
        return 2 *(self.length+self.width) 

#Triangle
    
class Triangle():
    def _init_(self,base,height,a,b,c):
        self.base = base
        self.height = height
        self.a=a
        self.b=b
        self.c = c
    def area(self): 
        return 0.5 * self.height * self.base
    
    def perimeter(self):
        return a+ b+ c



# Create an object of the Circle class
side = 5
obj = Square(side)
# Create an object of the Rectangle class
length = 5
width=6
obj2 = Rectangle(length,width)
# Create an object of the Triangle class
base=2
height=3
a=2
b=3
c=4
obj3=Triangle(base,height,a,b,c)

#  print the area and perimeter(Square,Rectangle,Triangle)

print("Area of the Square:", obj.area())
print("Perimeter of the Square:", obj.perimeter())
print("Area of rectangle: ",obj2.area())
print("perimeter of rectangle:",obj2.perimeter())
print("Area of triangle:",obj3.area())
print("Perimeter of triangle:",obj3.perimeter())