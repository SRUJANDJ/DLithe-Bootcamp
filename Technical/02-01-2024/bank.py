import re
import json
import random

class Bank:
    def __init__(self):
        pass
    
    @staticmethod
    def __validity(data, key):
        if re.match(data, key):
            return True
        else:
            print("Invalid", key)
            return False

    @staticmethod
    def __add_to_json(data):
        path = "bank_details.json"
        try:
            with open(path, "r") as f:
                file_content = f.read()
                existing_data = json.loads(file_content) if file_content else []
        except FileNotFoundError:
            existing_data = []

        existing_data.append(data)

        with open(path, "w") as f:
            json.dump(existing_data, f, indent=4)
    
    @staticmethod
    def validity(data, key):
        return Bank.__validity(data, key)

    @staticmethod
    def add_to_json(data):
        Bank.__add_to_json(data)


class Actions(Bank):
    def __init__(self):
        super().__init__()
        self.username = input("\nEnter Username: ")
        while True:
            self.email = input("\nEnter Email: ")
            pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[com|COM]+$'
            if Bank.validity(pattern, self.email):
                break

        while True:
            self.password = input("\nEnter Password: ")
            pattern = r'^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-]).*$'
            if Bank.validity(pattern, self.password):
                break
        self.account_number = random.randint(1000000000, 9999999999)

        while True:
            self.balance = int(input("\nCredit money min amount 1000: "))
            if self.balance >= 1000:
                break

        self.data = {self.email: {"username": self.username, "password": self.password, "account_number": self.account_number, "balance": self.balance}}
        Bank.add_to_json(self.data)

    def credit(self):
        amount = int(input("\nEnter Amount: "))
        with open('bank_details.json', 'r+') as f:
            data = json.load(f)
            for details in data:
                if self.email in details:
                    details[self.email]['balance'] += amount
                    f.seek(0)
                    json.dump(data, f, indent=4)

    def debit(self):
        amount = int(input("\nEnter Amount: "))
        with open('bank_details.json', 'r+') as f:
            data = json.load(f)
            for details in data:
                if self.email in details:
                    if details[self.email]['balance'] >= amount:
                        details[self.email]['balance'] -= amount
                        f.seek(0)
                        json.dump(data, f, indent=4)
                    else:
                        print("Insufficient balance")

item2 = Actions()
item2.credit()

