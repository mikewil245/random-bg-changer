btn = document.getElementById("btn");
copyBtn = document.getElementById("copyBtn");

btn.addEventListener("click", bgChanger);

copyBtn.addEventListener("click", () => writeClipboardText(currentHexColor));

let currentHexColor; // Global variable to store the current color code

function bgChanger() {
  /*.toString(16)  convert any decimal number
 to its hexadecimal equivalent*/
  let red = Math.floor(Math.random() * 256).toString(16);

  let green = Math.floor(Math.random() * 256).toString(16);

  let blue = Math.floor(Math.random() * 256).toString(16);

  if (red.length === 1) {
    /*.padStart(2, '0') ensures that your string always has at least 2 characters. 
If it doesn't, it adds a '0' at the start to make it so.*/
    red = red.padStart(2, "0");
    console.log(red);
  }
  if (green.length === 1) {
    green = green.padStart(2, "0");
  }
  if (blue.length === 1) {
    blue = blue.padStart(2, "0");
  }

  let hexColor = `#${red}${green}${blue}`;
  document.body.style.backgroundColor = hexColor;
  btn.textContent = `🎨: ${hexColor}`;

  currentHexColor = hexColor;

  return hexColor;
}

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = "Copy Color Code";
    }, 1200);
  } catch (error) {
    console.error(error.message);
  }
}

/* 
when we refer to "decimal" in the context of .toString(16)
, we're almost always talking about base-10 integers
*/
