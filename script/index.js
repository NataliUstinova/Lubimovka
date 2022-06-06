const reviewSection = document.querySelector('.review__container');
const reviewCards = reviewSection.querySelectorAll('.card');
const titleSelector = '.card__title';
const textSelector = '.card__text';
const nextBtn = reviewSection.querySelector('.review__button_type_next');
const prevBtn = reviewSection.querySelector('.review__button_type_prev');
const pagination = reviewSection.querySelectorAll('.review__page');

let index = 1;

const cardContent= [

  {
    src: "./images/new_york_title.svg",
    alt: "Заголовок газеты Нью-Йорк Таймс",
    text:"&laquo;Действие пьесы &bdquo;Длань Господня&ldquo; разворачивается в подвале провинциальной церкви в&nbsp;Техасе, где мать главного героя с&nbsp;группой добровольцев готовит кукольное представление. Ей&nbsp;отчаянно нужна эта работа, её&nbsp;муж недавно умер, оставив её&nbsp;с&nbsp;сыном-подростком в&nbsp;эмоциональной и&nbsp;финансовой яме. И&nbsp;вот жуткая тварь захватывает контроль над левой рукой её&nbsp;беспокойного Джейсона и&nbsp;принимается терроризировать его и&nbsp;всех вокруг. По&nbsp;мере накала страстей окружающие начинают подозревать, что рука одержима самим дьяволом, и&nbsp;пастор Грег предлагает прибегнуть к&nbsp;экзорцизму. Однако &bdquo;Длань Господня&ldquo;&nbsp;&mdash; это не&nbsp;ужастик, по&nbsp;крайней мере, природа зла тут вовсе не&nbsp;сверхъестественная. Чёрная комедия Аскинса о&nbsp;разделённой надвое душе человека ненавязчиво обнажает глубинные импульсы&nbsp;&mdash; сексуальные, саморазрушительные, агрессивные&nbsp;&mdash; которые притаились в&nbsp;каждом из&nbsp;нас&raquo;."
  },
  {
    src: "./images/spb_dog_title.svg",
    alt:"Заголовок журнала Собака СПб",
    text: "&laquo;Действие пьесы &laquo;Длань Господня&raquo; разворачивается в&nbsp;подвале провинциальной церкви в&nbsp;Техасе, где мать главного героя с&nbsp;группой добровольцев готовит кукольное представление. Ей&nbsp;отчаянно нужна эта работа, её&nbsp;муж недавно умер, оставив её&nbsp;с&nbsp;сыном-подростком в&nbsp;эмоциональной и&nbsp;финансовой яме. И&nbsp;вот жуткая тварь захватывает контроль над левой рукой её&nbsp;беспокойного Джейсона и&nbsp;принимается терроризировать его и&nbsp;всех вокруг."
  },
  {
    src: "./images/new_york_title.svg",
    alt: "Заголовок газеты Нью-Йорк Таймс",
    text:"&laquo;Действие пьесы &bdquo;Длань Господня&ldquo; разворачивается в подвале провинциальной церкви в&nbsp;Техасе, где мать главного героя с&nbsp;группой добровольцев готовит кукольное представление. Ей&nbsp;отчаянно нужна эта работа, её&nbsp;муж недавно умер, оставив её&nbsp;с&nbsp;сыном-подростком в&nbsp;эмоциональной и&nbsp;финансовой яме. И&nbsp;вот жуткая тварь захватывает контроль над левой рукой её&nbsp;беспокойного Джейсона и&nbsp;принимается терроризировать его и&nbsp;всех вокруг. По&nbsp;мере накала страстей окружающие начинают подозревать, что рука одержима самим дьяволом, и&nbsp;пастор Грег предлагает прибегнуть к&nbsp;экзорцизму. Однако &bdquo;Длань Господня&ldquo;&nbsp;&mdash; это не&nbsp;ужастик, по&nbsp;крайней мере, природа зла тут вовсе не&nbsp;сверхъестественная. Чёрная комедия Аскинса о&nbsp;разделённой надвое душе человека ненавязчиво обнажает глубинные импульсы&nbsp;&mdash; сексуальные, саморазрушительные, агрессивные&nbsp;&mdash; которые притаились в&nbsp;каждом из&nbsp;нас&raquo;."
  },
  {
    src: "./images/spb_dog_title.svg",
    alt:"Заголовок журнала Собака СПб",
    text: "&laquo;Действие пьесы &laquo;Длань Господня&raquo; разворачивается в&nbsp;подвале провинциальной церкви в&nbsp;Техасе, где мать главного героя с&nbsp;группой добровольцев готовит кукольное представление. Ей&nbsp;отчаянно нужна эта работа, её&nbsp;муж недавно умер, оставив её&nbsp;с&nbsp;сыном-подростком в&nbsp;эмоциональной и&nbsp;финансовой яме. И&nbsp;вот жуткая тварь захватывает контроль над левой рукой её&nbsp;беспокойного Джейсона и&nbsp;принимается терроризировать его и&nbsp;всех вокруг."
  }
]

window.onload = function renderInitialCards(){
  const contentWidth = reviewSection.offsetWidth;
  reviewCards[0].style.marginLeft = ((contentWidth-718-60)/2 - 718+17)+'px';
  showCards(1);
  reviewCards[2].addEventListener('click', showNext);
  reviewCards[0].addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);
  
}
function showCards(idx){
  reviewCards.forEach((card) => {
    card.querySelector(titleSelector).src = cardContent[idx].src;
    card.querySelector(titleSelector).alt = cardContent[idx].alt;
    card.querySelector(textSelector).innerHTML = cardContent[idx].text;
    idx++;
    if(idx===4){
      idx=0
    }
    showActivePage();
  })
}
function showNext(){
  index++;
  reviewCards[0].classList.remove('card_invisible');
  reviewCards[0].classList.add('card_inactive');
  if(index===4) index=0;
  showCards(index);
  showActivePage();
}
function showPrev(){
  reviewCards[0].classList.remove('card_invisible');
  reviewCards[0].classList.add('card_inactive');
  index--;
  if(index<0) index=3;
  showCards(index);
  showActivePage();
}
function showActivePage(){
  let idx = index;
  if(index===0) idx=4;
  pagination.forEach((page, indx) => {
    indx===idx-1
    ? page.classList.add('review__page_active')
    : page.classList.remove('review__page_active');
  })
}
