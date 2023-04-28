// we have taken all the variables from index.html file
(function () {
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-clear');
    let equal=document.querySelector('.btn-equal');

    // first chk which button was pressed
    //the take value from the button -->eventlistner
    //thne pushing those value t the screen
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value+=value;
        })
    });

    equal.addEventListener('click',function(e){
        //first clear the value of screen
        if(screen.value===''){
            screen.value="";
        }
        else{
            let answer=eval(screen.value);
            screen.value=answer;
        }
    });

    

    clear.addEventListener('click',function(e){
        screen.value="";
    })
})();



