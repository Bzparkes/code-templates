const body = document.querySelector('#body');
const theme = document.querySelector('#theme');
const white = document.querySelector('#white');
const black = document.querySelector('#black');

theme.addEventListener('change', e => {
    if(e.target.value === 'white'){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } else if(e.target.value === 'black'){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else{
        document.body.style.backgroundColor = 'pink';
    }
});