mb = float(input("ingresar cantidad en MB: "))

bits = mb * 8388608
bytes = mb * 1048576
kb = mb * 1024
gb = mb * 0.000976563

print(mb, "MB son:")
print(bits, "bits")
print(bytes, "bytes")
print(kb, "kb")
print(gb, "gb")
