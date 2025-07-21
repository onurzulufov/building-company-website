document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.faq__question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.querySelector('.faq__answer');
      const isActive = question.getAttribute('aria-expanded') === 'true';

      question.setAttribute('aria-expanded', !isActive);
      answer.classList.toggle('active');
    });
  });
});