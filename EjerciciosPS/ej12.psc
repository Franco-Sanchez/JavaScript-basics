Algoritmo ej12
	
	Definir salario_inicial, nuevo_salario Como Real
	
	salario_inicial = 1500
	
	nuevo_salario = 0
	
	Para temporada = 1 Hasta 6 Hacer
		
		Si (temporada = 1) Entonces
			
			nuevo_salario = salario_inicial + (10/100 * salario_inicial)
			
			Escribir "El salario en el año número " temporada " fue de S/" nuevo_salario
		SiNo
			
			nuevo_salario = nuevo_salario + (10/100 * nuevo_salario)
			
			Escribir "El salario en el año número " temporada " fue de S/" nuevo_salario
		FinSi
		
	Fin Para
	
	Escribir "El salario del profesor al cabo de 6 años fue de: S/" nuevo_salario
	
	
FinAlgoritmo
