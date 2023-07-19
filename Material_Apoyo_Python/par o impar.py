#Crea un programa  que diga si un numero ingresado por teclado es par o impar

x = int(input("ingresar numero"))

if x % 2 == 0 :
    print(f"{x} es par")
else:
    print(f"{x} es inpar")