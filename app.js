// Variables

let Months = {
    1: "Janeiro",
    2: "Fevereiro",
    3: "Março",
    4: "Abril",
    5: "Maio",
    6: "Junho",
    7: "Julho",
    8: "Agosto",
    9: "Setembro",
    10: "Outubro",
    11: "Novembro",
    12: "Dezembro"
};

// Elements

const input = document.getElementById("input")
const DateTitle = document.getElementById("DateTitle");
const ThemeLabel = document.getElementById("theme-label");

// Buttons

const RandomBtn = document.getElementById("random-btn");
const SearchBtn = document.getElementById("search-btn");
const DeleteBtn = document.getElementById("delete-btn");
const ThemeToogler = document.getElementById("theme-toogler");
const HowToUseBtn = document.getElementById("how-to-use");

// Functions

function generateRandomDate() {
    let day = Math.floor(Math.random() * 31) + 1;
    let month = Math.floor(Math.random() * 12) + 1;

    if (day < 10) {
        day = "0" + day
    }

    if (month < 10) {
        month = "0" + month
    }

    return day + "/" + month;
}

function getHoliday() {
    if (input.value) {
        if (holidays[input.value]) {
            return holidays[input.value]
        }
    }
}

// Events

ThemeToogler.addEventListener("click", function () {
    if (document.body.classList.contains("bg-zinc-950")) {
        document.body.classList.remove("bg-zinc-950");
        document.body.classList.add("bg-white-300");

        ThemeLabel.textContent = "Tema Escuro";

    } else {
        document.body.classList.remove("bg-white-300");
        document.body.classList.add("bg-zinc-950");

        ThemeLabel.textContent = "Tema Claro";
    }
});

HowToUseBtn.addEventListener("click", function () {
    alert("Para usar a aplicação, digite a data desejada no campo de busca (formato DD/MM) e clique no ícone de lupa para pesquisar. O botão de ícone com setas pode ser usado para selecionar uma data aleatória. Utilize o botão 'Tema Claro' para alternar entre o modo claro e escuro.");
});

RandomBtn.addEventListener("click", function () {
    input.value = generateRandomDate();

    if (getHoliday()) {
        DateTitle.textContent = input.value + ", " + getHoliday();
    } else {
        DateTitle.textContent = "Ops! Formato Inválido."
    }

    SearchBtn.classList.remove("text-zinc-500/25", "bg-zinc-900/25", "pointer-events-none");
    SearchBtn.classList.add("text-zinc-500", "bg-zinc-900", "pointer-events-auto");

    DeleteBtn.classList.remove("text-zinc-500/25", "bg-zinc-900/25", "pointer-events-none");
    DeleteBtn.classList.add("text-zinc-500", "bg-zinc-900", "pointer-events-auto");
});

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        if (getHoliday()) {
            DateTitle.textContent = input.value + ", " + getHoliday();
        } else {
            DateTitle.textContent = "Ops! Formato Inválido."
        }
    }
});

input.addEventListener("input", function (event) {
    if (event.target.value) {
        let value = input.value;

        value = value.replace(/\D/g, '');

        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }

        value = value.slice(0, 5);
        input.value = value

        SearchBtn.classList.remove("text-zinc-500/25", "bg-zinc-900/25", "pointer-events-none");
        SearchBtn.classList.add("text-zinc-500", "bg-zinc-900", "pointer-events-auto");

        DeleteBtn.classList.remove("text-zinc-500/25", "bg-zinc-900/25", "pointer-events-none");
        DeleteBtn.classList.add("text-zinc-500", "bg-zinc-900", "pointer-events-auto");
    } else {
        SearchBtn.classList.add("text-zinc-500/25", "bg-zinc-900/25", "pointer-events-none");
        SearchBtn.classList.remove("text-zinc-500", "bg-zinc-900", "pointer-events-auto");

        DeleteBtn.classList.add("text-zinc-500/25", "bg-zinc-900/25", "pointer-events-none");
        DeleteBtn.classList.remove("text-zinc-500", "bg-zinc-900", "pointer-events-auto");

        DateTitle.textContent = "Insira uma Data..."
    }
});

SearchBtn.addEventListener("click", function () {
    if (input.value) {
        if (getHoliday()) {
            DateTitle.textContent = input.value + ", " + getHoliday();
        } else {
            DateTitle.textContent = "Ops! Formato Inválido."
        }
    }
});

DeleteBtn.addEventListener("click", function () {
    if (input.value) {
        input.value = "";
    }

    DateTitle.textContent = "Insira uma Data..."

    DeleteBtn.classList.add("text-zinc-500/25", "bg-zinc-900/25", "pointer-events-none");
    DeleteBtn.classList.remove("text-zinc-500", "bg-zinc-900", "pointer-events-auto");

    SearchBtn.classList.add("text-zinc-500/25", "bg-zinc-900/25", "pointer-events-none");
    SearchBtn.classList.remove("text-zinc-500", "bg-zinc-900", "pointer-events-auto");
});