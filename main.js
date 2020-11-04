const instag =document.querySelector("#insta");
const whatspp =document.querySelector("#whatsp");
const face =document.querySelector("#fbook");
const college =document.querySelector("#collegeinn");
const twitt =document.querySelector("#twit");
const interest =document.querySelector("#pint");
const job =document.querySelector("#linkden");
const eemail =document.querySelector("#mail");
const google = document.querySelector("#goog");
const searchForm = document.querySelector("#search-form");
const wikip =document.querySelector("#wiki");
const youtubewe = document.querySelector("#youtubeweb");
const searchFormInput = searchForm.querySelector("input");
const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");
scrolldown();
function scrolldown(){
messageBody = document.getElementById("messageBody");
var xh =  messageBody.scrollHeight;
messageBody.scrollTo(0, xh);
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("outgoing-chats");
  chatContainer1.classList.add("outgoing-chats-msg");
  const chatBox1 = document.createElement("p");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function addBotText(text) {
const chatContainer = document.createElement("div");
chatContainer.classList.add("received-chats");
const chatContainer2 = document.createElement("div");
chatContainer2.classList.add("received-msg");
const chatContainer3 =document.createElement("div");
chatContainer3.classList.add("received-msg-inbox");
const chatContainer4 = document.createElement("p");
const chatText = document.createTextNode(text);
chatContainer4.appendChild(chatText);
chatContainer3.appendChild(chatContainer4);
chatContainer2.appendChild(chatContainer3);
chatContainer.appendChild(chatContainer2);
return chatContainer;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();

    if (message.includes('hi')) {
      speech.text = "Hey";
    }
    else if (message.includes('hey')) {
      speech.text="Hello!";
    }
    else if (message.includes('hello')) {
      speech.text="Hey There !!!";
    }
    else if (message.includes('namaste')) {
      speech.text="Namaste";
    }
    else if (message.includes('how are you')) {
      speech.text="I am fine. How are You?";
    }
    else if (message.includes('who are you')) {
      speech.text="I am Your Web Chat Bot !";
    }

    else if (message.includes('fine')) {
      speech.text = "Nice to hear that. How can I assist you today?";
    }
    else if (message.includes('love you')) {
      speech.text = "Love You Too !";
    }

    else if (message.includes('weather')) {
      speech.text="Getting weather for you";
      searchForm.submit();
    }
    else if (message.includes('whats up')) {
      speech.text = "Nothing Much";
    }

    else if (message.includes('what are you doing')) {
      speech.text = "I am about to go to sleep";
    }

    else if (message.includes('what is your name')) {
      speech.text = "I Dont Have a Name";
    }

    else if (message.includes('who made you')) {
      speech.text = "SRIVATHSA K";
    }
    else if (message.includes('who created you')) {
      speech.text="SRIVATHSA K";
    }
    else if (message.includes('youtube')) {
      speech.text="Opening youtube Website";
      youtubewe.submit();
    }
    else if (message.includes('wikipedia')) {
      speech.text="Opening wikipedia";
      wikip.submit();
    }
    else if(message.includes('college innovators')){
      speech.text="Opening college innovators website";
      college.submit();
    }
    else if (message.includes('open')) {
     if(message.includes('instagram')){
        speech.text="Opening instagram";
        instag.submit();
      }
      else if(message.includes('whatsapp')){
        speech.text="Opening whatsapp web";
        whatspp.submit();
      }
      else if(message.includes('facebook')){
        speech.text="Opening facebook";
        face.submit();
      }
      else if(message.includes('twitter')){
        speech.text="Opening twitter";
        twitt.submit();
      }
      else if(message.includes('pinterest')){
        speech.text="Opening pinterest";
        interest.submit();
      }
      else if(message.includes('linkedin')){
        speech.text="Opening linkedin.com";
        job.submit();
      }
      else if(message.includes('gmail')){
        speech.text="Opening gmail.com";
        eemail.submit();
      }
      else if(message.includes('college innovators')){
        speech.text="Opening college innovators website";
        college.submit();
      }
      else if (message.includes('youtube')) {
        speech.text="Opening youtube Website";
        youtubewe.submit();
      }
      else {
        speech.text="searching"
        searchForm.submit();
        }
    }
    else if(message.includes('instagram')){
      speech.text="Opening instagram";
      instag.submit();
    }
    else if(message.includes('whatsapp')){
      speech.text="Opening whatsapp web";
      whatspp.submit();
    }
    else if(message.includes('facebook')){
      speech.text="Opening facebook";
      face.submit();
    }
    else if(message.includes('twitter')){
      speech.text="Opening twitter";
      twitt.submit();
    }
    else if(message.includes('pinterest')){
      speech.text="Opening pinterest";
      interest.submit();
    }
    else if(message.includes('linkedin')){
      speech.text="Opening linkedin.com";
      job.submit();
    }
    else if(message.includes('gmail')){
      speech.text="Opening gmail.com";
      eemail.submit();
    }
    else if (message.includes('lunch')) {
      speech.text = "Yet to have lunch. And you?";
    }
    else if (message.includes('breakfast')) {
      speech.text = "I dont eat breakfast. And you?";
    }
    else if (message.includes('dinner')) {
      speech.text = "Not Yet . And you?";
    }
    else if (message.includes('tea')) {
      speech.text = "I dont drink Tea. And you?";
    }
    else if (message.includes('coffee')) {
      speech.text = "I dont drink coffee. And you?";
    }
    else if (message.includes('snacks')) {
      speech.text = "I dont eat snacks.  And You?";
    }
    else if (message.includes('search')) {
      speech.text = "What should I search in the Web";
    }
    else if (message.includes('thank you')) {
      speech.text = "You are Welcome";
    }
    else if (message.includes('good morning')) {
      speech.text = "Good Morning";
    }
    else if (message.includes('good afternoon')) {
      speech.text = "Good Afternoon";
    }
    else if (message.includes('good evening')) {
      speech.text = "Good Evening";
    }
    else if (message.includes('good night')) {
      speech.text = "Good Night";
    }
    else if (message.includes('bye')) {
      speech.text = "Bye Bye";
    }
    else if (message.includes('see you later')) {
      speech.text = "Ok. See you later. Bye";
    }
    else if (message.includes('good bye')) {
      speech.text = "Bye..";
    }
    else if (message.includes('take care')) {
      speech.text = "You Too Take Care";
    }
    else if (message.includes('sleep')) {
      speech.text = "I wont Sleep Now";
    }
    else if (message.includes('joke')) {
      speech.text = "What Joke ?";
    }
    else if (message.includes('comedy')) {
      speech.text = "What comedy ?";
    }
    else if (message.includes('fuck')) {
      speech.text = "Dont use bad words !!!";
    }
    else if (message.includes('porn')) {
      speech.text = "No , I dont know that";
    }
    else if (message.includes('sex')) {
      speech.text = "No , I dont know that";
    }
    else if (message.includes('music')) {
      speech.text="I cannot Play Music Right Now";
    }
    else if (message.includes('yes')) {
      speech.text="Okay. Nice";
    }
    else if (message.includes('where are you')) {
      speech.text="I am inside the web";
    }
    else if (message.includes('chat')) {
      speech.text="Okay sure..";
    }
    else if (message.includes('talk')) {
      speech.text="Okay Lets talk..";
    }
    else if (message.includes('you are bad')) {
      speech.text="Oh.. I am Sorry..";
    }
    else{
        speech.text="searching the web"
        searchForm.submit();
    }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
    scrolldown();
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  searchFormInput.value=transcript;
  element.appendChild(addHumanText(transcript));
  scrolldown();
  var lowtrans = transcript.toLowerCase();
  botVoice(lowtrans);
};

voice.addEventListener('click', () =>{
  recorder.start();
});
