export default function drawUI() {
  const main = document.querySelector('.main');
  const container = document.createElement('div');
  container.classList.add('container');
  main.appendChild(container);

  const columnList = document.createElement('ul');
  columnList.classList.add('column__list');
  container.appendChild(columnList);

  for (let i = 0; i < 3; i++) {
    const columnItem = document.createElement('li');
    columnItem.classList.add('column__item');
    columnList.appendChild(columnItem);
  }

  columnList.children[0].textContent = 'TODO';
  columnList.children[1].textContent = 'IN PROGRESS';
  columnList.children[2].textContent = 'DONE';

  const clear = document.createElement('button');
  clear.classList.add('clear');
  clear.textContent = 'Очистить всё';
  container.appendChild(clear);

  const columnItems = Array.from(document.querySelectorAll('.column__item'));
  columnItems.forEach((el) => {
    const cardList = document.createElement('ul');
    cardList.classList.add('card__list');
    el.appendChild(cardList);

    const addButton = document.createElement('div');
    addButton.classList.add('add__container');
    addButton.innerHTML = `<div class="add__box">
        <div class="add__text">+ Add another card</div>
        <textarea class="add__input invisible" placeholder="Enter a title for this card"></textarea>
        <button class="add__button invisible">Add Card</button>
        <span class="close invisible">&#10006;</span>
        </div>
        `;
    el.appendChild(addButton);
  });
}
