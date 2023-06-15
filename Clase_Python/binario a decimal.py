
numero_binario = input("Ingrese un número binario: ")

numero_decimal = 0
for posicion, digito in enumerate(numero_binario[::-1]):
    if digito == "1":
        numero_decimal += 2 ** posicion

# Mostrar el resultado
print("El número binario {numero_binario} es equivalente a {numero_decimal} en decimal.")
