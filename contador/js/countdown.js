    // This is an example with default parameters
function imprimeContador(personajes){
    
    // console.log(personaje[0].id)
    // const id=personaje[0].id


    // personajes.map(personaje => {
        const {id, name, status, species, image}=personajes;
        
        if (id===1) {
            const contadorMain = document.querySelector('#countdown')
            
        simplyCountdown(contadorMain, {
                year: 2022, // required
                month: 5, // required
                day: 8, // required
                hours: 22, // Default is 0 [0-23] integer
                minutes: 07, // Default is 0 [0-59] integer
                seconds: 30, // Default is 0 [0-59] integer
                words: { //words displayed into the countdown
                    days: { singular: ' día', plural: ' días' },
                    hours: { singular: ' hora', plural: ' horas' },
                    minutes: { singular: ' minuto', plural: ' minutos' },
                    seconds: { singular: ' segundo', plural: ' segundos' }
                },
                plural: true, //use plurals
                inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
                inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
                // in case of inline set to false
                enableUtc: false, //Use UTC or not - default : false
                onEnd: function() { 
                    const contador1 = document.querySelector('.countdown');
                    contador1.classList.add('oculta');
                    resultado.classList.add('oculta');
                    const contador2= document.querySelector('.my-countdown');
                    contador2.classList.add('mostrar');
        
                    return; }, //Callback on countdown end, put your own function here
                refresh: 1000, // default refresh every 1s
                sectionClass: 'simply-section', //section css class
                amountClass: 'simply-amount', // amount css class
                wordClass: 'simply-word', // word css class
                zeroPad: false,
                countUp: false
        });
        resultado.innerHTML+=`

        <p>El ID es: ${id}</p>
        <p>El nombre es: ${name}</p>
        <p>El status es: ${status}</p>
        <p>La especie es: ${species}</p>
        <img class="w-full" src="${image}">
        `;
        }
        
    // });
    // Also, you can init with already existing Javascript Object.
     
    if (id===2) {
        let myElement = document.querySelector('.my-countdown');
 simplyCountdown(myElement, { 
    year: 2022, // required
        month: 5, // required
        day: 8, // required
        hours: 22, // Default is 0 [0-23] integer
        minutes: 09, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: { singular: 'día', plural: 'días' },
            hours: { singular: 'hora', plural: 'horas' },
            minutes: { singular: 'minuto', plural: 'minutos' },
            seconds: { singular: ' segundo', plural: ' segundos' }
        },
        plural: true, //use plurals
        inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
        inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
        // in case of inline set to false
        enableUtc: false, //Use UTC or not - default : false
        onEnd: function() { 

            const contador2= document.querySelector('.my-countdown');
            contador2.classList.remove('mostrar');
            resultado2.classList.add('oculta');
            const contador3= document.querySelector('.segundoProducto');
            contador3.classList.add('mostrar');
            return; 
        }, //Callback on countdown end, put your own function here
        refresh: 1000, // default refresh every 1s
        sectionClass: 'simply-section', //section css class
        amountClass: 'simply-amount', // amount css class
        wordClass: 'simply-word', // word css class
        zeroPad: false,
        countUp: false

 });
    resultado2.innerHTML+=`

    <p>El ID es: ${id}</p>
    <p>El nombre es: ${name}</p>
    <p>El status es: ${status}</p>
    <p>La especie es: ${species}</p>
    <img class="w-full" src="${image}">
    `;
    }



}
// // Also, you can init with already existing Javascript Object.
// let myElement = document.querySelector('.my-countdown');
//  simplyCountdown(myElement, { 
//     year: 2022, // required
//         month: 5, // required
//         day: 8, // required
//         hours: 20, // Default is 0 [0-23] integer
//         minutes: 03, // Default is 0 [0-59] integer
//         seconds: 0, // Default is 0 [0-59] integer
//         words: { //words displayed into the countdown
//             days: { singular: 'día', plural: 'días' },
//             hours: { singular: 'hora', plural: 'horas' },
//             minutes: { singular: 'minuto', plural: 'minutos' },
//             seconds: { singular: ' segundo', plural: ' segundos' }
//         },
//         plural: true, //use plurals
//         inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
//         inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
//         // in case of inline set to false
//         enableUtc: false, //Use UTC or not - default : false
//         onEnd: function() { 

//             const contador2= document.querySelector('.my-countdown');
//             contador2.classList.remove('mostrar');
//             const contador3= document.querySelector('.segundoProducto');
//             contador3.classList.add('mostrar');
//             return; 
//         }, //Callback on countdown end, put your own function here
//         refresh: 1000, // default refresh every 1s
//         sectionClass: 'simply-section', //section css class
//         amountClass: 'simply-amount', // amount css class
//         wordClass: 'simply-word', // word css class
//         zeroPad: false,
//         countUp: false

//  });

//  let segundoProducto = document.querySelector('.segundoProducto');
// simplyCountdown(segundoProducto, { 
//     year: 2022, // required
//         month: 5, // required
//         day: 8, // required
//         hours: 20, // Default is 0 [0-23] integer
//         minutes: 04, // Default is 0 [0-59] integer
//         seconds: 20, // Default is 0 [0-59] integer
//         words: { //words displayed into the countdown
//             days: { singular: 'día', plural: 'días' },
//             hours: { singular: 'hora', plural: 'horas' },
//             minutes: { singular: 'minuto', plural: 'minutos' },
//             seconds: { singular: ' segundo', plural: ' segundos' }
//         },
//         plural: true, //use plurals
//         inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
//         inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
//         // in case of inline set to false
//         enableUtc: false, //Use UTC or not - default : false
//         onEnd: function() { 

            
//             const contador3= document.querySelector('.segundoProducto');
//             contador3.classList.remove('mostrar');
//             contador3.classList.add('oculta');
//             return; 
//         }, //Callback on countdown end, put your own function here
//         refresh: 1000, // default refresh every 1s
//         sectionClass: 'simply-section', //section css class
//         amountClass: 'simply-amount', // amount css class
//         wordClass: 'simply-word', // word css class
//         zeroPad: false,
//         countUp: false

//  });

// let multipleElements = document.querySelectorAll('.my-countdown');
// simplyCountdown(multipleElements, { /* options */ });


window.onload=()=>{
    buscarPersonaje();

}
function buscarPersonaje(){
    
    const id=[1,2]
    const url =`https://rickandmortyapi.com/api/character/${id}`;
    // console.log(url);
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado =>{
            
            // console.log(resultado.results)
            // mostrarPersonaje(resultado.results);
            resultado.map(res=>{
                console.log(res.id)
                imprimeContador(res)
            })
            
            
        })

}

// function mostrarPersonaje(personajes){
//     //Iterar sobre el arreglo de imagenes y construir el HTML
//     personajes.forEach(personaje => {
//         const {id, name, status, species, image}=personaje;

//         resultado.innerHTML+=`

//         <p>El ID es: ${id}</p>
//         <p>El nombre es: ${name}</p>
//         <p>El status es: ${status}</p>
//         <p>La especie es: ${species}</p>
//         <img class="w-full" src="${image}">
//         `
//     });

     
    
// }