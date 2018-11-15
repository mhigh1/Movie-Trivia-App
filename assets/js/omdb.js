// Array to store Movie Title and Plot from API query
const quizQuestions = [];

const getMovieQuestions = function() {
    const numQuestions = 10;
    const movieQuiz = [];
    const MaxNumInQList = 5 

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
    // lets get 
    //  one correct pair (plot and title) 
    // and three incorrect titles
    // Provide plot and all answers to the user to select one of them 
    // 
    // select one random out of the number of questions we have selected
    // create an array of 4 
    const MaxQs = 4;
    const SelectrandomOutOfMax = [];
    while ( SelectrandomOutOfMax.length < MaxQs )
     {
         currentStart=0;
         TempSelectrandomOutOf = Math.floor(Math.random() * numQuestions);
         console.log("this is"+TempSelectrandomOutOf);
         if ( SelectrandomOutOfMax.indexOf(TempSelectrandomOutOf) == -1 ) { SelectrandomOutOfMax.push(TempSelectrandomOutOf) ;  }
         // SelectrandomOutOfMax.push(TempSelectrandomOutOf) ; 
         console.log("another "+SelectrandomOutOfMax.length);    
     }
    // for(i=0;i<10;i++) { var kk=Math.floor(Math.random() * numQuestions)  ; console.log(kk);}
    /* for ( i=0; SelectrandomOutOfMax.length < MaxQs ; i++ )
     {
       TempSelectrandomOutOf = Math.floor(Math.random() * numQuestions);
       alert(" this is random below " + numQuestions +" " + Math.floor(Math.random() * numQuestions) +  " " + SelectrandomOutOfMax.length ) ;
       console.log(TempSelectrandomOutOf+ " " + numQuestions+ " " + SelectrandomOutOfMax.length) ;
       for(var innerLoop=0;( ( innerLoop !== 0 ) || ( SelectrandomOutOfMax[innerLoop] !== TempSelectrandomOutOf  ) ) && ( innerLoop <= SelectrandomOutOfMax.length );innerLoop++) 
        { 
            console.log( "First " + ( innerLoop !== 0 ) + "Second " + ( innerLoop < SelectrandomOutOfMax.length ) +"Third " + ( SelectrandomOutOfMax[innerLoop] !== TempSelectrandomOutOf )+ " checking " + SelectrandomOutOfMax[innerLoop] + " " + SelectrandomOutOfMax.length);
        }
    
       SelectrandomOutOfMax[SelectrandomOutOfMax.length] = TempSelectrandomOutOf ; 
     };

     if ( SelectrandomOutOfMax[innerLoop] !== TempSelectrandomOutOf ) { SelectrandomOutOfMax[SelectrandomOutOfMax.length] = TempSelectrandomOutOf } ; 
     alert(" here " + SelectrandomOutOfMax[0]+" " + SelectrandomOutOfMax[1]+" " + SelectrandomOutOfMax[2]+" " + SelectrandomOutOfMax[3]); */
       
       
    
     // alert(" here finally " + SelectrandomOutOfMax[0]+" " + SelectrandomOutOfMax[1]+" " + SelectrandomOutOfMax[2]+" " + SelectrandomOutOfMax[3]);
    var para = document.createElement("BUTTON");     // Create a <p> element
    var t = document.createTextNode("This is a Button My dear ") ;   // Create a text node
    para.appendChild(t);                                          // Append the text to <p>
    document.getElementById("answers").appendChild(para);           // Append <p> to <div> with id="myDIV" 
}
