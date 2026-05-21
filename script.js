const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const message = document.getElementById("message");

openModal.onclick = () => {
    modal.style.display = "flex";
}

closeModal.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

// ALTERAR ABAS

function showTab(tabName) {

    const tabs = document.querySelectorAll(".tab");
    const buttons = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => {
        tab.classList.remove("active-tab");
    });

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(tabName).classList.add("active-tab");

    event.target.classList.add("active");
}

// CADASTRO

function register() {

    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    if(name === "" || email === "" || password === "") {
        message.innerText = "Preencha todos os campos!";
        return;
    }

    const user = {
        name,
        email,
        password
    };

    localStorage.setItem("user", JSON.stringify(user));

    message.innerText = "Cadastro realizado com sucesso! 🎉";
}

// LOGIN

function login() {

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if(!savedUser) {
        message.innerText = "Nenhum usuário cadastrado!";
        return;
    }

    if(email === savedUser.email && password === savedUser.password) {
        message.innerText = `Bem-vindo ${savedUser.name}! 🍕🎮`;
    } else {
        message.innerText = "Email ou senha incorretos!";
    }
}
