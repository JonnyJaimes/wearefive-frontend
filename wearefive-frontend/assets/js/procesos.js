fetch("http://"+host()+"/api/carrito/list")
.then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
.then(response => response.json())
.then(data => {

    const table= document.getElementById('bodyjs')
    
    for (const product of data.modeloZapatos ){

        const body= document.createElement('tbody')
        body.className="post";
         //tdcosto_total
    const tdcosto_total=document.createElement('td')
    tdcosto_total.className= "a"
    const costo_total=document.createElement('h2')
    costo_total.innerHTML=product.costo_total
    tdcosto_total.appendChild(costo_total)
    body.appendChild(tdcosto_total)
        //tdNombre
    const tdNombre=document.createElement('td')
    tdNombre.className= "a"
    const Nombre=document.createElement('h2')
    Nombre.innerHTML=product.nombre
    tdNombre.appendChild(Nombre)
    body.appendChild(tdNombre)
        //tdCamtidad
    const tdDetalle=document.createElement('td')
    const Detalle=document.createElement('li')
    Detalle.innerHTML = product.Detalle
    tdDetalle.appendChild(Detalle)
    body.appendChild(tdDetalle)
//tdModelo_Zapato_Id
    const tdModelo_Zapato_Id=document.createElement('td')
    const Modelo_Zapato_Id=document.createElement('li')
    Modelo_Zapato_Id.innerHTML = product.Modelo_Zapato_IdVenta
    tdModelo_Zapato_Id.appendChild(Modelo_Zapato_Id)
    body.appendChild(tdModelo_Zapato_Id)
//tdButtonQuitar
const formularioQuitar = document.createElement('form')
formularioQuitar.action = 'eliminarProceso.html'
const tdButtonQuitar=document.createElement('td')
const inputQuitar=document.createElement('input')
inputQuitar.type="hidden"
inputQuitar.name="idProceso"
const ButtonQuitar=document.createElement('li')

tdButtonQuitar.appendChild(ButtonQuitar)
tdButtonQuitar.appendChild(inputQuitar)
tdButtonQuitar.appendChild(ButtonQuitar)
body.appendChild(tdButtonQuitar)

//tdButtonEditar
const formularioEditar = document.createElement('form')
formularioEditar.action = 'editar Proceso.html'
const tdButtonEditar=document.createElement('td')
const inputEditar=document.createElement('input')
inputEditar.type="hidden"
inputEditar.name="idProceso"
const ButtonEditar=document.createElement('li')

tdButtonEditar.appendChild(ButtonEditar)
tdButtonEditar.appendChild(inputEditar)
tdButtonEditar.appendChild(ButtonEditar)
body.appendChild(tdButtonEditar)






   

    
    

    const be = document.createElement('input')
    be.innerHTML="Eliminar"
    be.type = "submit"

    input.value=product.id
    formulario.appendChild(input)
    formulario.appendChild(be)

    const formulario2 = document.createElement('form')
    formulario2.action = 'editarZapato.html'

    const be2 = document.createElement('input')
    be2.innerHTML="Editar"
    be2.type = "submit"

    const input2=document.createElement('input')
    input2.type="hidden"
    input2.name="idCarrito"
    input2.value=product.id
    console.log(input2.id)

    formulario2.appendChild(input2)
    formulario2.appendChild(be2)
        




    tdButton.appendChild(formulario)
    tdButton.appendChild(formulario2)


    table.appendChild(body)

    
    
    }
    })