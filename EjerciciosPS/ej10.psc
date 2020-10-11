Algoritmo ej10
	
	Definir edad1, edad2, edad3 como Entero
	Definir nombre1, nombre2, nombre3 Como Caracter
	
	Escribir "Ingrese el nombre de la primera persona"
	Leer nombre1
	
	Escribir "Ahora ingrese la edad de la primera persona"
	Leer edad1
	
	Escribir "Ingrese el nombre de la segunda persona"
	Leer nombre2
	
	Escribir "Ahora ingrese la edad de la segunda persona"
	Leer edad2
	
	Escribir "Ingrese el nombre de la tercera persona"
	Leer nombre3
	
	Escribir "Ahora ingrese la edad de la tercera persona"
	Leer edad3
	
	Si (edad1 < edad2 Y edad1 < edad3) Entonces
		
		Escribir "La persona de menor edad es " nombre1 " con " edad1 " años."
		
	SiNo Si (edad2 < edad1 Y edad2 < edad3) Entonces
			
		Escribir "La persona de menor edad es " nombre2 " con " edad2 " años."
			
	SiNo Si (edad3 < edad1 Y edad3 < edad2) Entonces
			
		Escribir "La persona de menor edad es " nombre3 " con " edad3 " años."
			
	SiNo
			
		Escribir "Ingrese datos válidos."
		
	FinSi
	FinSi
	FinSi
	
	
FinAlgoritmo
