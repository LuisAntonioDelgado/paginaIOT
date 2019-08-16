(() => {
    
    const checkbox = document.getElementById('switch');
    const img =document.getElementById("shops");

    
    //checkbox lights
    checkbox.onchange = (event)=>{
        if(event.target.checked){
            img.src="./Imagenes/Night_5.png";
            
        }else{
            img.src="./Imagenes/Night_4.png";
            
        }
    }

})();



