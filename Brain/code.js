const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const content2 = document.querySelector('.content2');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
var shoulRec = true

var userName = localStorage.getItem('userName')
var userAge = localStorage.getItem('userAge')


function myFunction() {
        recognition.start()
 }
var interval = setInterval(myFunction, 2000);

btn.addEventListener('click', () => {
    if(shoulRec === false){
        shoulRec = true
    }
    else{
        shoulRec = false
    }
})


function wishMe() {
    var day = new Date();
    var hr = day.getHours();
    if(userName == null){
        speak("Please enter your name?")
        var nb = document.getElementById("nameBox")
        var nbb = document.getElementById("nameBoxButton")
        nb.style.display = 'block'
        nbb.style.display = 'block'
        nbb.addEventListener('click',function(event){
            localStorage.setItem("userName",nb.value)
            location.reload();
        })
    }
    else{
        if (hr >= 0 && hr < 12) {
            speak("Good Morning"+userName);
        }
    
        else if (hr == 12) { 
            speak("Good noon"+userName);
        }
    
        else if (hr > 12 && hr <= 17) {
            speak("Good Afternoon"+userName);
        }
    
        else  if (hr > 17 && hr <= 19) {
            speak("Good Evening"+userName);
        }
        else {
            speak(userName+",I think this is the time for you to have rest");
        }
        console.log("success")
        // localStorage.removeItem("userName")
    }
    
}

window.addEventListener('load', () => {

    speak("Activating Spark");
    speak("Going online");
    wishMe();
})

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
    console.log(sentence)
}

recognition.onresult = (event) => {
    const current = event.resultIndex;
    console.log(event.resultIndex)
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

function speakThis(message) {
    if (shoulRec === true&&userName!== null){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I did not understand what you said please try again";
    function userQuery(query,answer,displayAnswer=answer) {
        if (message.includes(query)) {
            const finalText = answer;
            content2.textContent = displayAnswer;
            speech.text = finalText;
        }
    }
    function ansQuery(answer,displayAnswer=answer) {
            const finalText = answer;
            content2.textContent = displayAnswer;
            speech.text = finalText;
    }
    
    userQuery("hello",'hello')
    userQuery("hi",'hello')
    userQuery("hey",'hello')
    userQuery("how are you",'I am fine what about you ?')
    userQuery("am fine","It sounds melodius")
    userQuery("good morning",`Good morning ${userName} tell me what should i do`)
    userQuery("good noon",`Wishing a very good noon to you ${userName}`)
    userQuery("good after-noon",`Good afternoon ${userName} and let's get to the point`)
    userQuery("good evening",`good evening ${userName}`)

    userQuery("your name",'I am Spark',"I am S.P.A.R.K.")
    userQuery("introduce yourself",'I am Spark. Smart Personalized Artificial Resource Keeper. I am good at searching your queries and choosing suitable platforms according to your queries. Thank you',"I am S.P.A.R.K.. Smart Personalized Artificial Resource Keeper. I am good at searching your queries and choosing suitable platforms according to your queries. Thank you")
    userQuery("who created you",'My creators are, Dev Raj, Taiyaba, Tanvi, Chestha and Abhinav')

    userQuery("your gender","I am a A.I. model and i don't have any gender.")
    userQuery("your age",'I was created in June,2023 so I am probably one or two week older')

    userQuery("what can you do","There's a lot I can do")

    userQuery("thank you","This is my duty to help you there was no need for thanks but still your welcome")
    userQuery("thank","This is my duty to help you there was no need for thanks but still your welcome")
    userQuery("thanks","This is my duty to help you there was no need for thanks but still your welcome")

    userQuery("your capabilities","My capability are not much but they can satisfy you atleast")
    userQuery("your capability","My capability is not much but they can satisfy you atleast")
    userQuery("your speciality","I am good at searching your queries, understanding suitable platforms for you queries and a little good at conversation")
    userQuery("your purpose","I am good at searching your queries, understanding suitable platforms for you queries and a little good at conversation")
    
    // userQuery("tum kaise ho","I am all good and wishing same for you.")
    // userQuery("tum tum ho","As an AI model,I am not able wonder around but, I am always there for you.")
    // userQuery("tumhara naam","I am SPARK")
    
    if (message.includes("kaise")&&message.includes("ho")||message.includes("kya")&&message.includes("hal")&&message.includes("hai")){
        ansQuery("I am all good and wishing same for you.")
    }
    if (message.includes("tum")&&message.includes("kahan")){
        ansQuery("I am all good and wishing same for you.")
    }

    if(!message.includes("change")&&message.includes("my")&&message.includes("name")||message.includes("mera")&&message.includes("naam")){
        if(userName == null){
           ansQuery("PLEASE ENTER YOUR NAME") 
           speak("Actually I don't know your name") 
           var nb = document.getElementById("nameBox")
            var nbb = document.getElementById("nameBoxButton")
            nb.style.display = 'block'
            nbb.style.display = 'block'
            nbb.addEventListener('click',function(event){
                localStorage.setItem("userName",nb.value)
                ansQuery("Now I know you "+userName) 
                nb.style.display = 'none'
                nbb.style.display = 'none'
            }) 
        }
        else{
           ansQuery("Your name is "+userName) 
        }
    }
    if(message.includes("change")&&message.includes("my")&&message.includes("name")){
           ansQuery("PLEASE ENTER YOUR NAME") 
           speak("Actually I don't know your name") 
           var nb = document.getElementById("nameBox")
            var nbb = document.getElementById("nameBoxButton")
            nb.style.display = 'block'
            nbb.style.display = 'block'
            nbb.addEventListener('click',function(event){
                localStorage.setItem("userName",nb.value)
                ansQuery("Now I know you as "+userName)
                nb.style.display = 'none'
                nbb.style.display = 'none'
            }) 
    }
    if(message.includes("are")&&message.includes("old")&&message.includes("you")){
        ansQuery('one or two weeks old')
    }
    
    if(message.includes("what is")&&!message.includes("my")&&!message.includes("your")||message.includes("what's")&&!message.includes("my")&&!message.includes("your")||message.includes("what are")&&!message.includes("your")||message.includes("search")&&!message.includes("how to")||message.includes("image")||message.includes("text")||message.includes("show")||message.includes("who")&&!message.includes("you")||message.includes("where") && !message.includes("time")||message.includes("how")&&!message.includes("to")&&!message.includes("you")&&!message.includes("your")||message.includes("khojo")||message.includes("dikhao"))
    {
        var updatedQuery = message.replace("", "+")
        updatedQuery = message.replace("search", "")
        updatedQuery = message.replace("show", "")
        window.open(`https://www.google.com/search?q=${updatedQuery}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }
    if(message.includes("how to")||message.includes("play")&&!message.includes("games"))
    {
        var string = message.replace("play", "")
        window.open(`https://www.youtube.com/results?search_query=${string}`, "_blank");
        const finalText = "I found some videos according to " + message;
        speech.text = finalText;
    }
    else if(message.includes("open")&&message.includes("youtube")||message.includes("kholo")&&message.includes("youtube"))
    {
        window.open('https://www.youtube.com');
        ansQuery("Launching YouTUbe")
    }
    else if(message.includes("open")&&message.includes("facebook")||message.includes("kholo")&&message.includes("facebook"))
    {
        window.open('https://www.facebook.com');
        ansQuery("Starting Facebook")
    }
    else if(message.includes("open")&&message.includes("whatsapp")||message.includes("kholo")&&message.includes("whatsapp"))
    {
        window.open('https://web.whatsapp.com');
        ansQuery("Opening Whatsapp")
    }
    else if(message.includes("open")&&message.includes("instagram")||message.includes("kholo")&&message.includes("instagram"))
    {
        window.open('https://www.instagram.com/');
        ansQuery("Opening Whatsapp")
    }
    else if(message.includes("open")&&message.includes("google")||message.includes("kholo")&&message.includes("google"))
    {
        window.open('https://www.google.com/');
        ansQuery("Opening Whatsapp")
    }
    else if(message.includes("open")&&message.includes("twitter")||message.includes("kholo")&&message.includes("twitter"))
    {
        window.open('https://www.twitter.com');
        ansQuery("Opening Twitter")
    }
    else if(message.includes("open")&&message.includes("wikipedia")||message.includes("kholo")&&message.includes("wikipedia"))
    {
        window.open('https://www.wikipedia.org/');
        ansQuery("Opening Whatsapp")
    }
    else if(message.includes("open")&&message.includes("linkedin")||message.includes("open")&&message.includes("linked")&&message.includes("in")||message.includes("kholo")&&message.includes("linkedin")||message.includes("kholo")&&message.includes("linked")&&message.includes("in"))
    {
        window.open('https://www.linkedin.com/');
        ansQuery("Opening linkedin")
    }
    else if(message.includes("open")&&message.includes("wordpress")||message.includes("open")&&message.includes("word")&&message.includes("press"))
    {
        window.open('https://wordpress.org/');
        ansQuery("Opening wordpress")
    }
    else if(message.includes("play")&&message.includes("games")||message.includes("play")&&message.includes("game"))
    {
        window.open('https://www.poki.com');
        ansQuery("This is the best game hub according to me ")
    }
    else if (message.includes("terminate")||message.includes("sleep")||message.includes("cut off")||message.includes("shut down")||message.includes("stop"))
    {
        shoulRec = false
        ansQuery("terminating myself, you can say wake up or hello if you want to call me")
    }
    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }
    else if (message.includes('repeat')) {
        var updatedQuery = message.replace("repeat","")
        ansQuery(updatedQuery,"Repeating : "+updatedQuery)
    }
    else if (message.includes('evaluate this')||message.includes('calculate')||message.includes('+')||message.includes('-')||message.includes('/')||message.includes('*')||message.includes('divided by')||message.includes('√')) {
        var string = message
        var expression = string.replace("evaluate this","").replace("calculate","").replace("divided by","/").replace("minus","-").replace("plus","+").replace("into","*")
        ansQuery("your answer is "+eval(expression))
    }
    else if (message.includes('open your calculator')) {
        window.open('Brain/calculator.html','_parent')
        ansQuery("Opening Spark calc")
    }
    else if (message.includes('open calculator')||message.includes("kholo")&&message.includes("calculator")) {
      window.open('calculator:///')
        ansQuery("Opening system calculator")
    }

    else if(!message.includes("open")&&!message.includes("you")&&!message.includes("hello")&&!message.includes("your")&&!message.includes("you")&&!message.includes("my")&&!message.includes("introduce yourself")&&!message.includes("what")&&!message.includes("who")&&!message.includes("why")&&!message.includes("how")&&!message.includes("search")&&!message.includes("name")&&!message.includes("tum")&&!message.includes("tumhara")&&!message.includes("chalao")&&!message.includes("kholo")&&!message.includes("mera")&&!message.includes("hello")&&!message.includes("youtube")){
        var updatedQuery = message.replace("", "+")
            updatedQuery = message.replace("search", "")
            window.open(`https://www.google.com/search?q=${updatedQuery}`, "_blank");
            ansQuery("This is what i found on internet related to your query")
    }
        
        
    speech.volume = 5;
    speech.pitch = 1;
    speech.rate = 1;
    
    window.speechSynthesis.speak(speech);
}
else if(message.includes("ok")||message.includes("spark")||message.includes("hello")||message.includes("wake up")){
    speak("Hello what can i do for you now")
    shoulRec = true
}
}
function showHelpBox(hlpBoxID){
    var hb = document.getElementById(hlpBoxID)
    hb.classList.toggle('hide');
}
