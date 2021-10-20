
const form = document.querySelector(".login-form");

const onForSubmit = (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;;

    if (!email || !password) 
        return alert("всі поля повинні бути заповнені");
    
    console.log({email, password});
    form.reset();
}
form.addEventListener('submit', onForSubmit);

