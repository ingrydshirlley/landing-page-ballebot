document.addEventListener('DOMContentLoaded', function() {
    const menuResponsivoBotao = document.querySelector('.menu-responsivo-botao');
    const cabecalhoMenu = document.querySelector('.cabecalho-menu');

    menuResponsivoBotao.addEventListener('click', function() {
        cabecalhoMenu.classList.toggle('ativo');
    });
});