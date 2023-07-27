# Приложение КВИЗ
---
## 🔗 Ссылка на деплой
[![quiz-app](https://custom-icon-badges.demolab.com/badge/fire-red.svg?logo=fire&logoColor=fff)](https://client-quiz.vercel.app)

## Author

- [SimpleCoderr](https://github.com/SimpleCoderr)

## Стек технологий

React, Redux, Redux-thunk, Typescript, Webpack, Node.js, Express, Ant Design, Jest, Vercel
 
## Запус проекта

Клонирование проекта

```bash
  git clone https://github.com/SimpleCoderr/fullstask-quiz
```

Переходим в папку с проектом

```bash
  cd fullstack-quiz
```

Далее нужно открыть два терминала
1) Команды в первом терминале:
    1. 
    ```bash 
    cd server
    ```
    2. 
    ```bash 
    npm install
    ```
    3. 
    ```bash 
    npm run dev
    ```
2) Команды во втором терминале:
    1. 
    ```bash 
    cd client
    ```
    2. 
    ```bash 
    npm install
    ```
    3. 
    ```bash 
    npm start
    ```

## Запуск тестов

Для запуска тестов в папке client введите

```bash
  npm run test
```

---
Проверить созданных пользователей можно будет по адресу <http://localhost:5000/api/users>
---

## Немного о приложении

- Приложение содержит в себе тест из 10 вопросов на знание столиц Европы, вопросы каждый раз __подбираются случайным образом__ (в вопросе может спрашиваться любая столица из стран Европы(всего 45 стран)), также __случайно подбираются и ответы__ к вопросу (всегда только один ответ правильный);
- Приложение имеет __регистрацию и авторизацию пользователей посредством JWT токенов__(access & refresh);
- Клиентская часть приложения построена по архитектуре __Feature sliced Design__ ;
- Реализована __пагинация__ (вопросы в тесте выводятся постранично - по 5 на одной странице);
- __Добавлен таймер__, по истечении времени которого, ответы блокируются и выводится результат теста;
