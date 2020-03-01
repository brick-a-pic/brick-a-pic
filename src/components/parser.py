import os

filename = "colors.csv"
f = open(filename, 'r')

for line in f.readlines():
    line = line.strip().split()
    print('[{}, {}, {}],'.format(line[-3][:-1], line[-2][:-1], line[-1]))