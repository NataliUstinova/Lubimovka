const reviewsCards = document.querySelector('.reviews__cards .swiper-wrapper'); //Родительский блок для карточек
const template = document.querySelector('.reviews-cards-template'); //template

//Клонируем template
function cloneTemplate() {
  const templateElement = template.content;
  const newElement = templateElement.cloneNode(true);
  return newElement; //возвращаем элемент 
}

function createCard(text,author) {
  const divElement = cloneTemplate(); //возвращаемый элемент
  const elementText = divElement.querySelector('.reviews__text');
  const elementAuthor = divElement.querySelector('.reviews__author');
  elementText.textContent = text;
  elementAuthor.textContent = author;
  return divElement;
}

// Добавляем карточки
function renderItem(divElement) {
  reviewsCards.append(divElement);
}

//Перебираем каждый элемент массива
function renderList(elements) {
  elements.forEach(element => {
    const text = element.text;
    const author = element.author;
    const card = createCard(text, author);
    renderItem(card);
  });
}

const reviewItems = [
  {
    text: 'Что-то похожее на эффект от мультфильмов типа «Сауз Парк» или про коня Боджэка возникает — я думаю, и пьеса написана с этой интонацией американских взрослых мультсериалов. И как хорошо все это с куклой-носочком. Так все чисто сделано!',
    author: 'Наталья Зайцева',
  },
  {
    text: 'Для самой этой истории формат читки работает отличным ироническим отстранением',
    author: 'Дина Годер',
  },
  {
    text: 'Мне данный формат дал возможность самой выбирать, как двигается персонаж, что на нем надето, какую машину он водит, и что за плакат висит в подвале церкви. Это было приятно, ведь я как будто сама поучаствовала в спектакле',
    author: 'Дарья Морозова',
  },
  {
    text: 'Очень выразительный спектакль! Удивительно проникновенный и какой-то настоящий что ли... Поразительно просто как ты мгновенно погружаешься в действие и веришь всему, ловишь каждое слово и каждый взгляд актеров',
    author: 'Любовь Петрова',
  },
  {
    text: 'Я в дичайшем восторге!!! такое чувство,что ты приехал в гости,накатил и сидишь,слушаешь истории, люди разные, а история переплетается, и говорят они про себя,но как-будто и о тебе.',
    author: 'Алексей Бердер',
  },
  {
    text: 'Необычно,но интересный сюжет и оригинальная постановка сделали свое дело. Я осталась довольна.',
    author: 'Алина Иванова',
  },
  {
    text: 'Пожалуй, лучший спектакль в моей жизни.Очень интересный , жизненный сюжет с блестящей актерской игрой.',
    author: 'Диана Казанцева',
  },
  {
    text: 'Замечательный спектакль. Рекомендую к просмотру.',
    author: 'Петр Ивашкин',
  }
];

renderList(reviewItems);