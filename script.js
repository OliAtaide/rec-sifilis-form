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