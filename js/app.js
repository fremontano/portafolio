

document.addEventListener('DOMContentLoaded', function(){
    const cards =  document.querySelectorAll('.card-proyect');

    // por defecto la primera tarjeta esta activa 
    cards[0].classList.add('active');

    cards.forEach((card) =>{
        card.addEventListener('mouseenter',()=>{
            // remmove la clase active a todas las tarjetas 
            cards.forEach((c) => c.classList.remove('active'));

            // agrgar el active a la tarjeta que pasa el mouse 
            card.classList.add('active');
        });
    });
});




