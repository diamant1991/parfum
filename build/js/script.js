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

$('.toggle-sidebar').click(function(event) {
  var sidebar = $('#sidebar')
  if(sidebar.is(':hidden')){
    $(this).addClass('active')
    sidebar.slideDown(250)
  }
  else{
    $(this).removeClass('active')
    sidebar.slideUp(250)
  }
});

$('.thumbnail').click(function(e) {
  e.preventDefault()
  $('.card__thumb__item').removeClass('active')
  $(this).closest('.card__thumb__item').addClass('active')
  var img = $(this).attr('href');
  var launcherImg = $('.card-big-img')
  launcherImg.attr('src', img);
});

$('.tab-link').click(function (e) {
  e.preventDefault();
  var tab = $(this).attr('data-tab');
  var tabContent = $('.tab-content')
  $('.tab-link').removeClass('active');
  $(this).addClass('active');
  tabContent.removeClass('active');
  $('' + tab).addClass('active');
});