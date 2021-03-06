# Сервис для продажи кастомных носков


<details> 
<summary>Сведения для запуска</summary>

* Установить node модули используя команду npm i
* Создать базу данных (в проекте используется диалект postgres)
* Откорректировать файл db/database.json в соответствие с Вашими параметрами БД
* Запуск осуществляется командой npm start

</details>

<details> 
<summary>Идея проекта</summary>
<p>

Идея в том, что пользователь не покупает готовые носки, а создаёт носки сам. 
Мы даём ему три настраиваемых параметра: цвет, картинка и узор. Выбрав все 
три он получает на выходе уникальный носок, который может положить в корзину 
и купить.
 
Проект реализован на JS с использованием технологий Express, HBS, PostgreSQL.

</p>
</details>

### Главная страница и разделы сайта

![1](https://user-images.githubusercontent.com/85242569/157451637-d5b330ec-c1ec-453a-9674-2c4397df1ed8.gif)

* Шапка
  * Логотип
  * Кнопка для входа
  * Кнопка для регистрации
  * Ссылка на страницу избранного
  * Ссылка на страницу корзины
* Приветственный текст
* Ссылка на генератор носков
* Футер

### Регистрация и авторизация пользователей

При регистрации пользователей создается личный кабинет, профиль пользователя записывается в базу данных

![2](https://user-images.githubusercontent.com/85242569/157452533-2907e89f-ab8e-4c95-b836-0c65268c4f7f.gif)

### Генератор носков

* Выбор базового цвета
  * Цвет выбирается из заранее заданной палитры цветов
* Выбор картинки
  * Картинки зашиты в приложение
* Выбор узора
  * Узоры зашиты в приложение
* Отображение готового дизайна в реальном времени
  * При каждом изменении мы сразу видим итоговый дизайн носков
* Кнопка добавления в избранное
* Кнопка добавления в корзину

![3](https://user-images.githubusercontent.com/85242569/157452721-716f2a96-3c68-4dde-8a55-049f21138143.gif)

### Избранное

* Список добавленных в избранное носков
* Возможность добавлять и удалять носки из избранного

![4](https://user-images.githubusercontent.com/85242569/157452946-535a27e9-cdf3-4d17-8e3d-7eff36926c09.gif)

### Корзина

* Список добавленных в корзину дизайнов носков
* Возможность удалять носки из корзины
* Кнопка оформления заказа

![5](https://user-images.githubusercontent.com/85242569/157453080-6f7df209-7985-4b61-812d-c756816e4e46.gif)


## 
