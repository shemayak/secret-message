
const form = document.getElementById('submit-form');

form.addEventListener('submit', function(event) {
  // 1. Prevent the default page reload
  event.preventDefault(); 

  // 2. Instantiate FormData passing the form element
  const formData = new FormData(event.target);

  // 3. Extract a single value
  const key = formData.get('secret-key');
    let ascii = 0;
    for(let i = 0;i < key.length;i++){
      ascii += key.charCodeAt(i);
    }
    alert(ascii);
    form.reset();
  // console.log('secret-key', key)
});
