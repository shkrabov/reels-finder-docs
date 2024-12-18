---
title: Шапка
description: Основная навигация и профиль пользователя
sidebar:
  order: 1
---

Компонент верхнего уровня для навигации по разделам и доступа к профилю.

## Структура

### Основная навигация
- Логотип "Reels Finder"
- Разделы:
  - Поиск
  - Подборки
  - Избранное
  - Подписки (с индикатором новых рилсов)

### Профиль
- Email пользователя
- Статус подписки (осталось дней)

## Поведение

### Навигация
- Подсветка текущего раздела
- Переход между разделами
- Сохранение состояния раздела
- Индикация новых рилсов в подписках:
  - Появляется при наличии новых рилсов
  - Сбрасывается после просмотра
  - Обновляется автоматически

### Профиль
- Отображение email
- Индикация оставшихся дней подписки
- Выход по клику на кнопку

## Технические заметки

### Edge cases
- Длинный email
- Истекающая подписка
- Ошибка сессии
- Рассинхронизация индикатора новых рилсов