words = []
for x in range(2315):
    words.append(input())
words.sort()
for word in words:
    print('"'+word+'",')