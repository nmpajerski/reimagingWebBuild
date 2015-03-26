

$('.gridly').gridly({
  base: 70, // px 
  gutter: 10, // px
  columns: 12
});

 /* this should take care of the delete */
 $(document).on("click", ".gridly .delete", function(event) {
    var $this;
    event.preventDefault();
    event.stopPropagation();
    $this = $(this);
    $this.closest('.brick').remove();
    return $('.gridly').gridly('layout');
  });

 $(document).on("click touchend", ".gridly .brick", function(event) {
    var $this, size;
    event.preventDefault();
    event.stopPropagation();
    $this = $(this);
    $this.toggleClass('small');
    $this.toggleClass('large');
    if ($this.hasClass('small')) {
      size = 150;
    }
    if ($this.hasClass('large')) {
      size = 470;
    }

  $this.data('width', size);
  $this.data('height', size);

  return $('.gridly').gridly('layout');
});