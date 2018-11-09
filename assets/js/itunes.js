 const findMovie = function(event) {
      event.preventDefault();
      const movieName = $(this).data('proj');
           $('.moviebutton').val('');
        const queryURL = `https://itunes.apple.com/search?media=movie&entity=movie&term=${movieName}`;
          $.ajax({
          url: queryURL,
          method: 'GET'
          }).then(function(response){  
          $('#stock-view').text(response);
         
      })
    }
    $('.moviebutton').on('click', findMovie);
});
