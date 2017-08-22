$(document).ready(function () {
  /*  Foundation Init    */
  $(document).foundation()
  /*  carousel Init    */
  $('#carousel').carouFredSel({
    width: '670',
    pagination: '.pagination',
    responsive: true,
    scroll: {
      fx: 'fade'
    },
    items: {
      visible: 1,
      width: '670'
    },
    swipe: {
      onMouse: true,
      onTouch: true
    }
  })
  /*    Mean navigation menu scroll to    */
  $('#mean_nav ul li a').click(function (e) {
    e.preventDefault()
    scrollTo($(this).attr('href'), 900, 'easeInOutCubic')
  })
  /*    Back to top button    */
  const backTop = $('#backTop')
  backTop.click(function (e) {
    e.preventDefault()
    scrollTo(0, 900, 'easeInOutCubic')
  })

  function scrollTo (target, speed, ease) {
    $(window).scrollTo(target, speed, {
      easing: ease
    })
  }

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 749) {
      backTop.stop().animate({
        opacity: 1
      }, 250)
    } else {
      backTop.stop().animate({
        opacity: 0
      }, 250)
    }
  })
})
