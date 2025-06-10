

export default function getIcon(name, size = 24, styles = []) {
    return `<div
        class="icon"
        style="${styles.join('; ')}"
    >
        <svg
            fill="none"
            height={size}
            viewBox="0 0 ${size} ${size}"
            width="${size}"
        >
            ${resolveIconSvg(name)}
        </svg>
    </div>`
}