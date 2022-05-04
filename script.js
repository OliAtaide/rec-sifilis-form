function format(num) {
    return ("0" + num).slice(-2);
}

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
        data: '02/05/2022'
    },
    {
        etapa: 'Inscrições',
        data: '02/05/2022 a 02/06/2022'
    },
    {
        etapa: 'Veiculação das peças no Instagram ',
        data: '06/06/2022 a 30/06/2022'
    },
    {
        etapa: 'Avaliação dos vídeos',
        data: '01/07/2022 a 16/08/2022'
    },
    {
        etapa: 'Divulgação da análise dos vídeos',
        data: '21/08/2022'
    },
    {
        etapa: 'Evento presencial em Natal/RN para produção de novo vídeo',
        data: '16/09/2022 a 18/09/2022'
    },
    {
        etapa: 'Julgamento dos materiais produzidos na etapa presencial',
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