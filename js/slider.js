

$(document).ready(function () {
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        prevArrow: `<i class="fa fa-angle-left left-arrow arrows" aria-hidden="true"></i>`,
        nextArrow: `<i class="fa fa-angle-right right-arrow arrows" aria-hidden="true"></i>`,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});

$(document).ready(function () {
    $('.testimonial-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        prevArrow: `<i class="fa fa-arrow-left left-arrow arrows test-arrows" aria-hidden="true"></i>`,
        nextArrow: `<i class="fa fa-arrow-right right-arrow arrows test-arrows" aria-hidden="true"></i>`,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});


$(document).ready(function () {
    $('.sales-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
    });

});



$(document).ready(function(){
    $('.autoplay').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
     

      
    });
  });