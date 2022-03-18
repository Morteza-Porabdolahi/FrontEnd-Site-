function moveRight(){
    $('#list li:first-of-type').removeClass('first-child');
    $('#list li:last-of-type').addClass('first-child');
    $('#list li:last-of-type').insertAfter('#moveR');
}
function moveLeft(){
    $('#list li:first-of-type').removeClass('first-child');
    $('#list li:last-of-type').addClass('first-child');
    $('#list li:first-of-type').insertBefore('#moveL');
}
setInterval(() => {
    moveRight();
}, 4000);
$('#moveR').click(function (e) { 
    e.preventDefault();
    moveRight();
});
$('#moveL').click(function (e) { 
    e.preventDefault();
    moveLeft();
});
let trans = 1575;
setInterval(() => {
    if(trans === -1125){
        trans =2025;
    }
    trans -= $('.client').width();
    $('.clients-section').css({
        transform : `translate3d(${trans}px,0,0)`
    });
}, 2000);
$('.last-link').click(function () {
    $('.search-section').toggle();
});

window.onscroll = function() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop >1000) {
        $('.footer-scroll-up').css('display','block');
    } else {
        $('.footer-scroll-up').css('display','none');
    }
}
function scrollToTop() {
    $('body').css({ 'overflow': 'auto' });
    const scroll = (document.body.scrollTop || document.documentElement.scrollTop);
    if (scroll) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo({ top: 0 }, scroll - scroll / 8);
        $('body').css({ 'overflow': 'hidden' });
    }
}
$('.footer-scroll-up').click(function (e) { 
    e.preventDefault();
    scrollToTop();
});