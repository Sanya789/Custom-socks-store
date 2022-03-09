const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const FileStore = require('session-file-store')(session);
const path = require('path');

// Импортируем созданный в отдельный файлах рутеры.
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const cartRouter = require('./routes/cart')

const app = express();
const PORT = 3000;

// Сообщаем express, что в качестве шаблонизатора используется "hbs".
app.set('view engine', 'hbs');
// Сообщаем express, что шаблона шаблонизаторая (вью) находятся в папке "ПапкаПроекта/views".
app.set('views', path.join(__dirname, 'views'));

// Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" будут находится статические файлы, т.е. файлы доступные для скачивания из других приложений.
app.use(express.static(path.join(__dirname, 'public')));
// Подключаем middleware, которое позволяет читать содержимое body из HTTP-запросов типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());
app.use(cookieParser());

app.use(session({
  store: new FileStore(),
  secret: 'uyefsdhfsdfsjkdfks',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
  name: 'auth',
}));

app.use((req, res, next) => {
  res.locals.user = req.session?.userName;
  res.locals.userid = req.session?.userid;
  next();
});

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/cart', cartRouter);

// app.use((req, res, next) => {
//   if (res.locals.user) {
//     next();
//   }
// });


// app.use('/user', userRouter);
// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил на запрос. Это значит, что искомого раздела просто нет на сайте. Для таких ситуаций используется код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
// app.use((req, res, next) => {
//   const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
//   next(error);
// });

// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил на запрос. Это значит, что искомого раздела просто нет на сайте. Для таких ситуаций используется код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
// app.use((req, res, next) => {
//   const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
//   next(error);
// });

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
