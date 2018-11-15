// Array to store Movie Title and Plot from API query
const quizQuestions = [];

const getMovieQuestions = function() {
    const numQuestions = 10;
    const movieQuiz = [];

    // Select X number of movies from movieList array and add them to the movieQuiz array
    for(let i=0; i < numQuestions; i++) {
        movieQuiz.push(movieList[Math.floor(Math.random() * movieList.length)]);
    }

    // Foreach movie in the movieQuiz array, query the OMDB api and store the results in quizQuestion array as an object
    for(let i=0; i < movieQuiz.length; i++) {
        let endpoint = encodeURI(`https://www.omdbapi.com/?apikey=8acace67&t=${movieQuiz[i]}`);

        $.get(endpoint, function(response) {

            let objMovie = {
                mytitle: response.Title,
                myplot: response.Plot
            };
            quizQuestions.push(objMovie);
            console.log(quizQuestions[0].myplot); 
        });
    }
}
