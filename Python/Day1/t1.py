
arr = []
for i in range(5):
    elem = input("Enter element {}: ".format(i+1))
    if elem.isdigit():
        elem = int(elem)
    arr.append(elem)


arr_desc = sorted(arr, reverse=True)

arr_asc = sorted(arr)

print("Array in descending order:", arr_desc)
print("Array in ascending order:", arr_asc)


##task2
string = input("Enter a string: ")

def count_vowels(s):
    vowels = ['a', 'e', 'i', 'o', 'u']
    count = 0
    for char in s:
        if char.lower() in vowels:
            count += 1
    return count

num_vowels = count_vowels(string)

print("The number of vowels in the string is:", num_vowels)

##task3

string = input("Enter a string: ")
def print_i_locations(s):
    locations = []
    for i in range(len(s)):
        if s[i] == 'i':
            locations.append(i)
    if locations:
        print("The character 'i' is located at indices:", locations)
    else:
        print("The character 'i' is not present in the string.")
print_i_locations(string)