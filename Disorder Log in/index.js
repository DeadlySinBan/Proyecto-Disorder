function validar()
        {
            var nombre,apellido,telefono,correo;

            nombre=document.getElementById("nombre").value;
            apellido=document.getElementById("apellido").value;
            telefono=document.getElementById("telefono").value;
            usuario=document.getElementById("usuario").value;
            correo=document.getElementById("correo").value;

            if (nombre==="") {
                alert("Llene el campo de nombre");
                return false;

            }
            else if(apellido===""){
                alert("Llene el campo de apellido");
                return false;
            }
                else if (nombre.length<5 || apellido.length<10) {
                alert("El nombre debe tener más de 5 carácteres");
                return false;

            }
            else if (nombre.length>50 || apellido.length>50) {
                alert("El nombre es muy largo");
                return false;
            }
            else if (isNaN(telefono)){
                alert("El telefono ingresado no es un número");
                return false;
            }
            else if (usuario.length>30 || usuario.length<3){
                alert("El nombre de usuario no cumple con la cantidad de parámetros establecidos")
            }
            else if (correo.length>30 || correo.length<5){
                alert("El correo debe contener al menos un @ o cumplir los límites de caracteres establecidos");
            }
        }