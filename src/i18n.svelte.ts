import { getLocaleFromQueryString, init, isLoading, locale, register } from 'svelte-i18n';

register('kr', () => import('./locales/kr.json'));

init({
	fallbackLocale: 'kr',
	initialLocale: getLocaleFromQueryString('lang')
});

class LocaleStore {
	isLoading = $state(true);
	locale: string | undefined | null = $state(undefined);
	isKr = $derived(this.locale === 'kr');

	constructor() {
		isLoading.subscribe((isLoading) => {
			this.isLoading = isLoading;
		});

		locale.subscribe((locale) => {
			if (locale && !['kr'].includes(locale)) {
				this.locale = 'kr';
			} else {
				this.locale = locale;
			}
		});
	}
}

export const localeStore = new LocaleStore();
