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


app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
