// Array to store Movie Title and Plot from API query
var quizQuestions = [];
MaxNumInQList = 4 ;

/* const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  } */
const getMovieQuestions = function() {
    const numQuestions = 10;
    const movieQuiz = [];
    quizQuestions.length = 0 ;
    // const MaxNumInQList = 4 ;

    // Select X number of movies from movieList array and add them to the movieQuiz array
    for(var i=0; i < numQuestions; i++) {
        movieQuiz.push(movieList[Math.floor(Math.random() * movieList.length)]);
    }
    // lets get 
    //  one correct pair (plot and title) 
    // and three incorrect titles
    // Provide plot and all answers to the user to select one of them 
    // 
    // select one random out of the number of questions we have selected
    // create an array of 4 

    // const MaxQs = 4;
    const SelectrandomOutOfMax = [];
    SelectrandomOutOfMax.length = 0 ; 
    while ( SelectrandomOutOfMax.length < MaxNumInQList )
     {
         currentStart=0;
         TempSelectrandomOutOf = Math.floor(Math.random() * movieList.length );
         // console.log("this is"+TempSelectrandomOutOf);
         if ( SelectrandomOutOfMax.indexOf(TempSelectrandomOutOf) == -1 ) { SelectrandomOutOfMax.push(TempSelectrandomOutOf) ;  }
         // SelectrandomOutOfMax.push(TempSelectrandomOutOf) ; 
         // console.log("another "+SelectrandomOutOfMax.length);    
     }
    
    console.log('new list');
    quizQuestions.length = 0 ; 
    for ( i = 0; ( i < MaxNumInQList ) ; i++) {
        queryURL = `https://www.omdbapi.com/?apikey=8acace67&t=${movieQuiz[i]}`;
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            if ( typeof response.Title === 'undefined' || ( quizQuestions.indexOf(response.title) !== -1 )  ) 
             { console.log(" some issue" + response.Title+" |"+response.Plot); getMovieQuestions() ; } 
            else 
             { // console.log(response.Title+" | "+response.Plot); 
               var objMovie = {
                Title: response.Title,
                Plot: response.Plot,
                };
               quizQuestions.push(objMovie);
               // console.log(objMovie.Title);
               if ( quizQuestions.length === i ) { 
                   for(j=0;j<quizQuestions.length;j++) { console.log(" hi there 1 " + j + " "+ quizQuestions[j].Title) ; } 
                   listit(); }    
            }
        });
    }
};

 listit = function(){

    // get a random pair out of shortlist 
    var SelectedHonor = Math.floor(Math.random() * MaxNumInQList);
    console.log(" at end " + " | " + SelectedHonor );
    if ( quizQuestions[SelectedHonor]  !== undefined ) {
    // console.log(" at end " + " | " + SelectedHonor + " | " + quizQuestions[SelectedHonor].Title + " | "+quizQuestions[SelectedHonor].Plot);
    // console.log(" here finally " + MaxNumInQList + " " + SelectedHonor + " " + quizQuestions[SelectrandomOutOfMax[0]].mytitle+"|" + quizQuestions[SelectrandomOutOfMax[1]].mytitle + "|" + quizQuestions[SelectrandomOutOfMax[2]].mytitle + "|" + quizQuestions[SelectrandomOutOfMax[3]].mytitle );
    // setup the plot 
    var ChooseButton = document.createElement("TEXT");     // Create a buttonelement
    TempButtonId =  'MyText' ; 
    var targetElement = document.getElementById(TempButtonId) ; 

    if ( targetElement !== null ) {
        // element does exist lets delete it 
        targetElement.parentNode.removeChild(targetElement);
    }
    ChooseButton.id = TempButtonId ; 
    var t = document.createTextNode(" "+quizQuestions[SelectedHonor].Plot+" ") ;   // Create a text node
    ChooseButton.appendChild(t);                                          // Append the text to <p>
    document.getElementById("movieScreen").appendChild(ChooseButton);           // Append <p> to <div> with id="myDIV" 
    // end of setting up the plot
    console.log("here " + quizQuestions[0].Title);    
    for(ButtonsInd=0; ButtonsInd < MaxNumInQList ; ButtonsInd++) {
        TempButtonId =  'SelectThis'+ ButtonsInd ; 
        targetElement = document.getElementById(TempButtonId) ; 
        if ( targetElement !== null ) {
            // element does exist lets delete it 
            targetElement.parentNode.removeChild(targetElement);
        }
        
        ChooseButton = document.createElement("BUTTON");     // Create a buttonelement
        ChooseButton.setAttribute("onclick","OnSelection(this)");

        ChooseButton.id =TempButtonId ; 
        t = document.createTextNode(" "+quizQuestions[ButtonsInd].Title+" ") ;   // Create a text node
        ChooseButton.appendChild(t);                                          // Append the text to <p>
        document.getElementById("answers").prepend(ChooseButton);           // Append <p> to <div> with id="myDIV" 
        console.log("here " + quizQuestions[ButtonsInd].Title);      

    } }
};
//Prep = function() { getMovieQuestions();  listit();};
const OnSelection = function(link) {
    var tempText = link.innerText ; 
    // alert("hi there "+tempText);
    checkIfItMatches(tempText);
};

const checkIfItMatches = function(thistext) {
    TempButtonId =  'MyText' ; 
    var TexttargetElement = document.getElementById(TempButtonId).innerText ; 

    // alert(TexttargetElement);
    found = false ; 
    located = -1 ;  
    for(i=0;i<MaxNumInQList;i++) { 
        if ( ( thistext === quizQuestions[i].Title ) && ( TexttargetElement === quizQuestions[i].Plot  ) )  { found = true ; located = i ; } 
    }
    if ( found ) { alert(" keep it up ! you are right about title " + thistext + " is indeed " + quizQuestions[located].Plot  );} else {alert("better luck next time");} 

};
