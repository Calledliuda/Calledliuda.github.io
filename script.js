// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Animate skill bars when they enter viewport
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".skill-bar__fill").forEach((bar) => {
          bar.style.width = bar.style.getPropertyValue("--w");
        });
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const skillSection = document.querySelector(".skill-bars");
if (skillSection) {
  // Reset widths initially so animation triggers on scroll
  skillSection.querySelectorAll(".skill-bar__fill").forEach((bar) => {
    const w = bar.style.width;
    bar.style.setProperty("--w", w);
    bar.style.width = "0";
  });
  skillObserver.observe(skillSection);
}

// Glitch effect on name - random micro glitches
const neonName = document.querySelector(".neon-name");
if (neonName) {
  setInterval(() => {
    if (Math.random() > 0.85) {
      neonName.style.textShadow =
        Math.random() > 0.5
          ? "0 0 50px rgba(255,45,149,0.7), 0 0 15px rgba(255,45,149,0.5), 2px 0 rgba(0,229,255,0.7)"
          : "0 0 50px rgba(0,229,255,0.7), 0 0 15px rgba(0,229,255,0.5), -2px 0 rgba(255,45,149,0.7)";
      setTimeout(() => {
        neonName.style.textShadow = "0 0 40px rgba(0,229,255,0.5), 0 0 10px rgba(0,229,255,0.7), 0 0 2px #fff";
      }, 100 + Math.random() * 150);
    }
  }, 2000);
}

// Random terminal cursor blink on sidebar role
const roleEl = document.querySelector(".sidebar__role");
if (roleEl && !roleEl.textContent.endsWith("_")) {
  setInterval(() => {
    const txt = roleEl.textContent;
    if (txt.endsWith("_")) {
      roleEl.textContent = txt.slice(0, -1);
    } else {
      roleEl.textContent = txt + "_";
    }
  }, 600);
}

console.log("%c SYSTEM ONLINE %c 何宣颖 · Personal Archive v2.0 ",
  "background:#00e5ff;color:#000;padding:4px 8px;font-weight:bold;",
  "color:#c8cde0;");
console.log("%c > Loaded cyberpunk theme successfully", "color:#ff2d95;");
