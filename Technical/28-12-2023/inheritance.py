class store:
    products=4
    def __init__(self):
        pass
    def billing(self,number):
        if store.products>0 and number<=store.products:
            store.products=store.products-number
        
        print(f"there are {store.products} products")
    
    

class counter_one(store):
    def __init__(self,number):
        self.number=number
        super().__init__()
        self.billing(self.number)
        

    
class counter_two(store):
    def __init__(self,number):
        self.number=number
        super().__init__()
        self.billing(self.number)

        

class counter_three(store):
    def __init__(self,number):
        self.number=number
        super().__init__()
        self.billing(self.number)

        

class counter_four(store):
    def __init__(self,number):
        self.number=number
        super().__init__()
        self.billing(self.number)


counter4=counter_four(2)
counter3=counter_three(1)




