const button1 = document.getElementById('button-1');
button1.addEventListener('click', function(event) {
    event.preventDefault();
    const url = "https://api.goprogram.ai/inspiration";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let inspiration = "<h3>Inspiration</h3>";
            inspiration += "<p>One of out biggest interests is to find inspiration from a lot of good people in this world. ";
            inspiration += "This is a quote from <strong>" + json.author + "</strong>. ";
            inspiration += "You can click this button every hour to get a new random inspirational quote.</p>"
            inspiration += "<p><em>" + json.quote + "</em></p>";
            document.getElementById('response1').innerHTML = inspiration;
        });
});

const button2 = document.getElementById('button-2');
button2.addEventListener('click', function(event) {
    event.preventDefault();
    const url = "https://asli-fun-fact-api.herokuapp.com/";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let funFacts = "<h3>Learn New Things</h3>";
            funFacts += "<p>We love learning new things. One of us is obsessed with business news (Mario) and the other one with Mexican Politics (Diana). ";
            funFacts += "Because of that, we have this app with random fun facts. Click the button and a new random fun fact wll be created!</p>";
            funFacts += "<p>Did you know that...</p>";
            funFacts += "<p><strong>" + json.data.fact + "</strong></p>";
            document.getElementById('response2').innerHTML = funFacts;
        });
});

const button3 = document.getElementById('button-3');
button3.addEventListener('click', function(event) {
    event.preventDefault();
    let textToTranslate = document.getElementById('languages').value;
    let language = document.getElementById('languages-select').value;
    let url = "https://api.funtranslations.com/translate/" + language + ".json?text=" + textToTranslate;
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let translation = "<h3>Languages</h3>";
            translation += "<p><em>" + json.contents.translated + "</em></p>";
            translation += "<p>You guessed it right! We love learning new languages! Mario's life goal is to learn Mandarin. ";
            translation += "As a result, we have this app that translates stuff to fun languages. Usage is limited to about 5 times per hour. Use it wisely!</p>";
            document.getElementById('response3').innerHTML = translation;
        });
});
    