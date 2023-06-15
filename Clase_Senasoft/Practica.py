#Notas:
#El pd.series me sirve para crear listas ordenadas en python
#El pd.Size me sirve para contar los objetos de una lista
#El pd.dtype me sirve para conocer el tipo de dato de la lista
#Parentesis son conjuntos

#Mi primera lista en python
# import  pandas as pd
# datos = pd.Series(['Desarrollo', 'Historia', 'Progrmacion', 'Agropecuario', 'Ingles'], dtype='string')
# print (datos)

#Mi segunda lista con materias y notas
# import pandas as pd
# datos = pd.Series({'Programacion': 5.0, 'Economia': 4.5, 'Agropecuario': 5.0})
# print(datos)

#Mi tercer lista con Nombres y numeros
# import pandas as pd
# s = pd.Series([1,2,2,3,3,3,4,4,4,4,5])
# s = pd.Series(['Luis', 'Mateo', 'Daniel', 'Marta', 'Maria', 'Carlos'])
# print(s.index)
# print(s.size)
# print(s.dtype)

#Ejercicio para imprimir dentro del rango de una lista, ademas sirve para imprimir datos especificos de esa lista
# import pandas as pd
# s = pd.Series({'Matemáticas': 6.0,  'Economia': 4.5, 'Programación': 8.5})
# # print(s[0:3])
# # print(s[2:3])
# print(s[['Economia']]) 

import pandas as pd
s = pd.Series([1,1,1,1,3,4,5,6,7,8,9,10])
print(s.count())
print(s.sum())