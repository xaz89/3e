// VARIABLES

// FUNCIONES

function start(){

    //--- fix placeholder
    $(function() {
        var input = document.createElement("input");
            if( ('placeholder' in input) == false ) {
                $('[placeholder]').focus(function() {
                    var i = $(this);
                    if(i.val() == i.attr('placeholder')) {
                        i.val('').removeClass('placeholder');
                        if(i.hasClass('password')) {
                            i.removeClass('password');
                            this.type='password';
                        }
                    }
                }).blur(function() {
                    var i = $(this);
                    if( i.val() == '' || i.val() == i.attr('placeholder') ) {
                        if(this.type=='password') {
                            i.addClass('password');
                            this.type='text';
                        }
                        i.addClass('placeholder').val(i.attr('placeholder'));
                    }
                }).blur().parents('form').submit(function() {
                    $(this).find('[placeholder]').each(function() {
                        var i = $(this);
                        if(i.val() == i.attr('placeholder'))
                            i.val('');
                    });
                });
        }
    });

    //--- Slider info
    $(".js-slider-info").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        adaptiveHeight: true
    });
    $('.js-slider-info').on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log($(slick.$slides.get(currentSlide)).attr('id'))
        $(".slide__sabor-1").each(function(){
            if($(this).hasClass("slick-current")) {
                $(".js-slider--show *").removeClass("active")
                $(".sabor-item-1").addClass("active")
            }
        });
        $(".slide__sabor-2").each(function(){
            if($(this).hasClass("slick-current")) {
                $(".js-slider--show *").removeClass("active")
                $(".sabor-item-2").addClass("active")
            }
        });
        $(".slide__sabor-3").each(function(){
            if($(this).hasClass("slick-current")) {
                $(".js-slider--show *").removeClass("active")
                $(".sabor-item-3").addClass("active")
            }
        });
        $(".slide__sabor-4").each(function(){
            if($(this).hasClass("slick-current")) {
                $(".js-slider--show *").removeClass("active")
                $(".sabor-item-4").addClass("active")
            }
        });
    });

    //--- Slider map

    // Location One
    //alert(assetsUrl);
    $(".js-slider-map-locationOne").slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="'+assetsUrl+'core/landing_assets/images/icon/arrow_left.svg" alt="Atras"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="'+assetsUrl+'core/landing_assets/images/icon/arrow_right.svg" alt="Siguiente"></button>',
        asNavFor: '.js-slider-nav-locationNameOne',
        adaptiveHeight: true
    });
    $('.js-slider-nav-locationNameOne').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.js-slider-map-locationOne',
        dots: false,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });
    // Location Two
    $(".js-slider-map-locationTwo").slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="'+assetsUrl+'core/landing_assets/images/icon/arrow_left.svg" alt="Atras"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="'+assetsUrl+'core/landing_assets/images/icon/arrow_right.svg" alt="Siguiente"></button>',
        asNavFor: '.js-slider-nav-locationNameTwo'
    });
    $('.js-slider-nav-locationNameTwo').slick({
         slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.js-slider-map-locationTwo',
        dots: false,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });
    // Location Three
    $(".js-slider-map-locationThree").slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="'+assetsUrl+'core/landing_assets/images/icon/arrow_left.svg" alt="Atras"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="'+assetsUrl+'core/landing_assets/images/icon/arrow_right.svg" alt="Siguiente"></button>',
        asNavFor: '.js-slider-nav-locationNameThree'
    });
    $('.js-slider-nav-locationNameThree').slick({
         slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.js-slider-map-locationThree',
        dots: false,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });
    // Location Four
    $(".js-slider-map-locationFour").slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="'+assetsUrl+'core/landing_assets/images/icon/arrow_left.svg" alt="Atras"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="'+assetsUrl+'core/landing_assets/images/icon/arrow_right.svg" alt="Siguiente"></button>',
        asNavFor: '.js-slider-nav-locationNameFour'
    });
    $('.js-slider-nav-locationNameFour').slick({
         slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.js-slider-map-locationFour',
        dots: false,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });
    // Location Five
    $(".js-slider-map-locationFive").slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="'+assetsUrl+'core/landing_assets/images/icon/arrow_left.svg" alt="Atras"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="'+assetsUrl+'core/landing_assets/images/icon/arrow_right.svg" alt="Siguiente"></button>',
        asNavFor: '.js-slider-nav-locationNameFive',
        adaptiveHeight: true
    });
    $('.js-slider-nav-locationNameFive').slick({
         slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.js-slider-map-locationFive',
        dots: false,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });


    //--- Slider loading
    $(".slick-slider .slick-dots button").append("<div class='circle left rotate'><span></span></div><div class='circle right rotate'><span></span></div>");

    //--- Slider action
    $(".js-slider__action").click(function(e){
        e.preventDefault();
        $(".slider__action").removeClass("active");
        $(this).addClass("active");
        $(".slider__map-block").removeClass("active");
        $(".map-location").removeClass("active");
        $("#slider-map-" + $(this).attr('data-div')).addClass("active");
        $("#slider-location-" + $(this).attr('data-div')).addClass("active");
    });

    //--- JS field
    function checkForInput(element) {
        // element is passed to the function ^
        const $label = $(element).parents(".form__field");
        if ($(element).val().length > 0) {
            $label.addClass('active');
        } else {
            $label.removeClass('active');
        }
    }
    // The lines below are executed on page load
    $('.js-form-field').each(function() {
        checkForInput(this);
    });
  
    // The lines below (inside) are executed on change & keyup
    $('.js-form-field').on('change keyup', function() {
        checkForInput(this);  
    });

    //--- Validation form
    // $('#js-form').submit(function(e){
    //     var validado = true;
    //     var nameUser = $("#nameField");
    //     var emailUser = $("#emailField");
    //     var messageUser = $("#messageField");

    //     if(nameUser.val() == "" || nameUser.val() == null) {nameUser.parents(".form__span").addClass("active"); validado = false;}
    //     if(emailUser.val() == "" || emailUser.val() == null) {emailUser.parents(".form__span").addClass("active"); validado = false;}
    //     if(messageUser.val() == "" || messageUser.val() == null) {messageUser.parents(".form__span").addClass("active"); validado = false;}

    //     if(!validado){
            
    //     }
    //     else {$(this).submit();}
    //     e.preventDefault();
    // });
    // $('.js-form-field').focus(function(){
    //     $(this).parents(".form__span").removeClass('active');
    // });

    //--- Modal open
    if (window.location.href.indexOf("#gracias") > -1) {
        $("#modalSuccess").modal('show')
    }
    if (window.location.href.indexOf("#error") > -1) {
        $("#modalError").modal('show')
    }
    $(".js-close").click(function(){
        //window.location.replace("/");
        $("#modalSuccess").modal('hide')
    });

    // Header on Scroll
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 500) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    });

    // Loader
    setTimeout(function(){
        $(".loader").fadeOut();
    },1200);

    // ScrollTo
    $('.js-scroll-to').click(function(e) {
        e.preventDefault();
        $('#target' + $(this).attr("data-target")).addClass('nactive');
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 3000);
            return false;
          }
        }
    });
    
    // open
    $(".js-open").click(function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $(".menu__wrapp").toggleClass("active");
        $(".social__wrapp").toggleClass("active");
       
    });
    $(".menu a").click(function(){
        $(".js-open").removeClass("active")
        $(".menu__wrapp").removeClass("active")
        $(".social__wrapp").removeClass("active")
    });

    // Detect device
    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
            // Windows Phone must come first because its UA also contains "Android"
          if (/windows phone/i.test(userAgent)) {
            $("#js-video").addClass("active");
            $(".video--gif").addClass("active");
          }
      
          if (/android/i.test(userAgent)) {
            $("#js-video").addClass("active");
            $(".video--gif").addClass("active");
          }
      
          // iOS detection from: http://stackoverflow.com/a/9039885/177710
          if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            $("#js-video").addClass("active");
            $(".video--gif").addClass("active");
          }
      
          return "unknown";
      }  
      getMobileOperatingSystem()

}

function responsive(){
}

// INVOCACIÃ“N

$( document ).on( 'ready', start );
$( window ).on( 'load resize', responsive );


/*::::::::
    Animation scene
::::::::::*/

    // init Framework
    var controller = new ScrollMagic.Controller();

    // Assets
    // -- SceneOne
    var assetOneLeafOne = TweenMax.to(".sceneOne--LeafOne", 1, {className: "+=leaf--toUp"});
    var assetOneLeafTwo = TweenMax.to(".sceneOne--LeafTwo", 1, {className: "+=leaf--toDown"});
    var assetOneTextOne = TweenMax.to(".sceneOne--TextOne", 1, {className: "+=vertical-text--toTop"});
    var assetOneTextTwo = TweenMax.to(".sceneOne--TextTwo", 1, {className: "+=vertical-text--toDown"});
    var assetOneBottleOne = TweenMax.to(".sceneOne--BottleOne", 1, {className: "+=bottle--toRight"});
    // -- SceneTwo
    /*var assetTwoVideo = TweenMax.to(".sceneTwo--video", 1, {className: "+=video--resize"});
    var assetTwoVideoOut = TweenMax.to(".sceneTwo--video", 1, {className: "+=video--fade"});*/
    // -- SceneThree
    var assetThreeTypeOne = TweenMax.to(".sceneThree--TextOne", 1, {className: "+=vertical-text--toTop"});
    var assetThreeTypeTwo = TweenMax.to(".sceneThree--TextTwo", 1, {className: "+=vertical-text--toDown"});
    var assetThreeTypeThree = TweenMax.to(".sceneThree--TextThree", 1, {className: "+=vertical-text--toTop"});
    var assetThreeTypeFour = TweenMax.to(".sceneThree--TextFour", 1, {className: "+=horizontal-text--toRight"});
    var assetThreeEnterOne = TweenMax.to(".sceneThreeEnterOne", 1, {className: "+=scene--toDown"});
    var assetThreeEnterTwo = TweenMax.to(".sceneThreeEnterTwo", 1, {className: "+=scene--toTop"});
    var assetThreeEnterThree = TweenMax.to(".sceneThreeEnterThree", 1, {className: "+=scene--toTop"});
    var assetThreeEnterFour = TweenMax.to(".sceneThreeEnterFour", 1, {className: "+=scene--toTop"});
    var assetThreeEnterFive = TweenMax.to(".sceneThreeEnterFive", 1, {className: "+=scene--toTop"});
    var assetThreeEnterSix = TweenMax.to(".sceneThreeEnterSix", 1, {className: "+=scene--toTop"});
    // -- SceneFour
    var assetFourTypeOne = TweenMax.to(".sceneFour--TextOne", 1, {className: "+=horizontal-text--ToLeft"});
    var assetFourTypeTwo = TweenMax.to(".sceneFour--TextTwo", 1, {className: "+=horizontal-text--ToRight"});
    var assetFourTypeOneA = TweenMax.to(".sceneFour--TextOne", 1, {className: "+=active"});
    var assetFourTypeTwoB = TweenMax.to(".sceneFour--TextTwo", 1, {className: "+=active"});
    // -- SceneFive
    var assetFiveTypeOne = TweenMax.to(".sceneFive--TextOne", 1, {className: "+=vertical-text--ToLeft"});
    var assetFiveTypeTwo = TweenMax.to(".sceneFive--TextTwo", 1, {className: "+=vertical-text--ToRight"});
    var assetFiveTypeThree = TweenMax.to(".sceneFive--TextThree", 1, {className: "+=vertical-text--ToLeft"});
    var assetFiveBottleOne = TweenMax.to(".sceneFive--bottleOne", 1, {className: "+=bottle--toUp"});
    // -- SceneSix
    var assetSixTypeOne = TweenMax.to(".sceneSix--TextOne", 1, {className: "+=horizontal-text--toTop"});
    var assetSixTypeTwo = TweenMax.to(".map-animation-title", 1, {className: "+=map--toTop"});
    var assetSixNavOne = TweenMax.to(".slider-map__controller", 1, {className: "+=slider-controller--toLeft"});
    var assetSixSliderOne = TweenMax.to(".slider__map-wrapp", 1, {className: "+=slider__toTop"});
    var assetSixMapOne = TweenMax.to(".slider-map__scene", 1, {className: "+=slider-scene--toLeft"});

    // -- Footer
    var assetFooterForm = TweenMax.to(".form-module", 1, {className: "+=form--toBottom"});
    // -- Header
    var tweenHeader = document.getElementById("header");
    // -- Main
    var tweenMain = document.getElementById("main-block");

    // Builder
    //.addIndicators({name: "Scene"}) // add indicators (requires plugin)

    //:::: SceneOne . 1. Hero section
    var sceneOneLeafOne = new ScrollMagic.Scene({duration: 400, offset: 0})
        .setTween(assetOneLeafOne)
        .addTo(controller);  
    var sceneOneLeafTwo = new ScrollMagic.Scene({duration: 600, offset: 0})
        .setTween(assetOneLeafTwo)
        .addTo(controller);       
    var sceneOneTextOne = new ScrollMagic.Scene({duration: 800, offset: 0})
        .setTween(assetOneTextOne)
        .addTo(controller); 
    var sceneOneTextTwo = new ScrollMagic.Scene({duration: 500, offset: 0})
        .setTween(assetOneTextTwo)
        .addTo(controller);   
    var sceneOneBottleOne = new ScrollMagic.Scene({duration: 600, offset: 0})
        .setTween(assetOneBottleOne)
        .addTo(controller);     

    //:::: SceneTwo . 2 Video
    /*var sceneTwoVideo = new ScrollMagic.Scene({duration: 600, offset: 0})
        .setTween(assetTwoVideo)
        .addTo(controller);
    var sceneTwoVideoOut = new ScrollMagic.Scene({duration: 400, offset: 1400})
        .setTween(assetTwoVideoOut)
        .addTo(controller);  */ 

    //:::: SceneThree . 3. Historia
    var sceneThreeTypeOne = new ScrollMagic.Scene({duration: 1200, offset: 1800})
        .setTween(assetThreeTypeOne)
        .addTo(controller);
    var sceneThreeTypeTwo = new ScrollMagic.Scene({duration: 1200, offset: 1800})
        .setTween(assetThreeTypeTwo)
        .addTo(controller);
    var sceneThreeTypeThree = new ScrollMagic.Scene({duration: 1800, offset: 1000})
        .setTween(assetThreeTypeThree)
        .addTo(controller);
    var sceneThreeTypeFour = new ScrollMagic.Scene({duration: 1000, offset: 2100})
        .setTween(assetThreeTypeFour)
        .addTo(controller);
    var sceneThreeEnterOne = new ScrollMagic.Scene({duration: 600, offset: 500})
        .setTween(assetThreeEnterOne)
        .addTo(controller);
    var sceneThreeEnterTwo = new ScrollMagic.Scene({duration: 600, offset: 800})
        .setTween(assetThreeEnterTwo)
        .addTo(controller);
    var sceneThreeEnterThree = new ScrollMagic.Scene({duration: 600, offset: 1200})
        .setTween(assetThreeEnterThree)
        .addTo(controller);
    var sceneThreeEnterFour = new ScrollMagic.Scene({duration: 600, offset: 1800})
        .setTween(assetThreeEnterFour)
        .addTo(controller);
    var sceneThreeEnterFive = new ScrollMagic.Scene({duration: 600, offset: 2200})
        .setTween(assetThreeEnterFive)
        .addTo(controller);    
    var sceneThreeEnterSix = new ScrollMagic.Scene({duration: 600, offset: 2400})
        .setTween(assetThreeEnterSix)
        .addTo(controller);       

    //:::: SceneFour . 4. Quote
    var sceneFourTypeOne = new ScrollMagic.Scene({duration: 600, offset: 2800})
        .setTween(assetFourTypeOne)
        .addTo(controller);
    var sceneFourTypeTwo = new ScrollMagic.Scene({duration: 600, offset: 2800})
        .setTween(assetFourTypeTwo)
        .addTo(controller);    
    var sceneFourTypeOneA = new ScrollMagic.Scene({duration: 600, offset: 3200})
        .setTween(assetFourTypeOneA)
        .addTo(controller);
    var sceneFourTypeTwoB = new ScrollMagic.Scene({duration: 600, offset: 3200})
        .setTween(assetFourTypeTwoB)
        .addTo(controller);      

    //:::: SceneFive . 5. Mandarina
    var sceneFiveTypeOne = new ScrollMagic.Scene({duration: 600, offset: 3600})
        .setTween(assetFiveTypeOne)
        .addTo(controller);
    var sceneFiveTypeTwo = new ScrollMagic.Scene({duration: 600, offset: 3300})
        .setTween(assetFiveTypeTwo)
        .addTo(controller); 
    var sceneFiveTypeThree = new ScrollMagic.Scene({duration: 600, offset: 3400})
        .setTween(assetFiveTypeThree)
        .addTo(controller);
    var sceneFiveBottleOne = new ScrollMagic.Scene({duration: 600, offset: 3400})
        .setTween(assetFiveBottleOne)
        .addTo(controller);   

    //:::: SceneSix . 6. Map
    var sceneSixTypeOne = new ScrollMagic.Scene({duration: 600, offset: 4200})
        .setTween(assetSixTypeOne)
        .addTo(controller);
    var sceneSixTypeTwo = new ScrollMagic.Scene({duration: 600, offset: 4300})
        .setTween(assetSixTypeTwo)
        .addTo(controller);
    var sceneSixNavOne = new ScrollMagic.Scene({duration: 600, offset: 4300})
        .setTween(assetSixNavOne)
        .addTo(controller);
    var sceneSixSliderOne = new ScrollMagic.Scene({duration: 600, offset: 4300})
        .setTween(assetSixSliderOne)
        .addTo(controller);
    var sceneSixMapOne = new ScrollMagic.Scene({duration: 600, offset: 4400})
        .setTween(assetSixMapOne)
        .addTo(controller);

    //:::: Footer
    var sceneFooterForm = new ScrollMagic.Scene({duration: 600, offset: 5400})
        .setTween(assetFooterForm)
        .addTo(controller);

    //:::: Header
    /*new ScrollMagic.Scene({triggerElement: "#video", duration: 1200})
        .setClassToggle("#header", "header--color1") // add class toggle
        .addTo(controller);*/
    new ScrollMagic.Scene({triggerElement: "#historia", duration: "100%", offset: 400})
        .setClassToggle("#header", "header--color2") // add class toggle
        .addTo(controller); 
    new ScrollMagic.Scene({triggerElement: "#quote", duration: 2800})
        .setClassToggle("#header", "header--color3") // add class toggle
        .addTo(controller);   
    //:::: Main
    new ScrollMagic.Scene({triggerElement: "#historia", duration: 2800, offset: 0})
        .setClassToggle("#main-block", "main--color1") // add class toggle
        .addTo(controller); 
    new ScrollMagic.Scene({triggerElement: "#quote", duration: 2800})
        .setClassToggle("#main-block", "main--color2") // add class toggle
        .addTo(controller); 
    new ScrollMagic.Scene({triggerElement: "#contacto", duration: 2800})
        .setClassToggle("#main-block", "main--color3") // add class toggle
        .addTo(controller); 
    new ScrollMagic.Scene({triggerElement: "#contacto", duration: 2800})
        .setClassToggle("#main-block", "main--color3") // add class toggle
        .addTo(controller); 

    /*:::::::::::
        Delay
        
    ::::::::::*/
    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

    /*:::::::::::
        Mediaquerie
    ::::::::::*/

    var mediaquerie = function() {
        var pause = 10;
        var widthhh = 0; // FixResize
        $(window).load(function(){
        widthhh = $(window).width();
        });
        
        
        function actions(){
                var width = $(window).width();
                //:::: BeginWidth ::::::
                if(widthhh != $(window).width()) {
                    if( width >= 993 ) {
                        //---->Desktop
                        
                        
                    }  else if( width >= 641 && width <= 992 ) {
                        //:::: SceneThree . 3. Historia
                        var sceneThreeEnterFour = new ScrollMagic.Scene({duration: 600, offset: 1600})
                            .setTween(assetThreeEnterFour)
                            .addTo(controller);
                        var sceneThreeEnterFive = new ScrollMagic.Scene({duration: 600, offset: 1800})
                            .setTween(assetThreeEnterFive)
                            .addTo(controller);    
                        var sceneThreeEnterSix = new ScrollMagic.Scene({duration: 600, offset: 2000})
                            .setTween(assetThreeEnterSix)
                            .addTo(controller); 
                            //:::: SceneFour . 4. Quote
                            var sceneFourTypeOne = new ScrollMagic.Scene({duration: 600, offset: 2300})
                            .setTween(assetFourTypeOne)
                            .addTo(controller);
                        var sceneFourTypeTwo = new ScrollMagic.Scene({duration: 600, offset: 2300})
                            .setTween(assetFourTypeTwo)
                            .addTo(controller);    
                        var sceneFourTypeOneA = new ScrollMagic.Scene({duration: 400, offset: 2600})
                            .setTween(assetFourTypeOneA)
                            .addTo(controller);
                        var sceneFourTypeTwoB = new ScrollMagic.Scene({duration: 400, offset: 2600})
                            .setTween(assetFourTypeTwoB)
                            .addTo(controller);   
                        //:::: SceneFour . 5. Mandarina
                        var sceneFiveTypeOne = new ScrollMagic.Scene({duration: 600, offset: 2600})
                            .setTween(assetFiveTypeOne)
                            .addTo(controller);
                        var sceneFiveTypeTwo = new ScrollMagic.Scene({duration: 600, offset: 2700})
                            .setTween(assetFiveTypeTwo)
                            .addTo(controller); 
                        var sceneFiveTypeThree = new ScrollMagic.Scene({duration: 600, offset: 2600})
                            .setTween(assetFiveTypeThree)
                            .addTo(controller);
                        var sceneFiveBottleOne = new ScrollMagic.Scene({duration: 600, offset: 2500})
                            .setTween(assetFiveBottleOne)
                            .addTo(controller);      
                        //:::: SceneSix . 6. Map
                        var sceneSixTypeOne = new ScrollMagic.Scene({duration: 600, offset: 3800})
                            .setTween(assetSixTypeOne)
                            .addTo(controller);
                        var sceneSixTypeTwo = new ScrollMagic.Scene({duration: 600, offset: 3600})
                            .setTween(assetSixTypeTwo)
                            .addTo(controller);
                        var sceneSixNavOne = new ScrollMagic.Scene({duration: 600, offset: 3800})
                            .setTween(assetSixNavOne)
                            .addTo(controller);
                        var sceneSixSliderOne = new ScrollMagic.Scene({duration: 600, offset: 3600})
                            .setTween(assetSixSliderOne)
                            .addTo(controller);
                        var sceneSixMapOne = new ScrollMagic.Scene({duration: 600, offset: 3800})
                            .setTween(assetSixMapOne)
                            .addTo(controller);
                        //:::: Footer
                        var sceneFooterForm = new ScrollMagic.Scene({duration: 300, offset: 4800})
                            .setTween(assetFooterForm)
                            .addTo(controller);

                    } else if( width >= 0 && width <= 640 ) {
                    //---->Mobile
                        //:::: SceneThree . 3. Historia
                        var sceneThreeEnterFour = new ScrollMagic.Scene({duration: 600, offset: 1600})
                            .setTween(assetThreeEnterFour)
                            .addTo(controller);
                        var sceneThreeEnterFive = new ScrollMagic.Scene({duration: 600, offset: 1800})
                            .setTween(assetThreeEnterFive)
                            .addTo(controller);    
                        var sceneThreeEnterSix = new ScrollMagic.Scene({duration: 600, offset: 2000})
                            .setTween(assetThreeEnterSix)
                            .addTo(controller); 
                        //:::: SceneFour . 4. Quote
                        var sceneFourTypeOne = new ScrollMagic.Scene({duration: 600, offset: 2300})
                            .setTween(assetFourTypeOne)
                            .addTo(controller);
                        var sceneFourTypeTwo = new ScrollMagic.Scene({duration: 600, offset: 2300})
                            .setTween(assetFourTypeTwo)
                            .addTo(controller);    
                        var sceneFourTypeOneA = new ScrollMagic.Scene({duration: 300, offset: 2600})
                            .setTween(assetFourTypeOneA)
                            .addTo(controller);
                        var sceneFourTypeTwoB = new ScrollMagic.Scene({duration: 300, offset: 2600})
                            .setTween(assetFourTypeTwoB)
                            .addTo(controller);   
                        //:::: SceneFour . 5. Mandarina
                        var sceneFiveTypeOne = new ScrollMagic.Scene({duration: 600, offset: 2500})
                            .setTween(assetFiveTypeOne)   
                            .addTo(controller);
                        var sceneFiveTypeTwo = new ScrollMagic.Scene({duration: 600, offset: 2600})
                            .setTween(assetFiveTypeTwo)
                            .addTo(controller); 
                        var sceneFiveTypeThree = new ScrollMagic.Scene({duration: 600, offset: 2700})
                            .setTween(assetFiveTypeThree)
                            .addTo(controller);
                        var sceneFiveBottleOne = new ScrollMagic.Scene({duration: 600, offset: 2500})
                            .setTween(assetFiveBottleOne)
                            .addTo(controller);   
                        //:::: SceneSix . 6. Map
                        var sceneSixTypeOne = new ScrollMagic.Scene({duration: 600, offset: 3400})
                            .setTween(assetSixTypeOne)
                            .addTo(controller);
                        var sceneSixTypeTwo = new ScrollMagic.Scene({duration: 600, offset: 3500})
                            .setTween(assetSixTypeTwo)
                            .addTo(controller);
                        var sceneSixNavOne = new ScrollMagic.Scene({duration: 600, offset: 3400})
                            .setTween(assetSixNavOne)
                            .addTo(controller);
                        var sceneSixSliderOne = new ScrollMagic.Scene({duration: 600, offset: 3500})
                            .setTween(assetSixSliderOne)
                            .addTo(controller);
                        var sceneSixMapOne = new ScrollMagic.Scene({duration: 600, offset: 3400})
                            .setTween(assetSixMapOne)
                            .addTo(controller);    
                        var sceneFooterForm = new ScrollMagic.Scene({duration: 300, offset: 4900})
                            .setTween(assetFooterForm)
                            .addTo(controller);
                    }
                }
            }
            actions();
        $(window).resize(function(e) {
        delay(function() {
                actions();
            }, pause );
        });

        $(window).resize();
    }
    mediaquerie();