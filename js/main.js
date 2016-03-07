---
layout: null
---
$(document).ready(function () {
  $('a.blog-button').click(function (e) {
    currentWidth = $('.panel-cover').width()

    $(".projects-page").hide()
    $(".main-post-list").show()

    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      //$('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  $('a.projects-button').click(function (e) {
    currentWidth = $('.panel-cover').width()

    $(".main-post-list").hide()
    $(".projects-page").show()

    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      //$('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})
