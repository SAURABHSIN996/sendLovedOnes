// Get the "No" button element
const noButton = document.getElementById("no-button");

// Add a click event listener to move the "No" button randomly on click
noButton.addEventListener("click", () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  // Restrict the "No" button's movement within the bounds of the screen
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  const adjustedX = x < maxX ? x : maxX;
  const adjustedY = y < maxY ? y : maxY;

  // Apply the new position to the button
  noButton.style.position = "absolute";
  noButton.style.left = `${adjustedX}px`;
  noButton.style.top = `${adjustedY}px`;
});


// Get the "Yes" button element
const yesButton = document.getElementById("yes-button");

// Add a click event listener to replace the gif and hide the buttons
yesButton.addEventListener("click", () => {
  yesButton.style.display = "none";
  noButton.style.display = "none";

  // Remove the header "Do you love me?"
  var header = document.getElementById("main");
  header.style.display = "none";

  var gif = document.getElementById("gif");
  gif.src = "dps.gif";  // Replace pls.gif with dps.gif

  // Create and display congratulatory message
  let p = document.createElement("p");
  p.innerText = "So Excited to see you too 😘";
  p.style.fontSize = "1.5rem";
  p.style.fontWeight = "bold";
  p.style.textAlign = "center";
  p.style.marginTop = "1rem";  // Add margin to space it below the gif
  document.body.appendChild(p);
});
