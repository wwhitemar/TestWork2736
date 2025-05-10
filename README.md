# Weather App

Приложение для просмотра погоды, разработанное с использованием Next.js и TypeScript.

## Функциональность

- Поиск погоды по городам
- Просмотр текущей погоды
- Просмотр прогноза погоды на несколько дней
- Сохранение избранных городов
- Адаптивный дизайн

## Технологии

- Next.js 14
- TypeScript
- Zustand (управление состоянием)
- Axios (работа с API)
- Bootstrap (UI компоненты)
- SCSS Modules (стилизация)
- ESLint & Stylelint (линтинг)

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/TestWork2736.git
cd TestWork2736
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте файл `.env.local` и добавьте ваш API ключ OpenWeatherMap:
```
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

4. Запустите приложение:
```bash
npm run dev
```

5. Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере.

## Структура проекта

```
src/
  ├── app/                 # Страницы приложения
  ├── components/          # React компоненты
  ├── services/           # Сервисы для работы с API
  ├── store/             # Управление состоянием (Zustand)
  └── styles/            # SCSS стили
```

## Скрипты

- `npm run dev` - Запуск в режиме разработки
- `npm run build` - Сборка проекта
- `npm start` - Запуск собранного проекта
- `npm run lint` - Проверка кода линтером
- `npm run lint:styles` - Проверка стилей линтером

## Лицензия

MIT 