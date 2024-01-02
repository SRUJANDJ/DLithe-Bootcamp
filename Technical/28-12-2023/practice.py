


def login(user_details):
    username=input("\nEnter username: ")
    password=input("\nEnter password: ")
    for details in user_details:
        if details['name']==username:
                if details['password']==password:
                    return "login successfull"
                else:
                    return "wrong password"
    return "user doesn't exist"

def reset_password(user_details):
    username=input("\nEnter username: ")
    for details in user_details:
        if details['name']==username:
            password=input('\n Enter new password: ')
            details['password']=password
            return details
    return "User don't exist"

def reset_username(user_details):
    username=input("\nEnter username: ")
    password=input("\nEnter password: ")
    for details in user_details:
        if details['name']==username:
                if details['password']==password:
                    newname=input("\nEnter new username: ")
                    details['name']=newname
                    return (details)
                else:
                    return "wrong password"
    return "user doesn't exist"
    

if __name__=='__main__':
    user_details=[{"name":"srujan","password":"pass"},{"name":"user","password":"userpass"}
                  ,{"name":"admin","password":"adminpass"}]
    while(True):
        choice=int(input("\n1.Login\n2.Reset password\n3.Reset username\n4.exit\nEnter your choice: "))
        if choice==1:
            print(login(user_details))
        elif choice==2:
            print(reset_password(user_details))
        elif choice==3:
            print(reset_username(user_details))
        elif choice==4:
            break
        else:
            print("wrong input")


        