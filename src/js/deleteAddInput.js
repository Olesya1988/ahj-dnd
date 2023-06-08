export default function deleteAddInput() {
  const close = Array.from(document.querySelectorAll('.close'));

  close.forEach((el) => {
    el.addEventListener('click', () => {
      el.closest('.add__container').querySelector('.add__text').classList.remove('invisible');
      el.closest('.add__container').querySelector('.add__input').classList.add('invisible');
      el.closest('.add__container').querySelector('button').classList.add('invisible');
      el.classList.add('invisible');
    });
  });
}
