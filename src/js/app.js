import drawUI from './drawUI';
import createAddInput from './createAddInput';
import deleteAddInput from './deleteAddInput';
import Card from './Card';

drawUI();
createAddInput();
deleteAddInput();

const card = new Card();

card.init();
