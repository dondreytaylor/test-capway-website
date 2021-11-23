const links = document.getElementsByTagName('a');
links.href = 'javascript:void(0)';

function handleSubmit() {
  const inputField = document.getElementById('email-input');
  inputField.value = '';
}
