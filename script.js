// Progress bar
const progress = document.querySelector(".progress");
const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.setProperty("--progress", `${Math.min(100, percent)}%`);
};
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

// Scroll-reveal animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Card hover glow - track mouse position for radial gradient
document.querySelectorAll(".profile-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
  });
});

// Staggered reveal delays
document.querySelectorAll(".timeline-item.reveal, .profile-card.reveal").forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.08}s`;
});
