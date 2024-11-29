import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'

export default defineConfig({
	base: '/reels-finder-docs',
	integrations: [
		starlight({
			title: 'Reels Finder Docs',
			plugins: [starlightLinksValidator()],
			sidebar: [
				{
					label: 'Начало работы',
					items: [
						{ label: 'Введение', link: '/' }
					]
				},
				{
					label: 'Общие компоненты',
					items: [
						{ label: 'Шапка', link: '/common/header' },
						{ label: 'Управление отображением', link: '/common/reels-controls' },
						{ label: 'Сетка рилсов', link: '/common/reels-grid' },
						{ label: 'Карточка рилса', link: '/common/reel' },
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
				}
			]
		})
	]
});
