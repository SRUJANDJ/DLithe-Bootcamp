from items import item
from phone import phone

item1=phone("newitem",750,2)
item1.send_mail()




""" print(item.all) """
""" item.instantiate_from_csv()
print(item.all) """

""" print(item.all) output:[item('phone',100,5), item('laptop',1000,3), item('cable',10,5), item('mouse',50,5), item('keyboard',75,5)] """



""" print(item1.__dict__) """#display the object attributes