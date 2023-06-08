export default function moveCard() {
  const tasksListElement = Array.from(document.querySelectorAll('.card__list'));
  const taskElements = document.querySelectorAll('.card__item');

  for (const task of taskElements) {
    task.draggable = true;
  }

  tasksListElement.forEach((el) => {
    el.addEventListener('dragstart', (evt) => {
      evt.target.classList.add('selected');
    });
  });

  tasksListElement.forEach((el) => {
    el.addEventListener('dragend', (evt) => {
      evt.target.classList.remove('selected');
    });
  });

  tasksListElement.forEach((el) => {
    el.addEventListener('dragover', (evt) => {
      evt.preventDefault();

      const activeElement = document.querySelector('.selected');

      const currentElement = evt.target;

      const isMoveable = activeElement !== currentElement
              && currentElement.classList.contains('card__item');

      if (!isMoveable) {
        return;
      }

      const nextElement = getNextElement(evt.clientY, currentElement);

      if (
        nextElement
              && activeElement === nextElement.previousElementSibling
              || activeElement === nextElement
      ) {
        return;
      }

      el.insertBefore(activeElement, nextElement);
    });
  });

  const getNextElement = (cursorPosition, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

    const nextElement = (cursorPosition < currentElementCenter)
      ? currentElement
      : currentElement.nextElementSibling;

    return nextElement;
  };
}
