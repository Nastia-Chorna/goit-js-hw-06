
const form = document.querySelector(".login-form");

const onForSubmit = event => {
    event.preventDefault()
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (email === '' || password === '') {
        return alert("всі поля повинні бути заповнені");
    }
    const formData = {email, password};
    console.log(formData);
    form.reset();
}
form.addEventListener('submit', onForSubmit);

