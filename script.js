document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('userInput');
  const terminalOutput = document.getElementById('terminalOutput');
  const terminalContainer = document.getElementById('terminalContainer');
  const bioContainer = document.getElementById('bioContainer');
  const correctName = 'vembu karthick';
  let wrongAttempts = 0; // Track wrong inputs

  userInput.focus();

  userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const inputValue = userInput.value.trim();
      userInput.value = '';

      const inputLine = document.querySelector('.input-line');
      const submittedLine = document.createElement('div');
      submittedLine.classList.add('line');
      submittedLine.innerHTML = `
        <img src="resources/person_icon.png" alt="User" class="icon">
        <span class="text-input-history">${inputValue}</span>
      `;
      terminalOutput.insertBefore(submittedLine, inputLine);

      // Command logic
      if (inputValue.toLowerCase() === correctName) {
        wrongAttempts = 0;
        respond("You are goddamn right!", true);
      } else if (inputValue.toLowerCase() === "help") {
        wrongAttempts = 0;
        respond("Commands: [vembu karthick, walter, jesse, heisenberg, gus, treadlightly, clear]", false);
      } else if (inputValue.toLowerCase() === "heisenberg") {
        respond("Say my name.", false);
      } else if (inputValue.toLowerCase() === "jesse") {
        respond("Yo, yo, yo! 1-4-8, 3 to the 3 to the 6 to the 9, representing the ABQ. What up, biatch? Leave it at the tone!", false, "#61afef");
      } else if (inputValue.toLowerCase() === "walter") {
        respond("you think out of me, I am the one who knocks", false);
      } else if (inputValue.toLowerCase() === "gus") {
        respond("I hide in plain sight, same as you.", false);
      } else if (inputValue.toLowerCase() === "treadlightly") {
        respond("If you don’t know who I am, then maybe your best course would be to tread lightly.", false);
      } else if (inputValue.toLowerCase() === "clear") {
        location.reload(); // Refresh page
      } else {
        wrongAttempts++;
        if (wrongAttempts >= 6) {
          respond(
            "Heisenberg: You've messed up too many times.\nTry typing 'help' — it'll show you the secret commands.\nAnd hey... this ain't just a terminal. It's my portfolio. Click around when you get it right!",
            false,
            "#ff5555"
          );
          wrongAttempts = 0; // Reset after giving the hint
          setTimeout(() => location.reload(), 6500);
        } else {
          respond("You Sure?", false);
        }
      }

      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
  });

  function respond(message, success = false, color = "#98c379") {
    const heisenbergResponse = document.createElement('div');
    heisenbergResponse.classList.add('line');
    heisenbergResponse.innerHTML = `
      <img src="resources/heisenberg_icon.png" alt="Heisenberg" class="icon">
      <span class="text" style="color:${color}; white-space: pre-line;">${message}</span>
    `;
    terminalOutput.insertBefore(heisenbergResponse, document.querySelector('.input-line'));

    if (success) {
      setTimeout(() => {
        terminalContainer.classList.add('fade-out');
        terminalContainer.addEventListener('transitionend', () => {
          terminalContainer.classList.add('hidden');
          bioContainer.classList.remove('hidden');
          bioContainer.classList.add('visible');
          document.body.style.overflow = 'auto';
        }, { once: true });
      }, 1500);
      terminalOutput.removeChild(document.querySelector('.input-line'));
    }
    else if (wrongAttempts == 6) {
      terminalOutput.removeChild(document.querySelector('.input-line'));
    }
    else{
      console.log('wa',wrongAttempts)
    }
    
    
  }

  terminalContainer.addEventListener('click', () => {
    userInput.focus();
  });
});
function viewResume() {
  try {
    window.open('https://drive.google.com/file/d/1G7ot2NhKn09ghoNGyIPppYtXMZq9vfIY/view?usp=drive_link', '_blank');
  }
  catch (err) {
    alert("The resume isn't available right now. You know where to find it: https://drive.google.com/file/d/1G7ot2NhfrfefeoNGyIPppYtXMZq9vfIY/view?usp=drive_link");
    console.log('Error while viewing resume', err)
  }
}

function downloadResume() {
  try{
    window.open('https://drive.google.com/uc?export=download&id=1G7ot2NhKn09ghoNGyIPppYtXMZq9vfIY','_blank');
  }catch (err) {
    alert("The resume isn't available right now. You know where to find it: https://drive.google.com/file/d/1G7ot2NhfrfefeoNGyIPppYtXMZq9vfIY/view?usp=drive_link");
    console.log('Error while downloading resume', err)

  }
}
