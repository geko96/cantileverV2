let arr
fetch('./datos.txt')
.then(res => res.json())
.then(data => {
    for (var i = 0; i < data.length; i++){ 
        let contenedor = document.getElementById(`status`)
        contenedor.innerHTML += `
        <div class="fondo"><div>${data[i].nombre}: </div><div class="verde">${data[i].Estado}</div></div>
        <p></p>
        `
    }
})

