function format(num) {
    return ("0" + num).slice(-2);
}

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const d = new Date();
var time = format(d.getHours()) + ':' + format(d.getMinutes());
var date = format(d.getDate()) + '/' + format(d.getMonth()) + '/' + d.getFullYear();
$('.date').append(
    time + '<br>' + date
);

$('main').css('min-height', $(window).height());

var cronograma = [
    {
        etapa: 'Divulgação do edital',
        data: '19/05/2022'
    },
    {
        etapa: 'Período de inscrições',
        data: '23/05/2022 a 23/06/2022'
    },
    {
        etapa: 'Análise das inscrições',
        data: '24 a 27/06/2022'
    },
    {
        etapa: 'Resultado preliminar das inscrições',
        data: '28/06/2022'
    },
    {
        etapa: 'Interposição de recursos',
        data: '29 a 30/06/2022'
    },
    {
        etapa: 'Resultado final das inscrições',
        data: '01/07/2022'
    },
    {
        etapa: 'Veiculação das peças no Instagram ',
        data: '02 a 13/07/2022'
    },
    {
        etapa: 'Avaliação dos vídeos',
        data: '14/07/2022 a 18/08/2022'
    },
    {
        etapa: 'Divulgação preliminar da análise dos vídeos',
        data: '19/08/2022'
    },
    {
        etapa: 'Interposição de recursos',
        data: '20 a 21/08/2022'
    },
    {
        etapa: 'Resultado final da análise dos vídeos',
        data: '25/08/2022'
    },
    {
        etapa: 'Evento presencial em Natal/RN para produção de novo vídeo',
        data: '16 a 18/09/2022'
    },
    {
        etapa: 'Julgamento dos materiais produzidos na etapa presencial',
        data: '18/09/2022'
    },
    {
        etapa: 'Resultado final do REC Sifilis',
        data: '18/09/2022'
    },
    {
        etapa: 'Período que a equipe vencedora estará em Madrid ',
        data: ''
    },
    {
        etapa: 'Período que a segunda colocada XXXX',
        data: ''
    },
    {
        etapa: 'Período que a terceira colocada XXXX',
        data: ''
    },
]


for (let i = 0; i < cronograma.length; i++) {
    $('.cronograma').append(
        "<tr><td>" + cronograma[i].etapa +
        "</td><td class='text-center'><strong>"
        + cronograma[i].data +
        "</strong></td></tr>"
    )
}

$('.ler-mais').click(function () {
    console.log('ok');
    $(this).prev().removeClass('hidden');
    $(this).hide();
})

function scrollar(element) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(element).offset().top - 84
    }, 100);
}