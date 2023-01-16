let fichas=[
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8
]//creamos un array que almacena las posiciones de las fichas
let num_click=0 //creamos un contador para controlar el numero de clicks y desplazar las fichas al siguiente click
let primerclic=0 //creamos un contador para controlar un click como la posicion de la casilla seleccionada



function seleccionar(casilla){
	
	
	num_click++
     if(num_click==1){
		//creamos una condicion para iniciar el conteo y registro de los clicks que activara el movimiento de la ficha 
        primerclic=casilla //la casilla (imagen) en la  que haga click sera la posicion inicial almacena
	}if(num_click==2){
		//creamos otra condicion para evaluar el segundo click y realizar el intercambio de casillas
        let segundoclic=  casilla //a partir de la siguiente posicion hace un intercambio en el array fichas entre el primer click y el segundo
        let intercambio =fichas[
			primerclic
		]//creamos una variable de intercambio en la que almacenamos primero la posicion de la imagen en la que hicimos click inicialmente
        fichas[
			primerclic
		]=fichas[
			segundoclic
		]// hace el reemplazo entre la primera con la segunda
        fichas[
			segundoclic
		]=intercambio //la segunda seleccion cambiara con la primera almacenada inicialmente en variable intercambio
        num_click=0 //cuando llegue al segundo click reiniciara el contador para realizar otro registro desde una nueva posicion 
        moverfichas() //despues del registro de clicks llamamos la funcion mover fichas para poder realizar los desplazamientos y cambiar las posiciones en el puzzle segun los clicks almacenados
	}quitarborde() //llamamos a la funcion quitar borde para desmarcar
     document.getElementById('img_'+casilla).style.border = '4px solid blue' //ponemos borde a cada imagen a la que le hagamos click
}function quitarborde(){
	for (let c=0; c<9; c++){
		//el iterador buscara en todas las posicion 
        document.getElementById('img_'+c).style.border= null //quita el borde a la imagen
	}
}function desordenar(){
	fichas.sort(function(){
		//toma el array fichas con las posiciones iniciales y vuelve a reordenar las posiciones del arreglo
        return Math.random()-0.5 //con un Math.random ponemos orden aleatorio
	})
}function moverfichas(){
	for(let c=0;c<9;c++){
		// el iterador buscara en todas las posiciones donde hizo click
        let imagenficha=fichas[
			c
		]//en la variable imagenficha almacena el array con la posicion en la que hizo click
        document.getElementById("img_"+c).src= "resources/"+(imagenficha+1)+".jpg" //busca el id img y cambia su valor de ruta de la imagen mediante la variable imagenficha que tiene almacenada la posicion donde hizo click
	}
}let comprobacion=document.getElementById('btncomprobar')
comprobacion.addEventListener('click',
comprobarpuz) //evento de escucha cuando haga click en el boton invocara la funcion comprobarpuz

function comprobarpuz(){
	let fin=''
    for(let i=0;i<9;i++){
		//recorremos el iterador 
	 if( fichas[i] == i){
			fin='puzzle incompleto :c'
		 
	 }else if( fichas.includes(0,1,2,3,4,5,6,7,8) != i){
			fin='puzzle completo c:'
		}
	}alert(fin)
		
		
}
