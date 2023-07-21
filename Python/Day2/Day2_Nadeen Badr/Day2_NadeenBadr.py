#divisor
def solution(divisor, bound):
    largest_n = 0
    for n in range(1, bound+1):
        if n % divisor == 0:
            largest_n = n
    return largest_n
result = solution(3, 10)
print(result)

#pal
def pal(inputString):
    reversedString = inputString[::-1]
    if inputString == reversedString:
        return True
    else:
        return False
inputString = "aabaa"
print(pal(inputString)) 
inputString = "abac"
print(pal(inputString)) 
inputString = "a"
print(pal(inputString))

#mergelist
def merge_lists(lst1, lst2):
    return lst1 + lst2
lst1 = [1, 2, 3]
lst2 = [4, 5, 6]
merged_list = merge_lists(lst1, lst2)
print(merged_list)

#bol->str
def bool_to_string(flag):
    return str(flag)
flag = True
flag_string = bool_to_string(flag)
print(type(flag_string))

#names dictionary
def names_to_dict(names):
    name_dict = {}
    for name in names:
        alpha = name[0]
        if alpha in name_dict:
            name_dict[alpha].append(name)
        else:
            name_dict[alpha] = [name]
    sorted_dict = dict(sorted(name_dict.items()))
    return sorted_dict
names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Anna', 'Andrew']
name_dict = names_to_dict(names)
print(name_dict)
