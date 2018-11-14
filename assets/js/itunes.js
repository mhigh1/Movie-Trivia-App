const findMovie = function(event) {
      event.preventDefault();
      const movieName = $(this).data('proj');
           $('.moviebutton').val('');
        const queryURL = `https://itunes.apple.com/search?media=movie&entity=movie&term=${movieName}&attribute=featureFilmTerm`;
          $.ajax({
          url: queryURL,
          //dataType: "html",
          method: 'GET'
          }).then(function(response){  
            response = JSON.parse(response);
            const movie = response.results[0];
            //const shortDescription = movie.shortDescription;
            const movieDescription = movie.longDescription;
            const trackName = movie.trackName;
            const artistName = movie.artistName;
            const previewUrl = movie.previewUrl;
            console.log(typeof response);
            console.log(response);
         // $('#stock-view').text(movieDescription);
            const movieInfo = $("<div>");
            movieInfo.append("<h2>"+trackName+"</h2>")
            const trailer = $("<video>",{"src":previewUrl,"type":"video/x-m4v","controls":true});
            
            movieInfo.append(trailer);
            movieInfo.append("<h3>"+"Director:  "+ artistName+"</h3>")
            movieInfo.append("<p>"+movieDescription+"</p>")
            $('#stock-view').html(movieInfo);
         
      })
    }
    $('.moviebutton').on('click', findMovie);
});
