""" def quicksort(arr):
    if len(arr)>1:
        pivot=arr[len(arr)-1]
        i,j=0,len(arr)-2
        while i<=j:
            if arr[i]>pivot and arr[j]<pivot:
                arr[i],arr[j]=arr[j],arr[i]
                i+=1
                j-=1
            if arr[i]<pivot:
                i+=1
            if arr[j]>pivot:
                j-=1
        if arr[i]!=pivot:  
            arr[i],arr[len(arr)-1]=arr[len(arr)-1],arr[i]
        print("array",arr)
        leftside=arr[:i]
        rightside=arr[i+1:]
        print(leftside)
        print(rightside)
        quicksort(leftside)
        quicksort(rightside)
    return arr
arr= [77,88,33,66,55,11,22,44]
print("final",quicksort(arr)) """



def partition(arr, low, high):
    i = low - 1
    pivot = arr[high]
    print(pivot)

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    print(arr)
    print(i)
    return i + 1

def quick_sort_recursive(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort_recursive(arr, low, pi - 1)
        quick_sort_recursive(arr, pi + 1, high)

li=[77,88,33,66,55,11,22,44]
quick_sort_recursive(li, 0, len(li) - 1)
print(li)





