class Employee:
    def __init__(self, name, employee_id, department):
        self.name = name
        self.employee_id = employee_id
        self.department = department
        self.salary = 0  # Default salary

    def set_salary(self, salary):
        if salary < 0:
            print("Salary cannot be negative. Setting to 0.")
            self.salary = 0
        else:
            self.salary = salary

    def get_salary(self):
        return self.salary

    def display_info(self):
        print(f"Employee ID: {self.employee_id}")
        print(f"Name: {self.name}")
        print(f"Department: {self.department}")
        print(f"Salary: ${self.salary}")


# Subclass representing a Manager
class Manager(Employee):
    def __init__(self, name, employee_id, department, bonus_percentage):
        super().__init__(name, employee_id, department)
        self.bonus_percentage = bonus_percentage

    # Overriding the base class method
    def display_info(self):
        super().display_info()
        print(f"Bonus Percentage: {self.bonus_percentage}%")

    # Overriding the base class method to calculate total compensation
    def get_salary(self):
        base_salary = super().get_salary()
        bonus_amount = base_salary * (self.bonus_percentage / 100)
        total_salary = base_salary + bonus_amount
        return total_salary


# Example usage:
employee1 = Employee("John Doe", 101, "Production")
employee1.set_salary(50000)

manager1 = Manager("Jane Smith", 201, "Management", 15)
manager1.set_salary(80000)

# Display information for both employee and manager
employee1.display_info()
print("\n")
manager1.display_info()
