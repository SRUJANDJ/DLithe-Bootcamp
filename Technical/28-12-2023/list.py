string="hi Guys HOW arE YoU"
upper_list=[ x.upper() for x in string.split(" ")]
print(" ".join(upper_list))
lower_list=[ x.lower() for x in string.split(" ")]
print(" ".join(lower_list))


name=['bibin',"nikil"]
age=[23,22]
new_tuple=[(name[i],age[i]) for i in range(len(name))]
print(new_tuple)

li=[[1,2,3],[4,5],[6,7,8]]
new_list=[ j for i in li for j in i]
print(new_list)


tlist=[[1,2,4],[2,5,8],[9,4,0]]
transpose=[ for i in range(len(tlist)) for j in range(i)]