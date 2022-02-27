import re
with open('/home/pi/regex/opera.s') as f:
    for linea in f:
        # Tu código aquí
        x = re.search("^\\s*add", linea)
        if x: print("00")
        x = re.search("^\\s*sub", linea)
        if x: print("01")
        x = re.search("^\\s*mul", linea)
        if x: print("10")
        x = re.search("^\\s*div", linea)
        if x: print("11")