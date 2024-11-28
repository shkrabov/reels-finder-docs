import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://shkrabov.github.io/reels-finder-docs/',
	base: '/reels-finder-docs',
	integrations: [
		starlight({
			title: 'Reels Finder',
			social: {
				github: 'https://github.com/shkrabov/reels-finder-docs',
			},
			sidebar: [
				{
					label: 'Начало работы',
					items: [
						{ label: 'Введение', link: '/' },
						{ label: 'Установка', link: '/getting-started/installation' },
					],
				},
				{
					label: 'Основные функции',
					items: [
						{ label: 'Поиск', link: '/features/search' },
						{ label: 'Фильтрация', link: '/features/filters' },
						{ label: 'Сортировка', link: '/features/sorting' },
					],
				},
				{
					label: 'Компоненты',
					items: [
						{ label: 'Обзор', link: '/components/' },
						{ label: 'Карточка рила', link: '/components/reel-card' },
						{ label: 'Поисковая строка', link: '/components/search-bar' },
						{ label: 'Фильтры', link: '/components/filters' },
					],
				},
				{
					label: 'Авторизация',
					items: [
						{ label: 'Обзор', link: '/auth/' },
						{ label: 'Вход', link: '/auth/login' },
						{ label: 'Регистрация', link: '/auth/registration' },
					],
				},
			],
		}),
	],
});
