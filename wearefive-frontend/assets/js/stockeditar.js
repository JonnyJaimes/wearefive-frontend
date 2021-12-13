



async  function editar(){
   const url= new URL(window.location.href);
   const id=url.searchParams.get("idModelo");
   const nombre= document.getElementById("nombreModelo");

 const token= window.sessionStorage.getItem('access_token');

 
 
 try{
     const rawResponse = await fetch("http://" + host() + "/api/products/model/" + id + "/stock",  {
       method: 'POST',
       headers: {
         'Authorization':'Bearer '+token,
         'Accept': 'application/json',
         'Content-Type': 'application/json'
         
       },
       body: JSON.stringify({

         idmodelo:id,
         nombreModelo=nombre,
         ejemplares:{
            cantidad: 1,
            talla:"43",
            cantidad: 12,
            talla:"32"
   
   
         }
      })
     });
     const data = await response.json();
     let ver = data.ejemplares[1];
     // enter you logic when the fetch is successful
     console.log(data.ejemplares[1]);
     window.location.href = 'Stock.html';
     
   } catch(error) {
       alert(error)
       window.location.href = 'editarMaterial.html';
       console.log(error)
   }
   };
   
   
