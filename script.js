const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('[data-menu]');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const next = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(next));
    menu.classList.toggle('open', next);
  });
}

const revealNodes = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px',
  }
);

revealNodes.forEach((node, index) => {
  node.style.transitionDelay = `${Math.min(index * 80, 300)}ms`;
  revealObserver.observe(node);
});

const counterNodes = document.querySelectorAll('[data-target]');

const animateCounter = (node) => {
  const target = Number(node.getAttribute('data-target'));
  const startTime = performance.now();
  const duration = 1000;

  const frame = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    node.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))).toString();

    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      node.textContent = `${target}+`;
    }
  };

  requestAnimationFrame(frame);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

counterNodes.forEach((node) => counterObserver.observe(node));
