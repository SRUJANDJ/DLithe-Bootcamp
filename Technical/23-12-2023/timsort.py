def insertion_sort(arr, left=0, right=None):
    """Perform insertion sort on a portion of the array."""
    if right is None:
        right = len(arr) - 1

    for i in range(left + 1, right + 1):
        key_item = arr[i]
        j = i - 1
        while j >= left and arr[j] > key_item:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key_item

def merge(arr, left, mid, right):
    """Merge two sorted subarrays."""
    len_left = mid - left + 1
    len_right = right - mid

    left_arr = arr[left:mid + 1]
    right_arr = arr[mid + 1:right + 1]

    i = j = 0
    k = left

    while i < len_left and j < len_right:
        if left_arr[i] <= right_arr[j]:
            arr[k] = left_arr[i]
            i += 1
        else:
            arr[k] = right_arr[j]
            j += 1
        k += 1

    while i < len_left:
        arr[k] = left_arr[i]
        i += 1
        k += 1

    while j < len_right:
        arr[k] = right_arr[j]
        j += 1
        k += 1

def tim_sort(arr):
    """Sort the array using Timsort."""
    min_run = 32
    n = len(arr)

    for i in range(0, n, min_run):
        insertion_sort(arr, i, min((i + min_run - 1), n - 1))

    size = min_run
    while size < n:
        for left in range(0, n, size * 2):
            mid = min((left + size - 1), (n - 1))
            right = min((left + size * 2 - 1), (n - 1))

            if mid < right:
                merge(arr, left, mid, right)

        size *= 2

# Example usage:
arr = [38, 27, 43, 3, 9, 82, 10]
print("Original array:", arr)

tim_sort(arr)
print("Sorted array:", arr)
