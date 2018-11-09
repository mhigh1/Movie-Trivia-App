$('#num').on('click', function (e) {
    e.preventDefault();
    let movieQuiz = [];
    const numQuestions = parseInt($('#numQuestions').val());

    for (let i = 0; i < numQuestions; i++) {
        movieQuiz.push(movieList[Math.floor(Math.random() * movieList.length)]);
    }

    for (let i = 0; i < movieQuiz.length; i++) {
        const queryURL = `http://www.omdbapi.com/?apikey=8acace67&t=${movieQuiz[i]}`;
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            console.log(response);
        })
    }
});