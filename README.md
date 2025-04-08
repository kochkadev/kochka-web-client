# Kochka Web Client

Это клиентская часть веб-приложения, построенная на [Next.js](https://nextjs.org).

## Структура проекта

```
kochka-web-client/
├── src/                    # Исходный код приложения
│   └── app/               # Основная директория приложения
│       ├── (routes)/      # Маршруты приложения
│       ├── api/           # API-эндпоинты
│       └── components/    # React-компоненты
├── public/                # Статические файлы
│   ├── images/           # Изображения
│   └── fonts/            # Шрифты
├── .next/                # Сборка Next.js
├── node_modules/         # Зависимости проекта
└── package.json          # Конфигурация проекта и зависимости
```

## Начало работы

Для запуска проекта в режиме разработки:

```bash
npm run dev
# или
yarn dev
# или
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть результат.

## Структура директорий

- `/src/app` - основная директория приложения, содержащая:
  - `(routes)` - маршруты приложения
  - `api` - API-эндпоинты
  - `components` - React-компоненты
  - `lib` - утилиты и вспомогательные функции
  - `styles` - глобальные стили

- `/public` - статические файлы:
  - `images` - изображения для всего приложения
  - `fonts` - шрифты

## Технологии

- [Next.js](https://nextjs.org) - React-фреймворк
- [TypeScript](https://www.typescriptlang.org) - типизированный JavaScript
- [Tailwind CSS](https://tailwindcss.com) - утилитарный CSS-фреймворк


