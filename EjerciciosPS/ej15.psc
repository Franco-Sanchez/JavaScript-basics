Algoritmo ej15
	
	Definir temporada_elecciones, fecha_nacimiento, edad Como Entero
	
	Escribir "¿En qué año son las próximas elecciones?"
	Leer temporada_elecciones
	
	Escribir "Indique el año en que nació"
	leer fecha_nacimiento
	
	edad = temporada_elecciones - fecha_nacimiento
	
	Si (edad >= 18) Entonces
		
		Escribir "Usted puede votar"
		
	Sino Si (edad >= 0 y edad <= 17) Entonces
			
		Escribir "Usted no puede votar" 
	Sino 
			
		Escribir "Ingrese datos válidos"
	
	FinSi
	FinSi
	
FinAlgoritmo
