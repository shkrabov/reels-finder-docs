import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://shkrabov.github.io',
	base: '/reels-finder-docs',
	integrations: [
		starlight({
			title: 'Reels Finder',
			social: {
				github: 'https://github.com/shkrabov/reels-finder-docs',
			},
			sidebar: [
				{
					label: 'Введение',
					items: [
						{ label: 'Обзор', link: '/' },
					],
				},
				{
					label: 'Основные разделы',
					items: [
						{ label: 'Поиск', link: '/features/search' },
						{ label: 'Подборки', link: '/features/collections' },
						{ label: 'Избранное', link: '/features/favorites' },
						{ label: 'Подписки', link: '/features/subscriptions' },
					],
				},
				{
					label: 'Управление аккаунтом',
					items: [
						{ label: 'Авторизация', link: '/features/auth' },
						{ label: 'Профиль', link: '/features/profile' },
					],
				},
				{
					label: 'Общие механизмы',
					items: [
						{ label: 'Карточка рила', link: '/common/reel' },
						{ label: 'Поиск и фильтрация', link: '/common/search' },
						{ label: 'Уведомления', link: '/common/notifications' },
						{ label: 'Система подписки', link: '/common/subscription' },
					],
				},
			],
		}),
	],
});
