# Приложение КВИЗ

## 🔗 Ссылка на деплой
[![quiz-app](https://custom-icon-badges.demolab.com/badge/fire-red.svg?logo=fire&logoColor=fff)](https://client-quiz.vercel.app)

## Author

- [SimpleCoderr](https://github.com/SimpleCoderr)

## Стек технологий

React, Redux, Redux-thunk, Typescript, Webpack, Node.js, Express, Ant Design, Jest, Vercel
 
## Запус проекта

Клонирование проекта

```bash
  git clone https://github.com/SimpleCoderr/quiz-app-fullstack.git
```

Переходим в папку с проектом

```bash
  cd quiz-app-fullstack
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

- Приложение содержит в себе тест из 10 вопросов на знание столиц Европы, вопросы каждый раз _подбираются случайным образом_ (в вопросе может спрашиваться любая столица из стран Европы(всего 45 стран)), также _случайно подбираются и ответы_ к вопросу (всегда только один ответ правильный);
- Приложение имеет _регистрацию и авторизацию пользователей посредством JWT токенов_(access & refresh);
- Клиентская часть приложения построена по архитектуре _Feature sliced Design_ ;
- Реализована _пагинация_ (вопросы в тесте выводятся постранично - по 5 на одной странице);
- _Добавлен таймер_, по истечении времени которого, ответы блокируются и выводится результат теста;
