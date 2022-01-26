const start = document.getElementById('start');

start.addEventListener('click',

    function(){

        const numberUsr = Math.floor(Math.random() * 6 ) + 1;
        console.log(numberUsr);
        
        const numberPc = Math.floor(Math.random() * 6 ) + 1;
        console.log(numberPc);
        
        const resultUsr = document.getElementById('resultUsr');
        const resultPc = document.getElementById('resultPc');

        resultUsr.innerHTML= numberUsr;
        resultPc.innerHTML= numberPc;

        if(numberUsr < numberPc){
            alert('Il computer ha vinto!');
        } else if (numberUsr == numberPc){
            alert('Un pareggio, peccato prova di nuovo!')
        } else {
            alert('Complimenti hai vinto!');
        }

    }

);