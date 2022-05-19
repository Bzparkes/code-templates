const theme = document.querySelector('#theme');

theme.addEventListener('change', e => {
    if(e.target.value === 'white'){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } else if(e.target.value === 'black'){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else if(e.target.value === 'green'){
        document.body.style.backgroundColor = 'green';
        document.body.style.color = 'white';
    } else if(e.target.value === 'pink'){
        document.body.style.backgroundColor = 'pink';
        document.body.style.color = 'white';
    } else if(e.target.value === 'blue'){
        document.body.style.backgroundColor = 'blue';
        document.body.style.color = 'white';
    }     
});


// As above but with switch statement. Work in progress.

// const option = document.querySelectorAll('option');
// option.addEventListener('change', e =>{
//     switch(e) {
//         case option.value === 'white':
//             document.body.style.backgroundColor = 'white';
//             document.body.style.color = 'black';
//             break;
//         case option.value === 'black':
//             document.body.style.backgroundColor = 'black';
//             document.body.style.color = 'white';
//             break;
//         default:
//             document.body.style.backgroundColor = 'pink';
//     }
// });