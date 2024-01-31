$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault()
        console.log($('endereco-imagem-nova'))
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display: none">')
        $(`<img src="${enderecoDaNovaImagem}" alt="">`).appendTo(novoItem)
        $(`<div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver Imagem em Tamanho Real">
                    Ver Imagem em Tamanho Real
                </a>
            </div class="overlay-imagem-link">`).appendTo(novoItem)
        $('</li>').appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#endereco-imagem-nova').val('')
    })

    $('header button').click(function () {
        $('form').slideDown(300)
    })

    $('#botao-cancelar').click(() => {
        $('form').slideUp(300)
    })

})