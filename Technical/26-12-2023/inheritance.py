""" class organisation:
    def __init__(self,name):
        self.name=name

    def org_status(self):
        print("properties are given")


class employee(organisation):
    def __init__(self, name,emp_name):
        self.emp_name=emp_name
        super().__init__(name)

    def emp_status(self):
        print(f"properties received from {self.name} to the emp {self.emp_name}")


item1=organisation("Dlithe")
item1.org_status()
item2=employee("Dlithe","rahul")
item2.emp_status() """



""" class parent_one:
    def parent_one_statues(self):
        print("sent from parent_one")
class parent_two:
    def parent_two_statues(self):
        print("sent from parent_two")
class child(parent_one,parent_two):
    def child_statues(self):
        print("received at child")

item=child()
item.parent_one_statues()
item.parent_two_statues()
item.child_statues() """



""" class parent_one:
    def parent_one_statues(self):
        print("sent from parent_one")
class parent_two(parent_one):
    def parent_two_statues(self):
        print("sent from parent_two")
class child(parent_two):
    def child_statues(self):
        print("received at child")

item=child()
item.parent_one_statues()
item.parent_two_statues()
item.child_statues()
 """
