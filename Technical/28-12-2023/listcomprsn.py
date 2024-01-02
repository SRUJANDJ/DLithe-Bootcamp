#prime numbers
""" prime_list=[i for i in range(2,100) if all(i%j !=0 for j in range(2, int(i**0.5) + 1)) ]
print(prime_list) """

#combination
""" list_one=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
list_three=[ i+j for i in list_one for j in list_one]
print(list_three) """

#first and last letter
""" list_one=['bibin','nikil','shri','varsha','ziya']
new_list=[i[0]+i[len(i)-1] for i in list_one]
print(new_list) """

#starting with s
""" string="sound there is no what seen is second this a not a sentence"
new_list=[i for i in string.split() if i[0]=="s"]
print(" ".join(new_list)) """

