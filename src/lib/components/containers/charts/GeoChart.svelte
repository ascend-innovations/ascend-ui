<script>
	import 'leaflet/dist/leaflet.css'
	import { browser } from '$app/environment'
	import { afterUpdate } from 'svelte'

	export let data,
		pillText,
		pillKey,
		addressKey,
		mapId = 'map',
		infoTitleKey,
		infoLink = false,
		linkKey = '',
		contentKey,
		geoJSON = null

	$: data = data
	let map

	afterUpdate(async () => {
		const L = await import('leaflet')
		let coordinates = [],
			geoJsonBounds = [],
			latLngBounds,
			derivedMapCenter

		if (browser) {
			// Destroy existing map (if applicable) to redraw map with new data
			if (map) {
				map.remove()
			}

			map = L.map(mapId)

			if (geoJSON !== null) {
				if (Array.isArray(geoJSON)) {
					for (let zip of geoJSON) {
						const geoPoly = L.geoJSON(zip, zip.options).addTo(map)
						geoJsonBounds.push(geoPoly.getBounds())

						const popup = L.popup()
							.setLatLng(geoPoly.getBounds().getCenter())
							.setContent(`${infoLink ? `<a href=${zip[linkKey]} style="color:inherit;text-decoration:none;">` : ''}` + `<div {id} class="geo-chart-tooltip" style="max-width:260px;">` + `<p style="font-size:16px;"><b>${zip.properties['zip_code']}</b></p>` + `<div>` + `<p style="font-size:14px;">${pillText}: ${zip[pillKey]}</p>` + `</div>` + `</div>` + `${infoLink ? '</a>' : ''}`)

						geoPoly.bindPopup(popup)
					}

					const maxBounds = L.latLngBounds(geoJsonBounds[0])
					for (let i = 1; i < geoJsonBounds.length; i++) {
						maxBounds.extend(geoJsonBounds[i])
					}

					latLngBounds = maxBounds.pad(0)
				} else {
				}
			} else {
				// Calculate map zoom bounds to fit all data points
				for (let point of data) {
					coordinates.push([point.lat, point.lng])
				}
				latLngBounds = L.latLngBounds(coordinates).pad(0.2)
				derivedMapCenter = latLngBounds.getCenter()
				map.setView([derivedMapCenter.lat, derivedMapCenter.lng])
			}

			// Draw the map and tile background
			map.fitBounds(latLngBounds)

			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
				attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
				opacity: geoJSON ? 0.5 : 1,
			}).addTo(map)

			// Construct and render markers with their info popups attached
			if (data.type !== 'Feature') {
				for (let point of data) {
					const icon = L.icon({
						iconUrl: point.marker,
					})

					const popup = L.popup({
						offset: [24, 24],
					})
						.setLatLng(point.lat, point.lng)
						.setContent(
							`${infoLink ? `<a href=${point[linkKey]} style="color:inherit;text-decoration:none;">` : ''}` +
								`<div {id} class="geo-chart-tooltip" style="max-width:260px;">` +
								`<p style="font-size:16px;"><b>${point.type === 'home' ? 'Home Address' : point[infoTitleKey]}</b></p>` +
								`<div>` +
								contentKey ? `<p>${point[contentKey]}</p>` : "" + 
								`${point.type === 'home' ? `<p style="font-size:14px;">${point[addressKey]}</p>` : `<p style="font-size:14px;">${pillText}: ${point[pillKey]}</p>`}` +
								`</div>` +
								`</div>` +
								`${infoLink ? '</a>' : ''}`,
						)

					const marker = L.marker([point.lat, point.lng], { icon: icon }).addTo(map)
					marker.bindPopup(popup)
				}
			} else {
			}
		}
	})
</script>

<div
	id={mapId}
	class="border-radius-s map"
>
	<!-- Map is drawn here -->
</div>

<style>
	.map {
		position: relative;
		height: 100%;
	}
</style>
