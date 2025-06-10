// Função para verificar se um elemento existe
function elementExists(selector) {
    return document.querySelector(selector) !== null;
}

// Função para inicializar animações de fade-in
function initFadeIn() {
    try {
        const sections = document.querySelectorAll("section, .profile-pic, .signature");
        if (sections.length === 0) {
            console.warn("Nenhum elemento encontrado para animação de fade-in.");
            return;
        }

        function checkVisibility() {
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight / 1.5) {
                    section.classList.add("visible");
                }
            });
        }

        window.addEventListener("scroll", checkVisibility);
        checkVisibility();
    } catch (error) {
        console.error("Erro na animação de fade-in:", error);
    }
}

// Função para inicializar hover nos links
function initLinkHover() {
    try {
        const links = document.querySelectorAll(".link-item");
        if (links.length === 0) {
            console.warn("Nenhum link-item encontrado para animação de hover.");
            return;
        }

        links.forEach(link => {
            const icon = link.querySelector("i");
            if (!icon) {
                console.warn("Ícone não encontrado no link:", link);
                return;
            }

            link.addEventListener("mouseover", () => {
                icon.style.transform = "scale(1.2) rotate(10deg)";
                icon.style.transition = "transform 0.3s ease";
            });

            link.addEventListener("mouseout", () => {
                icon.style.transform = "scale(1) rotate(0deg)";
            });
        });
    } catch (error) {
        console.error("Erro na animação de hover dos links:", error);
    }
}

// Função para inicializar botão de voltar ao topo
function initBackToTop() {
    try {
        const backToTopButton = document.createElement("button");
        backToTopButton.innerHTML = "↑";
        backToTopButton.classList.add("back-to-top");
        document.body.appendChild(backToTopButton);

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });

        backToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    } catch (error) {
        console.error("Erro no botão de voltar ao topo:", error);
    }
}

// Inicialização geral
document.addEventListener("DOMContentLoaded", () => {
    initFadeIn();
    initLinkHover();
    initBackToTop();
});