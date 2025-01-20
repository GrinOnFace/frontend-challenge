# Cat Pinterest

Веб-приложение для просмотра и сохранения фотографий котиков. Реализовано в рамках тестового задания для стажировки в ВК.

[Посмотреть демо](https://grinonface.github.io/frontend-challenge/)

## Функционал
- Просмотр фотографий котиков с бесконечной прокруткой
- Добавление/удаление котиков в избранное
- Сохранение избранных котиков в localStorage
- Адаптивный дизайн
- Атомарная архитектура компонентов

## Стек технологий
- React 18
- TypeScript
- React Router 6
- SCSS Modules
- Material UI Icons
- ESLint
- Prettier
- Webpack

## Установка и запуск

1. Клонируйте репозиторий

```bash
git clone https://github.com/grinonface/frontend-challenge.git .
```

2. Установите зависимости

```bash
npm install
```

3. Запустите проект локально

```bash
npm run start
```

4. Создайте .env файл в корне проекта и добавьте в него ключ, который вы можете получить на [сайте](https://thecatapi.com/). Добавьте его следующим образом:	

```bash
CAT_API_KEY='your_api_key' (замените на ваш ключ)
```

5. Откройте браузер и перейдите по адресу http://localhost:3000	

## Линтеры

- ESLint
- Prettier

1. Запуск проверок

```bash
npm run lint
```

2. Исправление ошибок

```bash
npm run lint:fix
```

3. Запуск форматирования

```bash
npm run format
```

## Сборка проекта

1. Сборка проекта

```bash
npm run build
```

## Деплой проекта

1. Деплой проекта осуществляется на GitHub Pages.

2. Для деплоя проекта необходимо ввести команду:

```bash
npm run deploy
```
## Структура проекта

src 
├── api/ # API клиенты и типы
├── atoms/ # Атомарные компоненты
├── molecules/ # Молекулярные компоненты
├── organisms/ # Организмы
├── templates/ # Шаблоны страниц
├── pages/ # Страницы
├── hooks/ # Кастомные хуки
├── constants/ # Константы
├── types/ # TypeScript типы


