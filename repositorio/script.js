//Aqui  adicionamos um evento de escutar o click do Mouse sobre o ícone de Hamburger.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
   // Criamos uma função que a ouvir o click do Mouse, ele adicione uma Class, que está fazendo mossa caixa (DIV) aparecer, ou seja, ficar visivel
});

//Criamos uma função que a o ouvir o click do mouse, ele REMOVA uma Class, que está fazendo mossa caixa (Div) desaparecer, ou seja, ficar invisivel.
closeButton.addEventListener("click", function() {
   mobileMenu.classList.remove("flex");
});









// $(document).ready: Função que garante que o código dentro dela execute
    // somente após o HTML completo da página estar carregando.
    $(document).ready(function(){
        // Seleciona o contêiner .carousel e aplica a função slick()
        // que ativa o carrosel com as configuração abaixo
        $('.carousel').slick({

            slidesToShow: 3, 
            slidesToScroll: 1, 

            infinite: true,

            dots: true,

            arrows: true
        }); 
    });


    ScrollReveal().reveal('#dir', {
        duration: 1500, 
        origin:'left', 
        distance: '100px', 
    });
    ScrollReveal().reveal('#esq', {
        duration: 1500, 
        origin:'rigth', 
        distance: '100px', 
    });