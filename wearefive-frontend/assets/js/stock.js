

const token = window.sessionStorage.getItem('access_token')
const url = new URL(window.location.href);
const id = url.searchParams.get("idModelo");

fetch("http://" + host() + "/api/products/model/" + id + "/stock", {

   // Adding method type
   method: "GET",

   // Adding headers to the request
   headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'

   }
})

   .then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
   .then(response => response.json())
   .then(data => {
      console.log(data)
      let varia = "";
      let vari = 0;



      const idModelo = document.getElementById('idModelo')
      const nombreModelo = document.getElementById('nombreModelo')


      const cantidad = document.getElementById('cantidad')
      idModelo.innerHTML = data.idModelo
      nombreModelo.innerHTML = data.nombreModelo
      const lista = [data.ejemplares];
      console.log(lista)
      console.log(varia)
      let bod = "";

      for (const list of data.ejemplares) {
         const table = document.getElementById('bodyjs')
         const body = document.createElement('tbody')
         body.className = "post";

         const tdNombre = document.createElement('td')
         tdNombre.className = "a"
         const Nombre = document.createElement('h2')
         Nombre.innerHTML = list.talla
         tdNombre.appendChild(Nombre)
         body.appendChild(tdNombre)


         const tdProcesos = document.createElement('td')
         const proceso = document.createElement('li')
         proceso.innerHTML = list.cantidad
         tdProcesos.appendChild(proceso)
         body.appendChild(tdProcesos)
         table.appendChild(body)



      }
   })
      

      var foo = data.ejemplares.map(function (bar) {

         return `<tr><td> cantidad  ${bar.cantidad}  </td><td>  talla+${bar.talla} </td></tr> `
      })
      document.getElementById("foo").innerHTML = foo;

      for (let value of data.ejemplares) {
         console.log(value);
         body.innerHTML += `
         <td>
            <th scope="row">${vari + 1}</th>
            <td>${value.talla}</td>
            <td>${value.cantidad}</td>


            </th>


         </td>
         `
      }
      document.getElementById("data").innerHTML = body;


      console.log(cantidad)
      
  



/*
   fetch("http://" + host() + "/api/products/model/" + id + "/stock", {
   method: 'POST',
   headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'

   },
   body: JSON.stringify({
      ejemplares:{
         cantidad: 1,
         talla:"S"


      }
   })
})

   
   .then(response => response.json())
   .then(json => console.log(json)





   );


/*

   function createGist(opts) {
      ChromeSamples.log('Posting request to GitHub API...');
      fetch('http://' + host() + '/api/products/model/' + id + '/stock', {
        method: 'post',
        body: JSON.stringify(opts)
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        ChromeSamples.log('Created Gist:', data.html_url);
      });
    }
    
    function submitGist() {
      var content = document.querySelector('textarea').value;
      if (content) {
        createGist({
          description: idModelo,
          public: nombreModelo,
          ejemplares: {
            cantidad: 3
          }
        });
      } else {
        ChromeSamples.log('Please enter in content to POST to a new Gist.');
      }
    }
    
    var submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', submitGist);





const asyncPostCall = async () => {
   try {
      const response = await fetch("http://" + host() + "/api/products/model/" + id + "/stock", {
         method: 'POST',
         headers: {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'

         },
         body: JSON.stringify({

            idModelo: idModelo,
            nombreModelo: nombreModelo,
            ejemplares:

               [
                  {
                     cantidad: 39,
                     talla: "37"
                  }
               ]
         }
         )
      });
      const data = await response.json();
      // enter you logic when the fetch is successful
      console.log(data);
   } catch (error) {
      // enter your logic for when there is an error (ex. error toast)

      console.log(error)
   }
}

asyncPostCall()
*/