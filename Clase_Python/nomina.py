

num_h = int(input("agregar numero de horas"))
nom_trab = input("agregar nombre")
tarifa_h = int(input("ingresar tarifa por hora"))
salario_neto =""
cant_h_extr = num_h - 35
tar_h_extr = tarifa_h * 1.5
tar_tot_h_etr = cant_h_extr * tar_h_extr
salario = 35 * tarifa_h + tar_tot_h_etr
if salario > 2000 and salario < 2220:
   salario_neto = salario - 20/100
elif salario > 2220:
   salario_neto = salario - 30/100
else:
   salario_neto = salario
print(f"{nom_trab} el valor de su nomina es igual a {salario_neto}")
