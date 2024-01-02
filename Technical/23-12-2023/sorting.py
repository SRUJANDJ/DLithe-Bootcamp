class sorting:
    def __init__(self,list_passed):
          self.list_passed=list_passed

    def bubble_sort(self):
        li=self.list_passed
        for i in range(len(li)):
            for j in range(len(li)-i-1):
                if li[j]>li[j+1]:
                    li[j],li[j+1]=li[j+1],li[j]
        print(li)        

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

    def insertion_sort(self):
        li=self.list_passed
        print("initial",li)
        for i in range(1,len(li)):
            j=i-1
            key=li[i]
            while j>=0 and key<li[j]:
                li[j+1]=li[j]
                print("inside",li)
                j-=1
            li[j+1]=key
            print("last",li,"\n")
        print(li)

    def merge_sort(self):
        if not self.list_passed:
            print("Empty list provided.")
            return
        
        li = self.list_passed

        def merge_sort_recursive(arr):
            if len(arr) > 1:
                mid = len(arr) // 2
                L = arr[:mid]
                R = arr[mid:]

                merge_sort_recursive(L)
                merge_sort_recursive(R)

                i = j = k = 0
                while i < len(L) and j < len(R):
                    if L[i] <= R[j]:
                        arr[k] = L[i]
                        i += 1
                    else:
                        arr[k] = R[j]
                        j += 1
                    k += 1

                while i < len(L):
                    arr[k] = L[i]
                    i += 1
                    k += 1

                while j < len(R):
                    arr[k] = R[j]
                    j += 1
                    k += 1

        merge_sort_recursive(li)
        print(li)

    def quick_sort(self):

        def partition(arr, low, high):
            i = low - 1
            pivot = arr[high]

            for j in range(low, high):
                if arr[j] <= pivot:
                    i += 1
                    arr[i], arr[j] = arr[j], arr[i]

            arr[i + 1], arr[high] = arr[high], arr[i + 1]
            return i + 1

        def quick_sort_recursive(arr, low, high):
            if low < high:
                pi = partition(arr, low, high)

                quick_sort_recursive(arr, low, pi - 1)
                quick_sort_recursive(arr, pi + 1, high)

        quick_sort_recursive(li, 0, len(li) - 1)
        print(li)
    



    def insertion_sort(arr, left=0, right=None):
    if right is None:
        right = len(arr) - 1

    for i in range(left + 1, right + 1):
        key = arr[i]
        j = i - 1
        while j >= left and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

def merge_insertion_sort(arr):
    if len(arr) <= 64:  # Threshold for insertion sort
        insertion_sort(arr)
        return

    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    merge_insertion_sort(left)
    merge_insertion_sort(right)

    i = j = k = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            arr[k] = left[i]
            i += 1
        else:
            arr[k] = right[j]
            j += 1
        k += 1

    while i < len(left):
        arr[k] = left[i]
        i += 1
        k += 1

    while j < len(right):
        arr[k] = right[j]
        j += 1
        k += 1

# Example usage:
my_list = [64, 34, 25, 12, 22, 11, 90]
merge_insertion_sort(my_list)
print("Sorted list:", my_list)


item=sorting([5,4,3,2,1])

item.insertion_sort()
