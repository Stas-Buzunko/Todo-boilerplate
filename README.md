## Бойлерплейт для крутого практического задания.

Библиотеки, которые будут использоваться

React + React-router + Firebase.

Все эти библиотеки уже есть в проекте.

Вся документация прилагается.

Для того чтобы приступить к выполнению задания нужно:
- Форкнуть этот репозиторий
- npm install
- npm start

Теперь собственно задание. Вы будете делать простой и всем уже надоевший Todo List, но в более интересной форме.
У нас будет 3 страница: страница Логина, страница Регистрации и страница с нашим todo списком.

Страница с Todo списком доступна только после логина.

В качестве бэкенда и базы данных используем <a href="https://firebase.google.com/docs/web/setup">Firebase</a>.
Для быстрого и легкого дизайна используем <a href="react-bootstrap.github.io">React Bootstrap</a>.
Для роутера используем абы какую 4-ую, но все же самую новую версию роутера <a href="https://reacttraining.com/react-router/">React router 4</a>.

Порядок выполнения задания:

1) Создаем наши 3 страницы просто с текстом и настраиваем роутер чтобы при нужном url показывалась нужная страница. Роуты храним лучше всего в index.js, но можно и в App.js. Если что-то непонятно, смотрим документацию, там есть примеры.
2) На основной странице с списком создаем как минимум 2 компонента + поле для ввода и кнопка.
а) Компонент списка Todo, отрисосывает все Todo
б) Компонент который отрисовывает 1 Todo
в) Поле для ввода - обычный контролируем инпут для текста + кнопка сохранить. Тут можно прочитать, что такое <a href="https://facebook.github.io/react/docs/forms.html#controlled-components">Controlled input</a>
г) При клике на кнопку, данные из инпута добавляются в state и инпут очищается.
д) Соответственно происходит перерисовка данных и должен появиться новый пункт в списке.
3) Далее создаем новое приложение на Firebase <a href="https://console.firebase.google.com/">тут</a>
4) После создания копируем настройки приложения, которые показаны после регистрации на Firebase, и вставляем их в index.js на свое место и раскоменчиваем эти строки кода.
```
  apiKey: '*************',
  authDomain: '*************.firebaseapp.com',
  databaseURL: 'https://*************.firebaseio.com',
  storageBucket: '*************.appspot.com',
  messagingSenderId: '*************'
```
5) Теперь мы можем импортировать Firebase в любом файле и он будет иметь настройки нашего приложения.
6) На странице регистрации делаем 2 поля почта + пароль + кнопка зарегистрироваться. <a href="https://firebase.google.com/docs/auth/web/password-auth">Документация по регистраниции</a> 
7) Аналогично на странице Входа. Документация по той же ссылке.
8) Бонус задание, добавить Вход через Google.
9) Теперь у нас есть юзер. Добавляем проверку на странице TodoList, что если нет юзера, то редирект на станицу логина
10) Осталось совсем ничего. При нажатии на кнопку добавить / сохранить Todo нужно сохранять в базу данных (на самом деле это очень просто) и также очищать инпут. Про сохранение читает <a href="https://firebase.google.com/docs/database/web/read-and-write">здесь</a>
11) Классно, вы можете зайти в <a href="firebase.google.com/console/">Консоль проекта на Firebase</a> -> Свой проект -> Database и убедится, что данные сохраняются.
12) Осталось совсем ничего, нужно запрашивать данные именно для нашего юзера из базы данных. Реализация может варьироваться от того, как вы сохраняете данные, в любом случае <a href="https://firebase.google.com/docs/database/web/read-and-write">здесь</a> есть все примеры.
13) И да, мы забыли самое главное, нужно добавить возможность зачеркивать / удалять Todo при выполнении! Интереснее, конечно, сделать зачеркивание, а не просто удаление, т.к. тогда можно будет добавить фильтрацию Выполненные / Невыполненные / Все Todo. Это будет задание на 10 баллов.
14) Итак, кто хочет попроще, то при клике на Todo просто <a href="https://firebase.google.com/docs/database/web/read-and-write#delete_data">удаляем из базы банных</a>, кто хочет посложнее, те обновляют статус Todo на выполненный и добавляют 3 вкладки или фильтра Выполненные / Невыполненные / Все Todo.
15) Ну и какой же проект без деплоя приложения! Устанавливаем <a href="https://www.npmjs.com/package/firebase-tools">firebase-tools</a>, npm ruin build и firebase deploy, когда спросят какую папку использовать для загрузки, укажите папку build.

Подробнее описать уже некуда. На выходе у вас получится вполне солидное приложение, которое можно будет с гордостью добавить в портфолио, но что важнее, вы сможете в будущем быстро создавать небольшие приложения используя Firebase.

Всем удачи!
