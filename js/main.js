let btnMostrar= document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");
let otroElemento = document.querySelector("ul>li");
let otrosElementos = document.querySelectorAll("ul>li");

let contador = 0;

console.log(listas.length);
console.log(listas[0]);
console.log(listas.item(1))
console.log(elementos.length);
console.log(elementos.item(2));
console.log("otroElemento:", otroElemento);
console.log("otrosElementos:", otrosElementos.length);

function modifica(){
    encabezado1.innerText = "Ejercicio DOM";
    encabezado2.innerHTML = "<em> DOM Exercise <em>";
}

console.log(encabezado1.innerText);
console.log(encabezado2.innerText);

btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); //no hagas loq ue haces por defecto

    let element = document.createElement("li");
    element.innerText="Another item"; // <li> Another item</li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode (true);

    // listas.item (0).before(element);
    //listas.item(0).prepend(element2);

    //listas.item(0).append(element) //Inserta el elemento al final de la lsita
    //listas.item(0).after(element) // Inserta el elemento después de la lista

     //listas.item(1).insertAdjacentElement("afterbegin", element); //Inserta el elemento al principio de la lista
     //listas.item(1).insertAdjacentElement("beforeend", element2); //Inserta el elemento al final de las listas de la lista

     listas.item(1).insertAdjacentHTML("beforebegin",
        `<li class="list-group-item">Before Begin item</li>`);
    
     listas.item(1).insertAdjacentHTML("afterend",
        `<li class="list-group-item">
                After End item
        </li>`);
    

        listas.item(1).insertAdjacentHTML("afterbegin",
            `<li class="list-group-item">After Begin item</li>`);
         

     listas.item(1).insertAdjacentHTML("beforeend",
        `<li class="list-group-item">Before End item</li>`);
     

});