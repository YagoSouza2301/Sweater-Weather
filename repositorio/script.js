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