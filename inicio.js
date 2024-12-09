document.addEventListener("DOMContentLoaded", () => {

    const contadores = document.querySelectorAll(".contador");

    contadores.forEach(contador => {
        contador.innerText = "0";

        const atualizarContador = () => {
            const alvo = +contador.getAttribute("data-alvo");
            const contagem = +contador.innerText;
            const incremento = alvo / 1000

            if (contagem < alvo) {
                contador.innerText = Math.ceil(contagem + incremento);
                setTimeout(atualizarContador, 10);
            }
            else {
                contador.innerText = alvo
            }
        };
        atualizarContador();
    })
})

// Modo escuro
function darkMode() {
    document.body.classList.toggle("dark-mode")
}

// ---------- MENU HAMBURGER NOVO ----------
function menuOnclick() {
    document.getElementById('menu-hbg-bar').classList.toggle('change');

    document.getElementById('nav').classList.toggle('change');

    document.getElementById('menu-bg').classList.toggle('change-bg');
}





// ---------- FIM DO MENU HAMBURGER ----------

// ---------- MENU HAMBURGER ANTIGO --> ----------

// const hamburgerMenu = document.querySelector('.hamburgerMenu');
// const menu = document.querySelector('.nav-list');

// hamburgerMenu.addEventListener('click', () => {
//     menu.classList.toggle('active');
// });

// const hamburguer = document.querySelector('.hamburguer');

// const nav = document.querySelector(".nav");

// hamburguer.addEventListener('click', () =>
//     nav.classList.toggle('active'));











