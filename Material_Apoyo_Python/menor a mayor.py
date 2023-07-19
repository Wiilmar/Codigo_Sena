

#Elabora un programa que me muestre en pantalla de forma ordenada de menor a
#mayor dos números ingresados por teclado, por ejemplo si ingreso 5 Y 4 deberá
#mostrar, "los números ingresados  son  5 y 4 y organizados  son  4, 5"


a = int(input("agregar valor a: "))
b = int(input("agregar valor b: "))
print("los valores son: ", a ,"y", b)
if a<b:
    print("menor a mayor:", a , "/",b )
else: 
    print("menor a mayor:", b , "/",a )
    
##dfrnt

a = int(input("agregar valor a: "))
b = int(input("agregar valor b: "))
print("los valores son: ", a ,"y", b)
if a<b:
    print(f"menor a mayor: {a} / {b}")
else:
    print(f"menor a mayor: {b} / {a}")