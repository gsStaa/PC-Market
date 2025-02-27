# Сайт "Магазин компьютерной техники"

Это веб-приложение для продажи компьютерной техники и акссесуаров, разработанное с использованием технологий React, TypeScript и Vite. Сайт предлагает удобный интерфейс для просмотра и выбора компьютерного оборудования, включая фильтры и функционал оформления заказов.

## Функциональность

1. **Каталог товаров**

   - Полный список компьютерной техники и акссесуаров с подробными характеристиками.

2. **Фильтрация товаров**

   - Возможность сортировки товаров по ключевым параметрам.

3. **Корзина и оформление заказа**

   - Добавление товаров в корзину.
   - Автоматический подсчет стоимости заказа.
   - Обновление данных о товарах после покупки.

4. **Личный кабинет**
   - Авторизация и регистрация, с валидацией введеных данных, через Firebase.
   - Сохранение данных пользователя для оформления заказов.

## Особенности реализации

- **Авторизация пользователей**: Регистрация и вход с использованием Firebase Authentication.
- **Управление запасами товаров**: Количество товаров автоматически уменьшается, либо товар помечается как недоступный после покупки.
- **Оптимизация состояния приложения**: Управление состоянием через Redux Toolkit для упрощения работы с данными пользователя и товаров.
- **Быстрая разработка**: Использование Vite для сборки проекта и улучшения производительности.

## Технологии

- **React**
- **TypeScript**
- **Redux Toolkit**
- **React Router**
- **Firebase**
- **Bootstrap**
- **Vite**

# Запуск проекта

1. **Клонируйте репозиторий.**

2. **Установите зависимости**:
   ```bash
   npm install

   ```
3. **Запустите приложение локально**:
   ```bash
   npm run dev
   ```

## Скриншоты

### Главная страница

![Главная страница](./public/screenshots/screencapture-localhost-5173-2025-02-27-22_20_49.png)

### Каталог товаров

![Каталог товаров](./public/screenshots/screencapture-localhost-5173-ProductsPage-Computers-2025-02-27-22_21_48.png)

### Корзина

![Корзина](./public/screenshots/screencapture-localhost-5173-CartPage-2025-02-27-22_22_02.png)
