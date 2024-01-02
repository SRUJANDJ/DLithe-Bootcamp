import time

user_list=list(map(int,input("enter elements:\n\t").split()))
start_time=float(time.time())
def bubble_sort(user_list):
    for i in range(len(user_list) - 1):
        for j in range(len(user_list) - i - 1):
            if user_list[j] > user_list[j + 1]:
                user_list[j], user_list[j + 1] = user_list[j + 1], user_list[j]
    return user_list

print(bubble_sort(user_list*100))

end_time=float(time.time())
print(end_time-start_time)
