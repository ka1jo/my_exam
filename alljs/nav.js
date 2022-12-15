$(function() {
    $('#navbar.navbar-right ul li a').click(function() {
      //clear active status of any parent LI's
      $('#navbar.navbar-right ul li').removeClass('active');
  
      // store id of new active sub-nav
      var currSub = $(this).parent();
      currSub.addClass('active')
      var id = currSub.attr('id');
  
      // clear active status of any sub-nav list
      $('#subnavbar ul.navbar-nav').removeClass('active');
  
      // set selected sub-nav to active
      $('.' + id).addClass('active');
  
      console.log($('.' + id).attr('class'));
  
    });
  
  });