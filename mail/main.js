 // array
const mailList = ['ciccio@gmail.com' , 'paperino@gmail.com' , "oreste@gmail.com"];

// click 
const button = document.getElementById('send');


button.addEventListener('click',

    function(){
                
        const mail = document.getElementById('mail').value;                
        
        let trovato = false;
        
        for (let i = 0 ; i < mailList.length; i++){

            if (mail == mailList[i]){
                trovato = true;
                // Variabile 
            }

        }
        
        if (trovato){
            alert('Bentornato Signore!');
        } else {
            alert ('Pussa via!');
        }
    }

);



