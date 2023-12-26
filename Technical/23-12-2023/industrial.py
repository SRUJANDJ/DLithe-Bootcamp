class employee:
    hike=0.2
    def __init__(self,id:int,name:str,salary:float,dept:str):
        assert id>=0,f"id {id} should be greater than 0"
        assert salary>=0,f"id {salary} should be greater than 0"
        self.__id=id
        self.__name=name
        self.__salary=salary
        self.__dept=dept

    @property
    def id(self):
        return self.__id
    @property
    def salary(self):
        return self.__salary
    
    def __salary_hike(self):
        self.__salary=self.__salary+self.__salary*self.hike

    def employee_details(self):
        self.__salary_hike()
        print(f"employee with {self.__id} has a salary {self.__salary} belongs to dept {self.__dept}")



class manager(employee):
    hike=0.3
    def __init__(self, id: int, name: str, salary: float, dept: str,role="Manager"):
        super().__init__(id, name, salary, dept)
        self.__role=role

    

emp1=employee(100,"abc",1000,"a")
emp2=manager(100,"abc",1000,"a")
emp1.employee_details()
emp2.employee_details()



