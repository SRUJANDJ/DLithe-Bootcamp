from items import item
class phone(item):
    all=[]
    def __init__(self, name:str, price:float, quantity=0,broken_phone=0):
        
        super().__init__(name, price, quantity)
        assert broken_phone>=0, f"damaged {broken_phone} should be greater than 0"
        self.broken_phone=broken_phone
        phone.all.append(self)