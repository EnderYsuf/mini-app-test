const tg = window.Telegram.WebApp;
tg.ready();

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const params = new URLSearchParams(window.location.search);
const userName = params.get("user_name");
const msgCount = params.get("msg_count");
/* arrays */
const greetings = [
  "Hello {name}",
  "Hi {name}",
  "Hey {name}",
  "Yo {name}",
  "Greetings {name}",
  "Welcome {name}",
  "Hiya {name}",
  "Heya {name}",
  "Good day {name}",
  "Howdy {name}",
  "Salutations {name}",
  "Hello there {name}",
  "Hey there {name}",
  "Hi there {name}",
  "Welcome back {name}",
  "Glad you're here {name}",
  "Cheers {name}",
  "Hello friend {name}",
  "Hey friend {name}",
  "Hi friend {name}",
  "Greetings friend {name}",
  "Good to see you {name}",
  "Nice to see you {name}",
  "Hello buddy {name}",
  "Hey buddy {name}",
  "Hi buddy {name}",
  "Yo buddy {name}",
  "Greetings buddy {name}",
  "Hello mate {name}",
  "Hey mate {name}",
  "Hi mate {name}",
  "Yo mate {name}",
  "Welcome friend {name}",
  "Hello pal {name}",
  "Hi pal {name}",
  "Hey pal {name}",
  "Yo pal {name}",
  "Greetings pal {name}",
  "Hiya friend {name}",
  "Hey there friend {name}",
  "Hello there buddy {name}",
  "Welcome mate {name}",
  "Greetings mate {name}",
  "Hi there buddy {name}",
  "Hey there mate {name}",
  "Hello pal {name}",
  "Hiya pal {name}",
  "Heya pal {name}",
  "Welcome buddy {name}",
  "Hello {name}, glad to see you",
  "Hi {name}, happy you're here",
  "Hey {name}, nice to have you",
  "Greetings {name}, hope you enjoy",
  "Welcome {name}, great to have you",
  "Hiya {name}, thanks for joining",
  "Heya {name}, good to have you here",
  "Hello {name}, hope you have a good time",
  "Greetings {name}, welcome aboard",
  "Hey {name}, enjoy your stay",
  "Hi {name}, pleased to see you",
  "Hello {name}, happy to have you here",
  "Welcome {name}, glad you came",
  "Hey {name}, good to see you around",
  "Hi {name}, hope everything is fine",
  "Hello {name}, nice to meet you here",
  "Greetings {name}, wishing you well",
  "Hey {name}, thanks for being here",
  "Hi {name}, happy to see you again",
  "Hello {name}, wishing you a good day"
];

/* changing elements data */
const mcDisplay = document.getElementById("count");
const unDisplay = document.getElementById("name");

if (userName && userName !== "") {
  randomGreeting = greetings[Math.floor(Math.random() * greetings.length)].replace("{name}", userName);
}

if (msgCount !="0") {
  mcDisplay.textContent = `You've send ${msgCount} messages so far!`;
}

btn.onclick = () => {
  const userInput = input.value;
  tg.sendData(
    JSON.stringify({
      action: "input_save",
      value: userInput,
    })
  );
  tg.close();
};

function applyTheme() {
  const theme = tg.colorScheme;

  if (theme === "dark") {
    document.body.style.backgroundColor = "#1a1a1a";
    document.body.style.color = "#ffffff";
    input.style.backgroundColor = "#2a2a2a";
    input.style.color = "#ffffff";
    btn.style.backgroundColor = "#2481cc";
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    input.style.backgroundColor = "#f2f2f2";
    input.style.color = "#000000";
    btn.style.backgroundColor = "#2AABEE";
  }
}

applyTheme();
tg.onEvent("themeChanged", applyTheme);


