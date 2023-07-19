# clase


# # variable
# nombre = "juana"
#  edad = 23
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


p = input("ingresar placa")

if len(p) == 6:
   

   try:
      x = int(p[5])
   except:
      x = int(p[4])
      
   if x == 1 or x == 2:
      print("viernes")
   elif x == 3 or x == 4:
      print("lunes")
   elif x == 5 or x == 6:
      print("martes")
   elif x == 7 or x == 8:
      print("miercoles")
   elif x == 0 or x == 9:
      print("jueves")
      
   else:
      print("no tiene dia asignado")
else:
   print("placa imvalida")


#---if anidado

p = input("ingresar placa")

if len(p) == 6:
   

   try:
      x = int(p[5])
      vehiculo= "carro"
   except:
      x = int(p[4])
      vehiculo = "moto"
   if x == 1 or x == 2:
      print("su " + vehiculo + " pico y placa el viernes")
   else:
      if x == 3 or x == 4:
         print("su " + vehiculo + " pico y placa el lunes")
      else:
         if x == 5 or x == 6:
            print("su " + vehiculo + " pico y placa el martes")
         else:
            if x == 7 or x == 8:
               print("su " + vehiculo + " pico y placa el miercoles")
            else:
               if x == 0 or x == 9:
                  print("su " + vehiculo + " pico y placa el jueves")
      
               else:
                 print("no tiene dia asignado")
else:
   print("placa imvalida")
   

#--- nomina  


num_h = int(input("agregar numero de horas"))
nom_trab = input("agregar nombre")
tarifa_h = int(input("ingresar tarifa por hora"))
salario_neto =""
cant_h_extr = num_h - 35
tar_h_extr = cant_h_extr * 1.5
salario = 35 * tarifa_h + tar_h_extr
if salario > 2000 and salario < 2220:
   salario_neto = salario - 20/100
elif salario > 2220:
   salario_neto = salario - 30/100
else:
   salario_neto = salario
print(salario_neto)
