document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const btn = document.querySelector('.menu-btn');
  const links = document.querySelector('.nav-links');
  if (btn && links) btn.addEventListener('click', () => links.classList.toggle('open'));

  // Contact form demo (only present on contact.html)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();
      if (!name || !email || !message) {
        alert('সব বক্স পূরণ করুন।');
        return;
      }
      alert(`ধন্যবাদ, ${name}! তোমার মেসেজ পাওয়া গেছে।`);
      form.reset();
    });
  }
});
