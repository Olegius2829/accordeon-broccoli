const faqItems = document.querySelectorAll('.accordion__title');

function toggleAccordion(event) {
  event.preventDefault();
  const itemToggle = this.getAttribute('aria-expanded');
  const inner = this.nextElementSibling;

  for (let i = 0; i < faqItems.length; i += 1) {
    faqItems[i].setAttribute('aria-expanded', 'false');
    faqItems[i].nextElementSibling.style.height = '0px';
  }

  if (itemToggle === 'false') {
    this.setAttribute('aria-expanded', 'true');
    inner.style.height = `${inner.scrollHeight}px`;
  }
}

faqItems.forEach(item => item.addEventListener('click', toggleAccordion));
