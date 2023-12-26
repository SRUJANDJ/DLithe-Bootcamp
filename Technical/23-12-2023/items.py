import csv

class item:
    pay_rate=0.8 #class attribute
    all=[]

    def __init__(self,name:str,price:float,quantity=0):

        #run validation
        assert price>=0,f"price {price} less than 0"
        assert quantity>=0,f"quantity {quantity} less than 0"

        self.__name=name
        self.__price=price
        self.quantity=quantity

        #actions to execute
     
        item.all.append(self)
    
    @property
    def price(self):
        return self.__price

    def apply_discount(self):
        self.__price=self.__price * self.pay_rate

    def apply_increment(self,increment_value):
        self.__price=self.__price+self.__price*increment_value

    @property
    def name(self):
        return self.__name
    
    @name.setter
    def name(self,value):
        self.__name=value

    def calculate_total_price(self):
        print(self.__price*self.quantity)

    def __connect(self):
        pass

    def __create_body(self):
        print(f"""
        Hey how are you 
        we have {self.__name} in stock
        with the price {self.__price}
        and quantity {self.quantity}
        """)
    def send_mail(self):
        self.__connect()
        self.__create_body()
    
        

    @classmethod
    def instantiate_from_csv(cls):
        with open("C:/Users/sruja/Desktop/DLithe/Technical/23-12-2023/items.csv","r") as f:
            reader=csv.DictReader(f)
            items=list(reader)
            for Item in items:
                item(
                    name=Item.get('name'),
                    price=float(Item.get('price')),
                    quantity=int(Item.get('quantity')),
                )

    @staticmethod
    def is_integer(num):
        if isinstance(num, float):
            return num.is_integer()
        elif isinstance(num, int):
            return True
        else:
            return False            

    def __repr__(self):
        return f"{self.__class__.__name__}('{self.name}',{self.__price},{self.quantity})"