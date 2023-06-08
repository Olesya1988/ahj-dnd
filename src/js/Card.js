import moveCard from './moveCard';

export default class Card {
  constructor() {

  }

  action(e) {
    const { target } = e;

    if (target.classList.contains('card__delete')) {
      const elemItem = target.closest('.card__item');
      elemItem.remove();
      this.save();
    } else if (target.classList.contains('add__button')) {
      this.add();
      this.save();
    }
  }

  mouse() {
    const items = Array.from(document.querySelectorAll('.card__item'));

    items.forEach((el) => {
      el.addEventListener('mouseover', () => {
        el.querySelector('.card__delete').classList.remove('invisible');
      });

      el.addEventListener('mouseout', () => {
        el.querySelector('.card__delete').classList.add('invisible');
      });
    });
  }

  create(text) {
    return `<li class="card__item">
        <div class="card__text">${text}</div>        
        <span class="card__delete invisible">&#10006;</span></li>`;
  }

  add() {
    const elemText = Array.from(document.querySelectorAll('.add__input'));

    elemText.forEach((el) => {
      if (el.disabled || !el.value.length) {
        return;
      }

      el.closest('.column__item').querySelector('.card__list').insertAdjacentHTML('beforeend', this.create(el.value));
      el.value = '';
    });
  }

  init() {
    const fromStorage = localStorage.getItem('cards');

    if (fromStorage) {
      const fromStorageArr = fromStorage.split(',');
      const newArr = document.querySelectorAll('.card__list');

      for (let i = 0; i < fromStorageArr.length; i++) {
        newArr[i].innerHTML = fromStorageArr[i];
      }
    }

    document.addEventListener('click', this.action.bind(this));
    document.addEventListener('mouseover', this.mouse.bind(this));
    this.move();
    this.clear();
  }

  move() {
    moveCard();
    this.save();
  }

  clear() {
    document.querySelector('.clear').addEventListener('click', () => {
      localStorage.clear();
      location.reload();
    });
  }

  save() {
    const arr = [];
    const cardList = document.querySelectorAll('.card__list');
    for (let i = 0; i < cardList.length; i++) {
      arr.push(cardList[i].innerHTML);
    }
    localStorage.setItem('cards', arr);
  }
}
