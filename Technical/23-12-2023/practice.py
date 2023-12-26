class records:
    def __init__(self,first_name,last_name,DOB,email):
        self.first_name=first_name
        self.last_name=last_name
        self.dob=DOB
        self.email=email

    """ def valuation(self):
        fullname=self.first_name+" "+self.last_name
        length=len(self.dob)
        value="NO"
        if int(self.dob[length-4])-2023 > 55:
            value="YES"
        email="NO"
        if "@" in self.email:
            email="YES"
        print("Fullname: {}\nAge above 55: {}\n@ in Email: {}".format(fullname,value,email)) """
    def fullname(self):
        print("FUllname:",self.first_name+" "+self.last_name)

    def dob_validation(self):
        length=len(self.dob)
        value="NO"
        if 2023-int(self.dob[length-4:]) > 55:
            value="YES"
        print("Age above 55:",value)
    
    def email_validation(self):
        email="NO"
        if "@" in self.email:
            email="YES"
        print("@ in email:",email)


        
    
emp=records("srujan","dj","10-03-1959","srujan@gmail.com")
emp.fullname()
emp.dob_validation()
emp.email_validation()
print("\n")
emp2=records("user","main","10-03-2001","srujangmail.com")
emp2.fullname()
emp2.dob_validation()
emp2.email_validation()
        


