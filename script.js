const image = document.querySelector("#image");
const question = document.querySelector("h2");
const answer = document.querySelector("h1");

const buttonLeft = document.querySelector("#left");
const buttonRight = document.querySelector("#right");

buttonLeft.addEventListener("click", stavrogin);
buttonRight.addEventListener("click", kirillov);




function stavrogin(){
    image.setAttribute("src","st.jpeg");
    answer.textContent = "СТАВРОГИН ТОЖЕ";
    question.textContent = "ВАС ПРЕСЛЕДУЮТ НЕПОНЯТНЫЕ ЛЮДИ?";
    buttonLeft.textContent = "ДА";
    buttonRight.textContent = "НЕТ";

    buttonLeft.addEventListener("click", stalker);
    buttonRight.addEventListener("click", stalkerNoN);
}
function stalker(){
    image.setAttribute("src","https://i.pinimg.com/originals/08/cb/b1/08cbb19f3c975ee38613c01b560e513f.jpg");
    answer.textContent = "—– Помешанный! — прошептал Ставрогин. –– Может, и брежу, может, и брежу! –– Вы именно таков, какого надо. Вы предводитель, вы солнце, а я ваш червяк...";
    question.textContent = "У ВАС ЕСТЬ НЕОБЫЧНЫЕ УВЛЕЧЕНИЯ?";
    buttonLeft.textContent = "ДА";
    buttonRight.textContent = "НЕТ";

    buttonLeft.addEventListener("click", papillion);
    buttonRight.addEventListener("click", girls);
}
function stalkerNoN(){
    image.setAttribute("src","https://ruskino.ru/media/gallery/16338/f0O0AG9MSsRZSUWJ4rH41310oEO.jpg");
    answer.textContent = "МОЖЕТ БЫТЬ ВЫ В ВОЗРАСТЕ И СТАТНЫ КАК СТЕПАН ТРОФИМОВИЧ...?";
    question.textContent = "У ВАС ЕСТЬ НЕОБЫЧНЫЕ УВЛЕЧЕНИЯ?";
    buttonLeft.textContent = "ДА";
    buttonRight.textContent = "НЕТ";

    buttonLeft.addEventListener("click", papillion);
    buttonRight.addEventListener("click", girls);
}

function papillion(){
    image.setAttribute("src","https://vokrug.tv/pic/news/1/2/a/a/12aac550cc6e914a816a91a335473e8c.jpeg");
    answer.textContent = "-– Ужас. –– Какой же это ужас? Это красота в приближении к ней. А это все призрак красоты, иллюзия. Кто увидел красоту воочию, тот уже отмечен знаком смерти. –– Вы очень больны.";    question.textContent = "";
    question.textContent = "У ВАС ЕСТЬ ЗАКАДЫЧНЫЕ ДРУЗЬЯ?";
    buttonLeft.textContent = "ДА";
    buttonRight.textContent = "НЕТ";

    buttonLeft.addEventListener("click", friends);
    buttonRight.addEventListener("click", friendsNone);
}

function girls(){
    image.setAttribute("src","https://sun9-88.userapi.com/impg/c857432/v857432728/1f49ca/agojjWdaDGs.jpg?size=807x456&quality=96&sign=3a8ff0d96136a5870b4cddc7ec97f7e7&type=album");
    answer.textContent = "А окружающие так не считают";
    question.textContent = "У ВАС ЕСТЬ ЗАКАДЫЧНЫЕ ДРУЗЬЯ?";
    buttonLeft.textContent = "ДА";
    buttonRight.textContent = "НЕТ";

    buttonLeft.addEventListener("click", friends);
    buttonRight.addEventListener("click", friendsNone);
}

function kirillov(){
    image.setAttribute("src","https://www.kino-teatr.ru/movie/kadr/106373/528347.jpg");
    answer.textContent = "КИРИЛЛОВ СЧИТАЕТ, ЧТО ЛУЧШАЯ ДУЭЛЬ –– ТА, КОТОРАЯ С САМИМ СОБОЙ";
    question.textContent = "А В БОГА ВЕРУЕТЕ?";
    buttonLeft.textContent = "ДА";
    buttonRight.textContent = "НЕТ";

    buttonLeft.addEventListener("click", god);
    buttonRight.addEventListener("click", godNone);
}

function god(){
    image.setAttribute("src","van.jpg");
    question.textContent = "У ВАС ЕСТЬ ЗАКАДЫЧНЫЕ ДРУЗЬЯ?";
    answer.textContent = "–– Я верую в Россию, я верую в её православие... Я верую в тело Христово... Я верую, что новое пришествие совершится в России... Я верую... –– залепетал в исступлении Шатов. –– А в бога? В бога? –– Я... я буду веровать в бога.";
    buttonLeft.textContent = "ДА";
    buttonRight.textContent = "НЕТ";

    buttonLeft.addEventListener("click",friends);
    buttonRight.addEventListener("click",friendsNone );
}
function godNone(){
    image.setAttribute("src","kir.jpg");
    answer.textContent = "Жизнь есть боль, жизнь есть страх, и человек несчастен. Теперь всё боль и страх. Теперь человек жизнь любит, потому что боль и страх любит. И так сделали. Жизнь даётся теперь за боль и страх, и тут весь обман. Теперь человек ещё не тот человек. Будет новый человек, счастливый и гордый. Кому будет всё равно, жить или не жить, тот будет новый человек. Кто победит боль и страх, тот сам бог будет. А тот бог не будет. Вся свобода будет тогда, когда будет всё равно, жить или не жить. Вот всему цель.";
    question.textContent = "У ВАС ЕСТЬ ЗАКАДЫЧНЫЕ ДРУЗЬЯ?";

    buttonLeft.textContent = "ДА";
    buttonRight.textContent = "НЕТ";

    buttonLeft.addEventListener("click", friends);
    buttonRight.addEventListener("click", friendsNone);
}

function friends(){
    image.setAttribute("src","https://i.pinimg.com/originals/9d/de/0f/9dde0fd649b5ae4adac382a2cd4c1705.jpg");
    question.textContent = "ВЫ МОЯ ЛУЧШАЯ ПОЛОВИНА, БЕЗ ВАС Я НУЛЬ!";
    answer.textContent = "Ставрогин, вы красавец. Вы мой идол. Вы никого не оскорбляете, и вас все ненавидят. Вы держитесь со всеми ровно, и вас все боятся. Это хорошо. Вы ужасный аристократ. Аристократ, когда идет в демократию, обаятелен. Вам ничего не значит пожертвовать жизнью ни своей, ни чужой. Вы именно таков, какого надо.";
    buttonLeft.style = "display: none";
    buttonRight.style = "display: none";
}

function friendsNone(){
    image.setAttribute("src","https://i.pinimg.com/originals/58/ec/4e/58ec4efa67c5573ee3b0f19dd7f6880c.jpg");
    answer.textContent = " –– Разве я не буду целовать следов ваших ног, когда вы уйдете? Я не могу вас вырвать из моего сердца, Николай Ставрогин!";
    question.textContent = "А ОКРУЖАЮЩИЕ ТАК НЕ ДУМАЮТ";
    buttonLeft.style = "display: none";
    buttonRight.style = "display: none";
}


