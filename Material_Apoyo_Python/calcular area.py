#Realiza un programa que  me calcule el  área  del  circulo, la  cual el usuario ingresa
#el  valor del  radio

import math
def calcular_area(radio):
    area = math.pi * radio ** 2
    return area
radio = float(input("ingresar radio del circulo:"))
area_de_circulo = calcular_area(radio)
print("el area_de_circulo_ es:", area_de_circulo)
