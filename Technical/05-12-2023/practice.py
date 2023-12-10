""" year=int(input())
if year%400==0 or (year%4==0 and year%100!=0):
    print("leap")
else:
    print("no")  """


n=int(input())
frogs=list(map(int,input().split()))
leaves=[]
for i in range(1,n+1):
    leaves.append(i)
print(leaves)
for i in frogs:
    print(i)
    j=1
    while (i*j)<=n:
        print(i*j)
        if i*j in leaves:
            leaves.remove(i*j)
            print(leaves)
        j+=1
print(len(leaves))
""" leaves = 10
frogs = [3,4,6,5]

visited_leaves = set()

for strength in frogs:
    for leaf in range(strength, leaves + 1,strength):
        print(leaf)
        if leaf % strength == 0:
            visited_leaves.add(leaf)
print(visited_leaves)

unvisited = leaves - len(visited_leaves)

print(unvisited) """