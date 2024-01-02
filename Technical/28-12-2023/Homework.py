class signup:
    def __init__(self):
        self.user_details={}

    def sign_up(self):
        username=input("\nUsername: ")
        password=input("\npassword: ")
        if username not in self.user_details.keys():
            self.user_details[username]=password
            return "User created"
        return "Username exists"
    
class login(signup):
    def __init__(self):
        super().__init__()

    def log_in(self):
        username=input("\nLogin username: ")
        password=input("\nLogin password: ")
        if username in self.user_details.keys():
            if self.user_details[username]==password:
                return "logged in "
        return "no account"
    
item=login()
print(item.sign_up())
print(item.log_in())



    


