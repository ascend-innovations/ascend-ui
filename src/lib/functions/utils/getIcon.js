// import { getGlobalColorPalette } from '../styling/getGlobalColorPalette.js'
import resolveIconSvg from './resolveIconSvg.js'

export default function getIcon(name, size = 24, styles = [], colorOverride = null) {
    let palette = {} // getGlobalColorPalette()

    return `
    <div
        class="icon"
        style="${styles.join('; ')}"
    >
        <svg
            fill="none"
            height={size}
            viewBox="0 0 ${size} ${size}"
            width="${size}"
        >
            ${resolveIconSvg(name, palette, colorOverride)}
        </svg>
    </div>`
}