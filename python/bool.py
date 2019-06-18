list = [True, "True", False, "False", 0, 1, 2, -1]

def printListTrueOrFalse(list):
    for item in list:
        printTrueOrFalse(item)

def printTrueOrFalse(var):
    if(var):
        print("%s is true" %var)
    else:
        print("%s is false" %var )

print(list)
printListTrueOrFalse(list)
