import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Reels Finder Docs',
			sidebar: [
				{
					label: 'Начало работы',
					items: [
						{ label: 'Введение', link: '/' },
						{ label: 'Контекст проекта', link: '/context' }
					]
				},
				{
					label: 'Общие компоненты',
					items: [
						{ label: 'Шапка', link: '/common/header' },
						{ label: 'Карточка рила', link: '/common/reel' },
						{ label: 'Управление отображением', link: '/common/reels-controls' },
						{ label: 'Сетка рилсов', link: '/common/reels-grid' },
						{ label: 'Ограничения доступа', link: '/common/paywall' }
					]
				},
				{
					label: 'Основной функционал',
					items: [
						{ label: 'Поиск', link: '/features/search' },
						{ label: 'Подборки', link: '/features/collections' },
						{ label: 'Избранное', link: '/features/favorites' },
						{ label: 'Подписки', link: '/features/subscriptions' },
						{ label: 'Профиль', link: '/features/profile' }
					]
				},
				{
					label: 'Разработка',
					items: [
						{ label: 'План работы', link: '/todo' },
						{ label: 'Предложения', link: '/proposals' }
					]
				}
			]
		})
	]
});
