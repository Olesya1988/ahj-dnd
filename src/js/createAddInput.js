export default function createAddInput() {
  const addText = Array.from(document.querySelectorAll('.add__text'));

  addText.forEach((el) => {
    el.addEventListener('click', () => {
      el.classList.add('invisible');
      el.closest('.add__container').querySelector('.add__input').classList.remove('invisible');
      el.closest('.add__container').querySelector('button').classList.remove('invisible');
      el.closest('.add__container').querySelector('.close').classList.remove('invisible');
    });
  });
}
