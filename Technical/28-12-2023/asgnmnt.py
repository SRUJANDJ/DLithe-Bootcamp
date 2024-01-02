import re
txt = "99My name 9is srujan99"
#search
x = re.search("srujan", txt)
y=re.search("n..e",txt)
print(x)
print(y)


#split
x = re.split("\s", txt)
y = re.split("\d", txt)
print(x)
print(y)

#sub
x = re.sub("\s", ",", txt)
y = re.sub(".y", "MY", txt)

print(x)
print(y)


#findall
x = re.findall("sr.*", txt)
y = re.findall(".9", txt)
print(x)
print(y)

#match
pattern=re.compile(r'\d+')
x=re.match(pattern,txt)
print(x.group())

x=re.search('\d+$',txt)
print(x.group())

x=re.search('^...y',txt)
print(x.group())

x=re.search('(?=.*[a-z])',txt)
print(x)

