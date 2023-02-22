//carga de datos de la api randomuser
async function cargaDatos(){
  await fetch('https://randomuser.me/api/?gender=male&nat=es')
                            .then( Response => Response.json())
                            .then( json => mostrar(json))
}

cargaDatos();

/*
 Ejemplo de la estructura del objeto que se utiliza para los datos del perfil
  "perfil": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
       }
      },
      "email": "jennie.nichols@example.com",
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
*/

function mostrar(unObjeto){
    //carga los datos del perfil random en los tags correspondientes
    let perfil= unObjeto;
    console.log(perfil);
    document.getElementById("nombrePerfil").innerHTML= perfil.results[0].name.first + " " + perfil.results[0].name.last;
    document.getElementById("nombrePerfilCon").innerHTML= perfil.results[0].name.first + " " + perfil.results[0].name.last;
    document.getElementById("imagenDePerfil").setAttribute("src", perfil.results[0].picture.large);
    document.getElementById("emailPerfil").innerHTML= " &nbsp" + perfil.results[0].email;
    document.getElementById("telefonoPerfil").innerHTML= " &nbsp" + perfil.results[0].phone + " celular: " + perfil.results[0].cell;
    document.getElementById("sitioWebPerfil").innerHTML= " &nbspwww." + perfil.results[0].name.first + "1988.com"; 
    document.getElementById("redesPerfil").innerHTML= " &nbsp@" + perfil.results[0].name.first + "." + perfil.results[0].name.last;
    document.getElementById("direccionPerfil").innerHTML= " &nbsp" + perfil.results[0].location.street.name + " " + perfil.results[0].location.street.number
                                                                + ", " + perfil.results[0].location.city + " " + perfil.results[0].location.state;
    document.getElementById("edadPerfil").innerHTML= "Edad: " + perfil.results[0].dob.age + " años";
    document.getElementById("fechaNacPerfil").innerHTML= "Nacimiento: " + perfil.results[0].dob.date.slice(0, 10);                                                         
    document.getElementById("localidadPerfil").innerHTML= "Localidad: " + perfil.results[0].location.state;
    document.getElementById("nacionalidadPerfil").innerHTML= "Nacionalidad: " + perfil.results[0].location.country;

}

//Listener Boton recargar perfil
document.getElementById('botonRecargar').addEventListener('click', function(){
  cargaDatos();
});
//cambio de color del nombre de perfil con eventos del mouse
document.getElementById('nombrePerfil').addEventListener('mouseover', function(){
  document.getElementById('nombrePerfil').setAttribute('style', 'color: #25631F');
})
document.getElementById('nombrePerfil').addEventListener('mouseleave', function(){
  document.getElementById('nombrePerfil').setAttribute('style', 'color: black');
})

