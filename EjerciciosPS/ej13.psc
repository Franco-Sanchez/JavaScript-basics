Algoritmo ej13
	
	Definir total_alumnos, nota, aprobados, desaprobados Como Entero
	
	aprobados = 0
	
	desaprobados = 0
	
	Escribir "Ingrese la cantidad total de alumnos"
	Leer total_alumnos
	
	Escribir "Ingrese la nota de cada alumno"
	
	Para examen = 1 Hasta total_alumnos Hacer
		
		Leer nota
		
		Si (nota >= 13 y nota <= 20) Entonces
			
			aprobados = aprobados + 1
			
		SiNo Si (nota >= 0 y nota <= 12) Entonces
				
			desaprobados = desaprobados + 1
			
		FinSi
		FinSi
	Fin Para
	
	Escribir "Hay " aprobados " alumnos aprobados y " desaprobados " desaprobados."
	
FinAlgoritmo
