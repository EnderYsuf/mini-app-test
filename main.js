const tg = window.Telegram.WebApp;
tg.ready();

const input = document.getElementById("input");
const btn = document.getElementById("btn");

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
