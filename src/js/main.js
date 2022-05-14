let sesionKey = 333


/* Definiciones */
let prodTempId = 777
let prodTempArr = []







/* Inicializa el Array de productos de caja */
if (localStorage.getItem(prodTempId) == null) {
    console.log("base de datos productos vacia")
    checkStatus();
} else {
    
    prodTempArr = JSON.parse(localStorage.getItem(prodTempId))
    console.log(prodTempArr)
}




/* Mobile */
/* Cargar Productos en caja Mobile */
function loadProdMobile() {
    let codigo = document.getElementById("prodcodeMobile").value;
    prodTempArr.push(codigo)
    document.getElementById('prodcodeMobile').value = ''
    localStorage.setItem(prodTempId, JSON.stringify(prodTempArr));
    console.log(prodTempArr)
}

/* Desktop */
/* Cargar Productos en caja Desktop */
function loadProdDesktop() {
    let codigo = document.getElementById("prodcode").value;
    console.log(prodTempArr)


    const producto = {
        codigo,
        
        
    }

    prodTempArr.push(producto)
    console.log(prodTempArr)

    localStorage.setItem(prodTempId, JSON.stringify(prodTempArr));

    document.getElementById('prodcode').value = ''




}


for (var i = 0; i < prodTempArr.length; i++){ 
    let contenedor = document.getElementById(`grilla`)
    contenedor.innerHTML += `
    <tr id="i">
        <td>${prodTempArr[i].codigo}</td>
        <td>${prodTempArr[i].descripcion}</td>
        <td>${prodTempArr[i].iva}</td>
        <td>${prodTempArr[i].precio}</td>
        <td>${prodTempArr[i].cantidad}</td>
        <td>${prodTempArr[i].total}</td>
        <td onclick="eliminar(${i})">🖉</td>
    </tr>
    `
}


function eliminar (i) {
    let contenedor = document.getElementById(`i`)
    prodTempArr.splice(i,1)
    localStorage.setItem(prodTempId, JSON.stringify(prodTempArr));


    contenedor.innerHTML = "";

    location.reload();
}



/* Carga manual*/
function alertPromt() {
    
    Swal.fire({
        title: '<strong>Carga Manual</strong>',
        icon: 'info',
        html:
          '<input type="text" id="promptCode" placeholder="Codigo">' +
          '<input type="text" id="promptDescription" placeholder="Descripcion">'+
          '<input type="text" id="promptPrice" placeholder="precio">'+
          '<input type="text" id="PromptIva" placeholder="iva">'+
          '<input type="text" id="PromptCantidad" placeholder="Cantidad">',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Cargar',
        confirmButtonColor: 'green',
        cancelButtonText: "Cancelar",
        cancelButtonColor: 'red',
        
    }).then((result) => {
        if (result['isConfirmed']){
            manualLoadProd();
        }
      })

}
function manualLoadProd () {
    
    let codigo = document.getElementById('promptCode').value
    let descripcion = document.getElementById('promptDescription').value
    let iva = document.getElementById('PromptIva').value
    let precio = document.getElementById('promptPrice').value
    let cantidad = document.getElementById('PromptCantidad').value
    let total = ((precio*(1+(iva/100))*cantidad))



    

    const producto = {
        codigo,
        descripcion,
        iva,
        precio,
        cantidad,
        total
    }

    prodTempArr.push(producto)
    console.log(prodTempArr)

    localStorage.setItem(prodTempId, JSON.stringify(prodTempArr));
    location.reload();

}



/* Eventos */
/* para version desktop */
const reload = document.getElementById('cargaCodDesktop');

reload.addEventListener('click', _ => {
    loadProdDesktop();
});


document.getElementById('carrito').addEventListener('click', _ => {
    checkStatus();
});


/* Monitor Enter */
window.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        loadProdDesktop();
        this.location.reload()
        console.log(event.key)

    }
},false);


/* Carga manual */
document.getElementById('manualLoadDesktop').addEventListener('click', _ => { 
    alertPromt();
});


function mensaje () {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Inicio exitoso',
        showConfirmButton: false,
        timer: 1500
      })
}

function checkStatus() {
    localStorage.setItem(sesionKey, 1)
    mensaje();

}

//argumento == algo ? true : false;