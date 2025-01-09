import { modes } from "/modes.js";

document
   .getElementById("get-color-btn")
   .addEventListener("click", () => generateScheme());

function generateScheme() {
   const colorURL = document.getElementById("color").value.slice(1);
   const colorMode = document.getElementById("color-scheme").value;
   fetch(`https://www.thecolorapi.com/scheme?hex=${colorURL}&mode=${colorMode}&count=5`)
      .then((res) => res.json())
      .then((data) => {
         const hexArr = data.colors.map((color) => color.hex.value);

         document.getElementById("display-color").innerHTML = hexArr
            .map(
               (hex) => `
          <div class="color-wrap">
              <div class="color-block" style="background-color: ${hex}"></div>
              <p class="color-code">${hex}</p>
          </div>
       `
            )
            .join("");
      });
}

function render() {
   document.getElementById("color-scheme").innerHTML = modes
      .map((mode) => `<option  value="${mode}">${mode}</option>`)
      .join("");
   generateScheme();
}

render();
