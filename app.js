$(document).ready(function() {
    $('#titleRatingForm').on('submit', function(e) {
      e.preventDefault(); // Prevent the form from submitting in the traditional way
      
      const title = $('#title').val();
      const rating = $('#rating').val();
      
      // Append the title and rating to the DOM
      $('#itemsList').append(
        `<div class="item">
          <p>Title: ${title}, Rating: ${rating}</p>
          <button class="remove-btn btn btn-danger">Remove</button>
        </div>`
      );
      
      // Clear the input fields after submission
      $('#title').val('');
      $('#rating').val('');
    });
    
    // Event delegation to handle click event on dynamically created remove buttons
    $('#itemsList').on('click', '.remove-btn', function() {
      $(this).parent().remove(); // Remove the parent div of the clicked remove button
    });
  });
  $(document).ready(function() {
    $('#titleRatingForm').on('submit', function(e) {
      e.preventDefault();
  
      const title = $('#title').val();
      const rating = parseInt($('#rating').val(), 10);
  
      // Validation for title and rating
      if(title.length < 2) {
        alert('Title must have at least 2 characters.');
        return;
      }
      if(rating < 0 || rating > 10) {
        alert('Rating must be between 0 and 10.');
        return;
      }
  
      // Append the title and rating to the DOM
      $('#itemsList').append(
        `<div class="item" data-title="${title.toLowerCase()}" data-rating="${rating}">
          <p>Title: ${title}, Rating: ${rating}</p>
          <button class="remove-btn btn btn-danger">Remove</button>
        </div>`
      );
  
      $('#title').val('');
      $('#rating').val('');
    });
  
    // Remove item
    $('#itemsList').on('click', '.remove-btn', function() {
      $(this).parent().remove();
    });
  
    // Sort by title
    $('#sortByTitle').click(function() {
      sortItems('title');
    });
  
    // Sort by rating
    $('#sortByRating').click(function() {
      sortItems('rating');
    });
  
    function sortItems(type) {
      let items = $('#itemsList .item').get();
      items.sort(function(a, b) {
        let valueA, valueB;
        if (type === 'title') {
          valueA = $(a).data('title');
          valueB = $(b).data('title');
          return valueA.localeCompare(valueB);
        } else { // rating
          valueA = parseInt($(a).data('rating'), 10);
          valueB = parseInt($(b).data('rating'), 10);
          return valueA - valueB;
        }
      });
  
      $.each(items, function(idx, itm) { $('#itemsList').append(itm); });
    }
  });
 
  $(document).ready(function() {
    $('body').css('background', 'linear-gradient(to right, #8a3093, #a044f0, #6a30ff)');
  });
