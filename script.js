
const form = document.getElementById("submit-form");
const message = document.createElement("div");
message.classList.add("my-style");
message.textContent = "";
document.body.append(message);
message.style.fontFamily = "Helvetica, Arial, sans-serif";
message.style.transform = "translateY(10px)";
const secretMessage = [153,152,140,206,219,149,210,129,158,137,217,212,225,157,83,142,209,171];
form.addEventListener('submit', function(event) {
  // 1. Prevent the default page reload
  event.preventDefault(); 

  // 2. Instantiate FormData passing the form element
  const formData = new FormData(event.target);
  const key = formData.get("secret-key");
    let ascii = [];
    for(let i = 0;i < secretMessage.length;i++){
      ascii.push(secretMessage[i] - key.charCodeAt(i % key.length)); 
    }
  message.textContent = String.fromCharCode(...ascii);
    form.reset();
    // alert(ascii);
  // console.log("secret-key", key)
});
