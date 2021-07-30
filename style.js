let result = document.querySelector("#value");
let buttons = document.querySelectorAll("#keyboard");
let searchResult = "";

for (button of buttons) {
  button.addEventListener("click", (btn) => {
    let buttonText = btn.target.innerText;
    if (buttonText == "C") {
      searchResult = "";
      result.value = searchResult;
    } else if (buttonText == "=") {
      result.value = eval(searchResult || 0);
    } else {
      searchResult += buttonText;
      result.value = searchResult;
    }

    // //clear the values in search bar with esc button
    // window.addEventListener("keydown", function (e) {
    //   let targetKey = e.key;
    //   if (targetKey === "Escape") document.getElementById("clear").click();
    // });
  });
}
