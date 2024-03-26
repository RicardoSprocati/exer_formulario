const form = document.getElementById('formulario');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const idadePai = document.getElementById ('idade-pai');
    const idadeFilho = document.getElementById('idade-filho');
    const parabens = document.querySelector('.parabens');

    const mensagemSucesso = `Parabéns o Pai tem <b>${idadePai.value}</b> anos e o Filho <b>${idadeFilho.value}</b> anos.`;


    if (idadeFilho.value < idadePai.value) {
        parabens.innerHTML = mensagemSucesso;
        parabens .style.display = 'block';
        idadeFilho.value = ' ';
        idadePai.value = ' ';
        document.querySelector('.error').style.display = 'none';

    } else {
        idadeFilho.style.border = '1px solid red';
        document.querySelector('.error').style.display = 'block';
    }
})