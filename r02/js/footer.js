$(document).ready(function() {

	// Footer
    var bote = $('.footer .bote img')
    var frut = $('.footer .frut img')

    tlsPaque = new TimelineLite();
    tlsPaque

    .staggerFromTo(bote, 1, {autoAlpha:0, scale: .4}, {autoAlpha:1, scale: 1, ease: Elastic.easeOut.config(1, 0.7)},0.10)
    .staggerFromTo(frut, 1, {autoAlpha:0, y: '-30%'}, {autoAlpha:1, y: '0%', ease: Elastic.easeOut.config(1, 0.7)},0.10,"-=.5")

    var ourScene = new ScrollMagic.Scene({ triggerElement: ".footer .compo", triggerHook: .65}) 
    .setTween(tlsPaque)
    //.addIndicators({name: "Botellas"})
    .addTo(controller);

	
});