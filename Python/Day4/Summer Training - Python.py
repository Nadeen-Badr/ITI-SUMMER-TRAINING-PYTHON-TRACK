"""  Day1 """
# Variables
# morning_text = "Good Morning"
# print(morning_text)

# Data Types

"""
string = "" / '' /"" "
float 1.2
integer  3
boolean True / False
Data structure(List - Dict - Tuple)

"""

# String

# my_var = "Ahmed"
#
# print(my_var)
#
# my_var = 'Ali'
#
# print(my_var)
#
# my_var3 = """"""
# -->Docstring

# comment

""" Two Principles"""

# 1- Everything in Python is an object
# 2- Indentation


# def my_func():
#     print('hello')
#     if :
#         for:

# ---------------------------------------------

""" String """

# my_var = """Good Morining
# This is my first day in Python"""
# print(type(my_var))

# Built-in Function

# len
# print(len('hello    '))
#
# if len(my_var) == 45:
#     print('Good Word')
# else:
#     print('Try Again')

# Index
# print(my_var[-5])

# Slicing
""" var[start:end] 
var[start:end:step]
"""

# my_var2 = "Web Development"
# print(my_var2[-5:-11:-2])


# Capitalize
# my_var3 = "HELLO"
# print(my_var3.capitalize())
#
# print(my_var3.lower())
#
# my_var4 = "iti"
# print(my_var4.upper())

# split

# my_spilt = "IlovePython"
# print(my_spilt.split())

# startwith
x = 'iti'
# print(x.startswith('i'))

# endwith

# formatting

# my_name = "Ali"
# my_age = 28
# location = 'Cairo'
# print(f'Hello {my_name} my age {my_age} {location}')

# isdigit. isalpha, isalnum

# print(type(my_age))
# print(str(my_age))
# my_age_str = float(my_age)
#
# print(type(my_age_str))

"""
-> Type Conversion
str
int
float
bool
"""

# my_input = int(input('Please, Enter your Age: '))
# print(type(my_input))

# -------------------

""" Integer & Float"""

# my_int = 2
# my_float = 2.3
# my_int_to_float = float(my_int)
# print(type(my_int_to_float))

# x *= 1   #---> x = x*1

# ===================================================

"""Data Structure

List []  --> [1,2,3,4,5,'hello', true, [a,b,c]]    "Mutable" I can edit the list
Tuple ()  --> (1,2,3)    "Immutable" Can't be edit
Dictionary {} Key:value  --> {name: ahmed, age: 30, location: cairo}

"""

# LIST

# my_list = [1, 2, 3, 4, 5, 'hello', True, ['a', 'b', 'c']]
# print(type(my_list))
#
# my_list[-1] = 2
# print(my_list)
#
# print(my_list[1:3])
#
# print(len(my_list))
#
# my_list.append('Ahmed')
# print(my_list)
# my_list.append('Python')
# print(len(my_list))
#
# my_list.append(['js', 'css', 'c++'])
# print(my_list)
# print(len(my_list))
# print(my_list[-1][0])
#
# # my_list.extend(['js', 'css', 'c++'])
# # print(my_list)
# # print(len(my_list))
# #
# my_list_2 = [2, 3, 6, 5, 8, 6, 9, 10]
# # my_list_2.sort(reverse=True)
# # print(my_list_2)
#
# print(max(my_list_2))

# ---------------------------------------------------

"""Tuple    ()"""

# my_tuple = (1, 2, 3, 'a', 'c', [1, 2, 3], 'hello', ('js', 'python'))
#
# my_list = [1,2,3,4]
#
# my_list[2] = 'new item'
# # print(my_list)
#
# # my_tuple[2] = 'Good Morning'
# # print(my_tuple)
#
# my_tuple_to_list = list(my_tuple)
# small_tuple_to_list = list(my_tuple_to_list[-1])
#
# print(my_tuple_to_list)
# print(small_tuple_to_list)
#
# small_tuple_to_list[0] = 'html'
# x = tuple(small_tuple_to_list)
# my_tuple_to_list[-1] = x
#
# print(my_tuple_to_list)
#
# tuple_one = (2,)
# print(type(tuple_one))
#
# # del(tuple_one)
# # print(tuple_one)
#
# # Pack, Unpack
#
# my_fruits = ('apple', 'watermelon', 'mango')
# a, *w = my_fruits
#
# _,_, c = my_fruits
# # print(a)
# print(c)

# print(a)
# print(w)
# print(m)

# -------------------------------------------------
""" Dictionary {}   Key:Value pair // Mutable Data"""

# my_dict = {'Age': 28, 'Location': 'Cairo', 'sister': 'Mona', 'school': 'Alex'}
#
# my_dict.update({'name': 'romisaa'})
# # setdefault
# my_dict.setdefault('name', 'Test')
# print(my_dict)
# # print(my_dict.get('Location'))
# # print(my_dict['name'])
# # print(my_dict.items())
# print(len(my_dict))
#
# # my_dict.update({'name': 'Ahmed'})
# # print(my_dict)
# my_dict['Age'] = 30

"""Two Dimension Dictionary"""

Students = {
    'Student_one': {'name': 'Ahmed', 'age': 13, 'hobby': 'football'},

    'Student_two': {'name': 'Ali', 'age': 15, 'hobby': 'swimming'},

    "Student_Three": {'name': 'Mona', 'age': 11, 'hobby': 'singing'}

}

# print(Students.items())
# print(Students.keys())
#
# print(Students.values())

# print(Students.get('Student_two')['name'])

# ----------------------------------------------

"""Set   {} Immutable"""

# my_set = {1,2,3}
# print(my_set)
#
#
# list1=[]
# for i in range(0,5):
#     elements=int(input("enter elements : "))
#     list1.append(elements)
#
# list1.sort()
# print(list1)
# list1.sort(reverse=True)
# print(list1)
# ------------------------------------------
"""   Loop // Condition // Functions   """

# 1- Loop

"""While   / For  """

"""
for item in list/string/...etc:
    do something
    
"""
# morning_mesg = 'Good Morning'
# for hamada in morning_mesg:
#     print(hamada)

my_list = [10, 26, 35, 48, 56]
# print(len(my_list))

# for i in my_list:
#     i += 1
#     print(i)

# for i in range(len(my_list)):
#     i += 1
#     print(i)

# my_tuple = ('js', 'python', 'html')
# for g in my_tuple:
#     print(g)
# print(my_tuple)


# divisior = int(input('Enter divisior: '))
# bound = int(input('Enter bound: '))
#
# greatest_int = 0
# for i in range(1, bound):
#     if i % divisior == 0:
#         greatest_int = i
# print(greatest_int)

"""for dict"""

# my_dict = {'Age': 28, 'Location': 'Cairo', 'sister': 'Mona', 'school': 'Alex'}

# Key and Value

# for z in my_dict.keys():
#     print(z)

# for i in my_dict.values():
#     print(i)


# for i, z in my_dict.items():
#     print(i)
#     print(z)


# While

a = 0
# while a < 10:    # --> a < 10 --> 0 < 10
#     print(a)


# while a< 10:
#     a += 1
#     print(a)
#
# else:
#     print('Loop is Done')


# --------------------------------------

"""Condition"""

"""if + condition:
        do something
    else:
        do something
"""

# if input_user == 'a':
#     print('Hello')
#
# else:
#     print('Bye')

# if input_user % 2 == 0:
#     print('Even')
# else:
#     print('Odd')


# input_user = input('Enter a Character: ')
#
# vowls = ['a', 'i', 'u', 'y', 'o']
#
# if input_user in vowls:
#     print('Yes')
# else:
#     print('No')

# Fuzz Buzz

"""divisible by three as “Fizz,” integers divisible by five as “Buzz” and integers divisible by both three and five as “FizzBuzz.”"""

# input_user = int(input('Enter a number: '))

# if input_user % 5 == 0 and input_user % 3 ==0:
#     print('FizzBuzz')
# if input_user % 5 == 0:
#     print('Buzz')
# if input_user % 3 == 0:
#     print('Fizz')

# if input_user % 5 == 0 and input_user % 3 ==0:
#     print('FizzBuzz')
# elif input_user % 5 == 0:
#     print('Buzz')
# elif input_user % 3 == 0:
#     print('Fizz')
# else:
#     print('Not Buzz or Fuzz')

"""Logical Operators
and
or
in

is
not
"""

# input_user2 = input('Enter input: ')
#
# if input_user2 != 'hello':
#     print('Welcome')
# else:
#     print('Hi')

# x = [1, 2, 3]
# print(type(x))
# # print(bin(x))
# #
# y = [1, 2, 3]
# # print(type(y))
# # print(bin(y))
# # #
# # z = x
# #
# print(x == y)  # False
# # print(x is z)  # True
# a = 10
# b = 10
#
# print(bin(a))
# print(bin(b))


"""Ternary Conditional Operator"""

# ---------------------------------------


"""Functions"""

"""def + name of function(paramter):
    Body

calling function"""

# def print_hello():
#     print('Hello')
#
#
# print_hello()


# def is_even(number):
#     if number % 2 == 0:
#         return True
#     else:
#         return False


# print(is_even(5))

# for i in range(10):
#     if is_even(i):
#         print('Even')
#     else:
#         print('Odd')


# def print_full_name(first_name, last_name='None'):
#     return f'Hello {first_name} {last_name}'
#
#
# print(print_full_name('Romisaa'))

# def full_information(first_name, last_name, city, expected_salary, skills, days_off):
#     return f'{first_name} {last_name} {city}'
#
# print(full_information('Romisaa', 'Galal', 'Nasr City'))

# def employee_skills(*skills):   # Args "Arguments"
#     return f'{skills}'
#
# print(employee_skills('js'))   # Tuple
#
#
# def employee_hobbies(**hobby):   # Kwargs " Key Value Arguments"
#     return f'{hobby}'
#
# print(employee_hobbies(football = "20%", valleyball='100%', cokking='50%'))  # Dict
#
#
# def say_hello():
#     pass
#
#
# for i in range(3):
#     pass
#
# if i > 0:
#     pass


# my_list = [1,2,3,4]
# for num in my_list:
#     if num == 3:
#         break
#     print(num)
# -------------------------------------------------------------------

"""Virtual Environment"""

"""Modules // Regular Expression"Regex" // Scope"""

"""
Scope --> Global - Local - Nonlocal
"""

# ------------------------------------------------------------

"""OOP    --> Object Oriented Programming

--> Methods & Attributes
"""
# class "blueprint"


"""class + class name"Pascal Case" """


class User:  # Parent
    def __init__(self, first_name, last_name, age, city):  # Constructor
        self.first_name = first_name
        self.l_name = last_name
        self.ageeee = age
        self.location = city

    def print_information(self, hobby):
        return f'Hello, {self.first_name} {self.l_name} {self.ageeee} {self.location} {hobby}'


# user_one = User('Romisaa', 'Galal', 28, 'Cairo')
#
# user_two = User('Nadden', 'Badr', 20, 'Cairo')
#
# user_three = User('Ramy', 'Ibrahim', 19, 'Aswan')

# print(user_two)
# print(user_two.print_information('swimming'))

# ---------------------------------------------
"""
1- Inheritance

2- Polymorphism

3- Encapsulation

4- Abstract

"""


# Inheritance

class Developer(User):  # Child
    amount_raise = 15  # Class Variable

    def __init__(self, first_name, last_name, age, city, salary, prog_lang):
        super().__init__(first_name, last_name, age, city)
        self.salary = salary
        self.prog_lang = prog_lang

    def print_information(self):
        return f'Hello, {self.first_name} {self.l_name} {self.ageeee} {self.location} {self.salary} {self.prog_lang}'

    def salary_increase(self):
        self.salary *= Developer.amount_raise
        return self.salary


# developer_one = Developer('Mona', 'Ahmed', 30, 'Cairo', 3000, 'Js')
#
# print(developer_one.print_information())
#
# print(developer_one.salary_increase())
# "DRY  --> Don't Repeat Yourself"
#
# "Multi Inheritance"
#
#
# class Employee(Developer):
#     pass
#
#
# employee_one = Employee('Ahmed', 'Mohamed', 20, 'Cairo', 4000, 'Python')
#
# print(employee_one.print_information())

# --------------------------------

"""Polymorphism"""

"+"


# print(4 + 4)
# print('Hello' + 'Guest')


class A:
    def method_sum(self):
        return 3 + 4

    def say_hello(self):
        print('Hello')


class B(A):
    def method_sum(self):
        print('hello')

    def say_hello(self):
        print('مرحبا')


# a_one = A()
# a_one.say_hello()
#
# b_one = B()
# b_one.say_hello()

# --------------------------------------------------

"""Encapsulation"""

""" 3 types of classes
1 - Public 
2 - Protected
3- private

"""


# Public
class User:
    def __init__(self, first_name, last_name, age, city):  # Constructor
        self.first_name = first_name
        self.l_name = last_name
        self.ageeee = age
        self.location = city

    def print_information(self, hobby):
        return f'Hello, {self.first_name} {self.l_name} {self.ageeee} {self.location} {hobby}'


# user_one = User('Romisaa', 'Galal', 28, 'Cairo')
#
# user_two = User('Nadden', 'Badr', 20, 'Cairo')
#
# user_three = User('Ramy', 'Ibrahim', 19, 'Aswan')

# Protected
class Developer(User):  # Child
    amount_raise = 15  # Class Variable

    def __init__(self, first_name, last_name, age, city, salary, prog_lang):
        super().__init__(first_name, last_name, age, city)
        self._salary = salary
        self.prog_lang = prog_lang

    # def print_information(self):
    #     return f'Hello, {self.first_name} {self.l_name} {self.ageeee} {self.location} {self.salary} {self.prog_lang}'
    #
    # def salary_increase(self):
    #     self.salary *= Developer.amount_raise
    #     return self.salary


# dev_one = Developer('ahmed', 'mohamed', 30, 'cairo', 3000, 'js')
# print(dev_one._salary)
"""----------------------------------------------------------------------------"""


# Private

class Developer(User):  # Child
    amount_raise = 15  # Class Variable

    def __init__(self, first_name, last_name, age, city, salary, prog_lang):
        super().__init__(first_name, last_name, age, city)
        self._salary = salary
        self.__prog_lang = prog_lang

    def get_prog_lang(self):  # Get
        return self.__prog_lang

    def set_prog_lang(self):  # Set
        self.__prog_lang = 'Python'
        return self.__prog_lang


dev_one = Developer('ahmed', 'mohamed', 30, 'cairo', 3000, 'js')

print(dev_one.get_prog_lang())
print(dev_one.set_prog_lang())
"""
Encapsulation 

classes have 3 types

public - protected - private

--> public 

--> protected 
_attribute
instance._attribute


--> private
__attribute
method --> get
def get_private_attribute(self):
    return self.private_attribute
    
method --> set
def set(self)
    self_private_attribute = new value
    return
"""

# -------------------------------------------------
""" Abstract """

from abc import ABCMeta, abstractmethod


class A(metaclass=ABCMeta):

    @abstractmethod  # Decorator
    def apples_lovers(self):
        pass

    def say_hello(self):
        pass


class GroupOne(A):

    def apples_lovers(self):
        return 'Yes'


class GroupTwo(A):

    def apples_lovers(self):
        return 'No'


class GroupThree(A):

    def apples_lovers(self):
        return 'Maybe'


"""Property decortar// class method // static method // abstract method """
