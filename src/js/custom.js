$(document).ready(function() {
    //call slick slider
    $('.case-studies').slick();

    //styling for custom accordion
    //use jquery to set initial display none for accessibility if no JS
    $('.case-study__section p').css('display', 'none');
    $('.case-study__section:first-child').addClass('active');
    $('.case-study__section:first-child').find('p').slideToggle();
    //create click function for accordion
    $('.case-study__section h2').on('click', function() {
      //check if accordion-item is already active
      if ($(this).parent().is('.active')) {
        //do nothing already active
      } else {
        // close any active accordion items
        $('.active').find('p').slideToggle();
        //remove class active from active after closing
        $('.active').toggleClass('active');
        //add class active to accordion-item for styling
        $(this).parent().addClass('active');
        //slide accordion open
        $(this).siblings('.case-study__section p').slideToggle();
      }
    });
  });