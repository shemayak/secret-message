
const form = document.getElementById('submit-form');
const message = document.createElement("div");
message.classList.add("my-style");
message.textContent = "";
document.body.append(message);
form.addEventListener('submit', function(event) {
  // 1. Prevent the default page reload
  event.preventDefault(); 

  // 2. Instantiate FormData passing the form element
  const formData = new FormData(event.target);

  // 3. Extract a single value
  const key = formData.get('secret-key');
    let ascii = [];
    for(let i = 0;i < key.length;i++){
      ascii.push(key.charCodeAt(i));
    }

// Step 2: Configure it (add text, classes, or attributes)
  message.textContent = ascii;

// Step 3: Insert it into the DOM (e.g., inside the <body>)
    form.reset();
    alert(ascii);

  // console.log('secret-key', key)
});
