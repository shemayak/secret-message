
const form = document.getElementById('submit-form');

form.addEventListener('submit', function(event) {
  // 1. Prevent the default page reload
  event.preventDefault(); 

  // 2. Instantiate FormData passing the form element
  const formData = new FormData(event.target);

  // 3. Extract a single value
  const key = formData.get('secret-key');
    form.reset();
  console.log('secret-key', key)
});
