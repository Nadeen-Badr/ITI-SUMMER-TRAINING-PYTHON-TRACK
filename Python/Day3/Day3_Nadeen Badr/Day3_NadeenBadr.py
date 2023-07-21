
#maxstring
def solution(inputArray):
    max_length = max(len(s) for s in inputArray)  # find the length of the longest string
    return [s for s in inputArray if len(s) == max_length]  # return all strings with that length
inputArray = ["aba", "aa", "ad", "vcd", "aba"]
print(solution(inputArray))
#apples
def solution2(k):
    yellow_apples = sum(i*i for i in range(1, k+1, 2))  # sum of squares of odd numbers
    red_apples = sum(i*i for i in range(2, k+1, 2))  # sum of squares of even numbers
    return red_apples - yellow_apples  # return the difference
print(solution2(5))
#html
def solution3(startTag):
    tag_name = startTag.split()[0][1:]  # extract the tag name from the start tag
    #["<button", "type='button'", "disabled>"].
    #[0]first el thn skip the <
    #handle if its only 1 string 
    if tag_name[-1]=='>':
        tag_name=tag_name[:-1]
    return "</" + tag_name + ">"  # return the end tag with the same tag name
print(solution3("<button type='button' disabled>"))
print(solution3("<i>"))
