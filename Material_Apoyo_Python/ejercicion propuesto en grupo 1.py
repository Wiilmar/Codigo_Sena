"""logistica 
ventas 
administracion
condiciones para determinar las vacaciones
nombre 
codigo departamento 
tiempo trabajado
vacaciones para administracion  
1 a 2  = 7 dias
2 a 5  = 20 dias 
+ 5  =30 dias
vacaciones para ventas
1 a 2  = 5 dias
2 a 5  = 14 dias 
+ 5  =20 dias
vacaciones para logistica
1 a 2  = 5 dias
2 a 5  = 14 dias 
+ 5  =20 dias"""

#nnn



nombre = input("ingresar nombre")
departamento = input("ingresar departamento")
t_lavor = int(input("ingresar tiempo lavorado"))
v_admin = ""
if departamento == "admin":
    if t_lavor >= 1 and t_lavor <=2:
        print("7 dias de vacaciones")
    if t_lavor > 2 and t_lavor <=5:
        print("20 dias de vacaciones")
    else:
        print("30 dias de vacaciones")
if departamento == "ventas":
    if t_lavor >= 1 and t_lavor <=2:
        print("5 dias de vacaciones")
    if t_lavor > 2 and t_lavor <=5:
        print("14 dias de vacaciones")
    else:
        print("20 dias de vacaciones")
if departamento == "logistica":
    if t_lavor >= 1 and t_lavor <=2:
        print("6 dias de vacaciones")
    if t_lavor > 2 and t_lavor <=5:
        print("15 dias de vacaciones")
    else:
        print("23 dias de vacaciones")
