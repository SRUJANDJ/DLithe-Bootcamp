import csv
class item:
    pay_rate=0.8
    all=[]
    def __init__(self,name,price,quantity):

        assert price>0,f"price {price} should be not negative"
        assert quantity>0,f"quantity {quantity} should be not negative"
        self.name=name
        self.price=price
        self.quantity=quantity

        item.all.append(self)
    


    def calculate_price(self):
        return (self.name,self.price*self.quantity)

    def discount_price(self,price):
        self.price=self.price * self.pay_rate

    @classmethod
    def instantiate_from_csv(cls):
        with open('C:\\Users\\sruja\\Desktop\\DLithe\\Technical\\06-12-2023\\items.csv' , 'r') as f:
            print(f,"\t f\n")
            reader=csv.DictReader(f)
            print(reader,"\t reader\n")
            items=list(reader)
        for item in items:
            print(item)

    def __repr__(self):
        return f"item('{self.name}',{self.price},{self.quantity})"

item.instantiate_from_csv()
