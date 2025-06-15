 document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const faqItem = header.parentElement;
      faqItem.classList.toggle('active');
    });
  });