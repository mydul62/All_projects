function toggleMenu() {
  document.querySelector('.mobile-menu').classList.toggle('show');
}
$(document).ready(function() {
  $('.search-temp').on('click', function(event) {
      event.preventDefault();
      $('.search-templete').toggle();
  });

  // Optionally, close the template if clicked outside
  $(document).click(function(event) {
      if (!$(event.target).closest('.search-temp, .search-templete').length) {
          $('.search-templete').hide();
      }
  });
});


$(document).ready(function() {
  // Close the sidebar
  $('.close-btn').on('click', function() {
      $('#sidebar').hide(); // Hide sidebar when close button is clicked
  });

  // Toggle submenu on menu item click
  $('.menu-item > span.arrow').on('click', function(e) {
      e.stopPropagation(); // Prevent the click from bubbling up

      // Close any other open submenus
      $('.submenu.show').not($(this).parent().find('.submenu')).removeClass('show'); 

      // Toggle the clicked submenu
      $(this).parent().find('.submenu').toggleClass('show'); 
  });
});

