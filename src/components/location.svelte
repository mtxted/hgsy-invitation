<script lang="ts">
	import locationTopWave from '$lib/assets/location-top-wave.svg';

	import locationDeco from '$lib/assets/location-deco.svg';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { Clipboard } from '@lucide/svelte';

	import { onMount } from 'svelte';
	let mapContainer: HTMLDivElement;

	declare const naver: any;

	onMount(() => {
		const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

		if (!window.naver && !document.querySelector('#naver-map-script')) {
			const script = document.createElement('script');
			script.id = 'naver-map-script';
			script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
			script.async = true;

			script.onload = () => {
				initMap(); // 스크립트 로드 후 지도 생성
			};

			document.head.appendChild(script);
		} else if (window.naver) {
			// 이미 로드된 경우 바로 실행
			initMap();
		}

		function initMap() {
			const map = new naver.maps.Map('map', {
				center: new naver.maps.LatLng(37.5372449, 127.1319906),
				zoom: 15,
				minZoom: 10,
				maxZoom: 18,
				zoomControl: true,
				zoomControlOptions: {
					position: naver.maps.Position.RIGHT_BOTTOM
				},
				mapTypeControl: true,
				mapTypeControlOptions: {
					position: naver.maps.Position.LEFT_TOP
				},
				draggable: true
			});

			new naver.maps.Marker({
				position: new naver.maps.LatLng(37.5372449, 127.1319906),
				map: map,
				title: '루벨',
			});
		}
	});


function copyAddress() {
		navigator.clipboard
			.writeText('예식장 주소3')
			.then(() => alert($_('location.address_copied')))
			.catch(() => null);
	}

</script>

<img src={locationTopWave} class="location-top-wave" alt="" />
<section class="location">
	<h2 class="title {localeStore.locale}">{$_('location.title')}</h2>
	<p class="venue en">루벨</p>
	<button class="copy-address en" onclick={copyAddress}>
		<span class="clipboard-icon">
			<Clipboard size="1.1em" />
		</span>
		<span class="address">서울 강동구 천호대로 1077 이스트센트럴타워 35~36층</span></button
	>
	<div id="map" bind:this={mapContainer}></div>
	<p class="signature">made with ♡ by 변현규 박서윤</p>
	<img class="location-deco" src={locationDeco} alt="" />
</section>

<style lang="scss">
  #map {
    width: 100%;
    height: 16em;
    margin-bottom: 7em;
    margin-top: 2em;
    border-radius: 12px;
  }

	img.location-top-wave {
		max-width: $content-max-width;
		margin: auto;
	}

	section.location {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		background-color: $bg-color-1;
		padding: 1em 0;
	}

	h2.title {
		color: $primary-color;
		text-align: center;
		margin-bottom: 1em;

		&.kr {
			@extend .title-font-kr;
			letter-spacing: 1px;
		}

		&.en {
			@extend .title-font-en;
			letter-spacing: 1px;
		}
	}

	p.venue {
		&.en {
			font-size: 2rem;
		}
	}

	button.copy-address {
		display: flex;
		align-items: center;
		margin-top: 0.5em;

		.clipboard-icon {
			height: 1em;
			display: inline-block;
			margin-right: 0.2em;
			color: $font-color-default;
		}

		.address {
			display: inline-block;
			font-size: 1.2rem;
			text-decoration: underline;
		}
	}

	p.signature {
		font-size: 1rem;
	}

	img.location-deco {
		position: absolute;
		bottom: 2.5em;
		right: 1.5em;
	}
</style>
