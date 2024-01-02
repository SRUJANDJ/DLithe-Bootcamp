lui=[6,5,4,3,2]
def selection_sort(self):
        li=self.list_passed
        print("initial",li)
        for i in range(len(li)):
            min=i
            for j in range(i+1,len(li)):
                if li[min]>li[j]:
                    min=j
            li[min],li[i]=li[i],li[min]
            print("inside",li)
        print(li)