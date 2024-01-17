class sme:
    def __init__(self,value_one,value_two):
        self.value_one=value_one
        self.__value_two=value_two



obj=sme(6,7)
print(obj.value_one)
print(obj.__value_two)
print("\n\n\n\n\n")
        