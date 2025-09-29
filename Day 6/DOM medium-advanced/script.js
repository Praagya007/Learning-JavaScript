

    // Button Event Object
    const clickBtn = document.getElementById("clickBtn");
    clickBtn.addEventListener("click", (event) => {
      console.log("Event Type:", event.type);
      console.log("Event Target:", event.target);
      console.log("Button clicked successfully!");
    });

    // Bubbling vs Capturing
    const parentDiv = document.getElementById("parentDiv");
    const childBtn = document.getElementById("childBtn");

    parentDiv.addEventListener("click", () => {
      console.log("Parent div clicked (capturing)");
    }, true); // capturing

    childBtn.addEventListener("click", () => {
      console.log("Child button clicked (bubbling)");
    });

    // Event Delegation
    const groceryList = document.getElementById("groceryList");
    groceryList.addEventListener("click", (e) => {
      if(e.target.tagName === "LI") console.log("Clicked item:", e.target.textContent);
    });

    // Form Validator
    const loginForm = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); //Prevents reloading
      let valid = true;

      if(!email.value.includes("@")) { //If there's no @.
        emailError.textContent = "Email must contain @";
        valid = false;
      } else { emailError.textContent = ""; }

      if(password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 chars";
        valid = false;
      } else { passwordError.textContent = ""; }

      if(valid) console.log("Form valid!", { email: email.value, password: password.value });
    });

    // Keyboard Shortcut
    const searchBox = document.getElementById("searchBox");
    document.addEventListener("keydown", (e) => {
      if(e.key === "/") {
        e.preventDefault();
        searchBox.focus();
      }
    });
