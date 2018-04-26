$('.novelties-carousel').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: $('.nowelty-prev'),
  nextArrow: $('.nowelty-next'),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.advantages-carousel').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: $('.advantages-prev'),
  nextArrow: $('.advantages-next'),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.article-carousel').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.article-prev'),
  nextArrow: $('.article-next')
});

$('.shares-carousel').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.shares-prev'),
  nextArrow: $('.shares-next')
});

$('#clock').countdown('2020/10/10', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div><span>%d</span> дня</div> '
    + '<div><span>%H</span> часов</div> '
    + '<div><span>%M</span> минут</div> '
    + '<div><span>%S</span> секунд</div>'));
});