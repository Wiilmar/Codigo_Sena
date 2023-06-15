# clase


# # variable
# nombre = "juana"
# edad = 23
# # 2num = 123 # manera incorrecta




# # constante
# p = 3.14
# hora = 60 # 60 minutos

# # operadores aritmeticos
# a = 5.5
# b = 10
# x = a + b # suma
# x = a - b # resta
# x = a * b # multiplicacion
# x = a / b # division
# x = a ** b # potenciacion
# #nn

# x= a/ b 
#     50/10
#     5
# #modulo (residuo) de la division
# x = a % b
#     #50/10
#     #0

# # booleano
# estado = True
#     #(-estado)
#     suma 
# resta 
# multiplicacion 
# division
# potencia

# a>b
# a<b 
# a>=b
# a<=b
# a!=b
# # tablas de verdad
# #v and v = v 
# #v and f = f 
# #f and v = f 
# #f and f = f 


# #v or v = v 
# #v or f = f 
# #f or v = f 
# #f or f = f 


# a < b < c # true
# a < b and b < c  # true 

# a > b > c # true
# a > b and b > c  # true 
# #
# a > b < c # true
# a > b and b < c  # true 
# a > b and (b < c and a > c) # true 
# a > b or (b < c and a > c) # true 

# #concatenar cadenas de texto str

# nombre = "charles"
# apellido = "prada"

# nombre completo = nombre + " " + apellido # charles prada

# # print = mostrar en pantalla
# # print()
# # print("") print()solo texto 

# print(nombre completo)
# print(type(nombre))

# numero = 3.14
# int(numero)
# print(int(numero))
# numero = "3.114"
# print(float(numero))
# print(nombre, edad)
# print(nombre + "" + edad)
# print(nombre + " " + str(edad) + " " + str(p))

# #condicionantes estructuras de control

# if a == nombre:
#    print("son iguales")
# else:
#    print("no son iguales")
# #-----
# print(len(nombre))
# if len(nombre) == len(nombre):
#    print("son iguales")
# else:
#    print("no son iguales")

# #-----
# if len(nombre) == len(nombre):
# elif apellido == apellido:
#    print("apellidos son iguales")
# else:
#    print("no son iguales")

# #-----
# if len(nombre) == len(nombre):
# else:
#    if apellido == apellido:
#    print("apellidos son iguales")
# else:
#    print("no son iguales")

# #-----
# ambiente = 0
# if ambiente:

#    print("ambiente tiene algo")
# else:
#    print("ambiente no tiene nada")

# #-----
# ambiente = None
# if ambiente:

#    print("ambiente tiene algo")
# else:
#    print("ambiente no tiene nada")

# #estructuras ciclicas
#            # inicio,condicion,incremento
# for i in range(0,100,1):
#     print(type(i))
#     print("charles", + str(i))
# print (i)
# #---
# inicio = 0
# limite = 100
# for i in range(inicio,limite,1):
#     print(type(i))
#     print("charles", + str(i))
# print (i)
# #---

# for c in nombre completo:
#     print(c)
# #----
# for c in nombre completo:
#     print(c, end=" ")
# #----
# for c in nombre completo:
#     print(c, end="\t")
# #----

# # bucle wile
# k = 0
# while k < 5:
#     print(k)
#     #k = k + 1
#     k += 1
# #---
# k = 20
# while k < -1:
#     print(k)
#     #k = k + 1
#     k -= 1
# #---

print("listas manualmente")
lista= []  #lista vacia 
lista.append(1)
lista.append(3.14)
lista.append("hola")
print(len(lista))

#ingresar datos a una lista
print("ingresar datos a una lista")
for i in range(5):
   entrada = input("ingrese un valor: ")
   lista.append(entrada)

print(lista)


#mostrar los datos de una lista desde su indice
print("mostrar lista desde su indice")
for j in range(len(lista)):
   print(lista[j])

#mostrar los datos partiendo desde el elemento
print("mostrar los datos desde el elemento")
for e in lista:
   print(e)

