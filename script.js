// Lista configów — dodaj tu nowy wpis, gdy wrzucisz plik do folderu /configs
const CONFIGS = [
  {
    name: "Legit",
    tag: "aim",
    desc: "Config pod czystą, subtelną grę — minimalny smoothing, bez rage triggerów.",
    file: "configs/legit.cfg"
  },
  {
    name: "Semi-Legit",
    tag: "hybrid",
    desc: "Balans między legit a rage — mocniejszy trigger, wciąż w miarę naturalny.",
    file: "configs/semi-legit.cfg"
  },
  {
    name: "Visuals",
    tag: "esp",
    desc: "Czyste ESP i glow bez zapychania ekranu — czytelność przede wszystkim.",
    file: "configs/visuals.cfg"
  },
  {
    name: "Rage",
    tag: "rage",
    desc: "Maksymalna skuteczność, mniej dbałości o wygląd — do grania na luzie.",
    file: "configs/rage.cfg"
  }
];

const REPO_RAW_BASE = "https://raw.githubusercontent.com/Sch1zVs/sch1zvs_public/main/";

function renderConfigs() {
  const grid = document.getElementById("configs-grid");
  if (!grid) return;

  grid.innerHTML = CONFIGS.map((c) => `
    <article class="config-card">
      <div class="config-card__top">
        <h3 class="config-card__name">${c.name}</h3>
        <span class="config-card__tag">${c.tag}</span>
      </div>
      <p class="config-card__desc">${c.desc}</p>
      <a class="config-card__link" href="${REPO_RAW_BASE}${c.file}" download>
        Pobierz plik
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>
        </svg>
      </a>
    </article>
  `).join("");

  const stat = document.getElementById("stat-configs");
  if (stat) stat.textContent = CONFIGS.length;
}

document.addEventListener("DOMContentLoaded", () => {
  renderConfigs();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
