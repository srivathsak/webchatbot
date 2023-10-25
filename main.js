var userInput = document.getElementById("userInput");
var sendButton = document.getElementById("sendButton");
scrolldown();
function scrolldown(){
messageBody = document.getElementById("messageBody");
var xh =  messageBody.scrollHeight;
messageBody.scrollTo(0, xh);
}
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

function apiresponse(message) {
    fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer API_KEY"
            },
            body: JSON.stringify({
              messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: message }
            ],
            model: "gpt-3.5-turbo"
            })
        })
        .then(response => response.json())
        .then(data => {
            var element = document.getElementById("container");
            console.log("API Response:", data);
            var choice = data.choices[0];
            var message = choice.message;
            var content = message.content;
            element.appendChild(addBotText(content));
            scrolldown();
        })
        .catch(error => {
            console.error("Error: " + error);
            var element = document.getElementById("container");
            element.appendChild(addBotText(error));
     });
}


sendButton.addEventListener("click", function() {
  var userInputValue = userInput.value;
  var element = document.getElementById("container");
  userInput.value = "";
  scrolldown();
  if (userInputValue === "") {
            alert("Please enter something.");
        } else {
          element.appendChild(addHumanText(userInputValue));
          scrolldown();
          apiresponse(userInputValue);
        }
});



userInput.addEventListener("keydown", function(event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode === 13) {
    event.preventDefault(); // Prevent the Enter key from adding a new line
    sendButton.click(); // Trigger the click event of the "Send" button
  }
});



  
