---
title: Reels Finder
description: Полная документация по использованию Reels Finder
sidebar:
  order: 1
---

# Reels Finder - Документация

## Общее описание
Интерфейс для поиска и просмотра reels-видео с возможностью фильтрации, сортировки и подписки на результаты поиска.

## Компоненты

### Header
- Навигационное меню: Поиск, Подборки, Избранное, Подписки
- Email пользователя и время подписки являются ссылками на профиль пользователя

### Поисковая система
- Поисковая строка с поддержкой множественных запросов:
  - Запросы вводятся через запятую
  - Каждый запрос преобразуется в отдельный тег
  - Теги можно удалять по отдельности
- Выбор области поиска:
  - По названию профиля
  - По описанию профиля
  - По хештегам рилза
  - По описанию рилза
- Кнопка "Подписаться" - создает подписку на поиск с текущими параметрами фильтрации:
  - Сохраняет все активные фильтры и поисковые запросы
  - При появлении новых рилов, соответствующих критериям, появляется индикатор
- При совпадении с несколькими критериями рилз отображается один раз

### Фильтры
Модальное окно с фильтрами:
- Настройки сохраняются в браузере
- При возвращении предлагается восстановить последние настройки
- Исключение аккаунтов:
  - Ввод через запятую
  - Каждый аккаунт отображается как отдельный тег
  - Возможность удаления отдельных тегов
  - Рилзы исключенных аккаунтов не показываются в результатах
- Диапазоны для метрик:
  - Подписчиков (от-до)
  - Просмотров reels (от-до)
  - Лайков (от-до)
  - Комментариев (от-до)
  - Репостов (от-до)
- Дата публикации (календарь)
- Возможность сброса отдельных фильтров
- Кнопка "Сбросить все"
- Кнопка "Применить"

### Сортировка
Доступные опции:
- Просмотры: сначала больше/меньше
- Комментарии: сначала больше/меньше
- Лайки: сначала больше/меньше
- Репосты: сначала больше/меньше

### Карточка рила
Функциональность:
- Превью с возможностью воспроизведения видео прямо в сетке
- Метрики (статистические данные из базы):
  - Количество просмотров
  - Количество лайков
  - Количество комментариев
  - Количество репостов
- Информация об авторе и ссылка на профиль
- Действия:
  - Добавление в подборки (множественный выбор)
  - Создание новой подборки
  - Скачивание рила
  - Переход к публикациям аккаунта
  - Подписка на обновления аккаунта
- Возможность открытия в модальном окне для детального просмотра

### Сетка контента
- Бесконечная подгрузка контента порциями
- Количество карточек в ряду определяется разработчиком

## Состояния

### Загрузка
- Скелетон при первичной загрузке
- Скелетон при подгрузке следующей порции контента

### Пустое состояние
- Информационное сообщение при отсутствии результатов поиска

### Ошибки
Предполагаемые сценарии:
- Ошибка загрузки данных
- Ошибка применения фильтров
- Ошибка воспроизведения видео
- Ошибка при создании подписки
- Ошибка при работе с подборками

### Система уведомлений
- Индикаторы новых рилов:
  - В основной навигации на разделе "Подписки"
  - В сайдбаре у соответствующих подборок
- Группировка уведомлений по подпискам
- Автоматическое обновление при появлении новых рилов
- Индикаторы нового контента
- Отображение точки-индикатора:
  - В основной навигации у раздела "Подписки"
  - В сайдбаре рядом с подписками, где появился новый контент
- Индикатор исчезает после просмотра соответствующего раздела