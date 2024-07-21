

        function setData(){
            
            let nombreUsuario = document.getElementById("usuarioRegistro");
            let contraseñaUsuario = document.getElementById("contraseñaRegistro");

           let usuario = {nombre:nombreUsuario.value , contraseña:contraseñaUsuario.value};
           console.log(usuario);

           arregloUsuarios.push(usuario);

           let arregloJson = JSON.stringify(arregloUsuarios);

           localStorage.setItem("arregloDeUsuarios", arregloJson);
        }

        function loginUsuarios() {
            let nombreUsuario = document.getElementById("usuarioRegistro");
            let contraseñaUsuario = document.getElementById("contraseñaRegistro");

            let recuperandoDatos = localStorage.getItem("arregloDeUsuarios");
            recuperandoDatos = JSON.parse(recuperandoDatos);
            console.log(recuperandoDatos);

            for(let usuario of recuperandoDatos ){
                if(nombreUsuario.value == usuario.nombre &&  contraseñaUsuario.value == usuario.contraseña  ){
                    window.location.href = 'http://127.0.0.1:5500/pages/tasacion.html';
                    return;
                }
                else{
                    document.body.innerHTML = `<h1>Usuario no registrado </h1>
                    <a href="index.html">Volver</a>`;
                }

            }
        }   



           let arregloUsuarios = [];

           let btnRegistro = document.getElementById("btnRegistro");

           btnRegistro.addEventListener("click", setData );
           
           let btnLogin = document.getElementById("btnLogin");

           btnLogin.addEventListener("click", loginUsuarios);
           
           function tasar() {
                let anio = document.getElementById("anio").value;
                let respuesta = document.getElementById("respuesta");
                let precio;
            
                anio = parseInt(anio); 
            
                if (anio >= 2000 && anio <= 2010) {
                    precio = 1000;
                } else if (anio > 2010 && anio <= 2020) {
                    precio = 3000;
                } else {
                    precio = "No tenemos para ese auto";
                }
        

            let parrafo  = document.createElement("p");
            parrafo.innerText = "El precio de su auto es: " + precio;
            respuesta.append(parrafo);
            }