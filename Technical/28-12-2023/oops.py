class userdata:
    def __init__(self):
        self.__user_details=[{"name":"srujan","password":"pass"},{"name":"user","password":"userpass"}
                  ,{"name":"admin","password":"adminpass"}]
        

    def login(self):
        username=input("\nEnter username: ")
        password=input("\nEnter password: ")
        for details in self.__user_details:
            if details['name']==username:
                    if details['password']==password:
                        return "login successfull"
                    else:
                        return "wrong password"
        return "user doesn't exist"
    
    def reset_password(self):
        username=input("\nEnter username: ")
        for details in self.__user_details:
            if details['name']==username:
                password=input('\n Enter new password: ')
                details['password']=password
                return details
        return "User don't exist"
    
    def reset_username(self):
        username=input("\nEnter username: ")
        password=input("\nEnter password: ")
        for details in self.__user_details:
            if details['name']==username:
                    if details['password']==password:
                        newname=input("\nEnter new username: ")
                        details['name']=newname
                        return (details)
                    else:
                        return "wrong password"
        return "user doesn't exist"
    
user1=userdata()
""" print(user1.login()) """
""" print(user1.reset_password()) """
""" print(user1.reset_username()) """
