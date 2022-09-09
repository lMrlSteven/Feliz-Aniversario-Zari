const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('HOLAAA... FLOJITA')
    alert ('COMO UN DÍA COMO HOY NOS CONOCIMOS, Y NACIÓ NUESTRO AMOR');
    alert ('FELIZ ANIVERSARIO AMOR');
    alert ('ESPERO QUE TE HAYA GUSTADO ESTE LINDO DETALLE QUE ELABORÉ POR NUESTRO ANIVERSARIO 09-09-22,TE AMO MUCHO ZARI');
    alert ('BENDITA TU LUZ');
    location.href = 'https://www.youtube.com/watch?v=LGTSjKBWKLY=10s'
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})