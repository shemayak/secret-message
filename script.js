
const form = document.getElementById("submit-form");
const message = document.createElement("div");
message.classList.add("my-style");
message.textContent = "";
document.body.append(message);
message.style.fontFamily = "Helvetica, Arial, sans-serif";
message.style.transform = "translateY(10px)";
form.addEventListener('submit', function(event) {
  // 1. Prevent the default page reload
  event.preventDefault(); 

  // 2. Instantiate FormData passing the form element
  const formData = new FormData(event.target);

  // 3. Extract a single value
  const key = formData.get("secret-key");
    let ascii = [];
    for(let i = 0;i < key.length;i++){
      ascii.push(key.charCodeAt(i));
    }
  message.textContent = ascii;
    form.reset();
    // alert(ascii);
  // console.log("secret-key", key)
});
