document.getElementById("boton").addEventListener("click", function(){
    
    const dato = document.getElementById("taskInput").value
    if (dato == ""){
        alert("el campo no puede estar vacio")
    }
    else {
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.style.marginRight = "5%"


        const boton_eliminar= document.createElement("button")
        boton_eliminar.type = "button" 
        boton_eliminar.textContent = "eliminar"
        boton_eliminar.style.marginLeft = "10%"
        
        const lista = document.getElementById("lista")
        const tarea = document.createElement("li")
        tarea.textContent = dato
        
        lista.appendChild(tarea)
        
        tarea.insertBefore(checkbox, tarea.firstChild)
        
        tarea.appendChild(boton_eliminar)


        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                tarea.style.textDecoration = "line-through";
            } else {
                tarea.style.textDecoration = "none";
            }
        });
        

        boton_eliminar.addEventListener("click", function(){
            tarea.remove()
        })
        
    }
    document.getElementById("taskInput").value=""

    
    })
    
    document.getElementById("taskInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.getElementById("boton").click();
        }
    });
            



        
        
      



    
    
    
