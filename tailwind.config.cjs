/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],  
  darkMode: 'class',
	theme: {
		extend: {
			textColor: {
				skin: {
					base: 'var(--color-text-base)',
					main: 'var(--color-text-main)',
					muted: 'var(--color-text-muted)',
					inverted: 'var(--color-text-inverted)',
					selected: 'var(--color-text-selected)',
					mutedinverted: 'var(--color-text-muted-inverted)'
				}
			},
			fill: {
				base: 'var(--color-fill)',
				hover: 'var(--color-fill-hover)',
				header: 'var(--color-text-header)',
				inverted: 'var(--color-text-inverted)',
				selected: 'var(--color-text-selected)'
			},
			stroke: {
				base: 'var(--color-stroke)',
				hover: 'var(--color-stroke-hover)',
				header: 'var(--color-text-header)',
				inverted: 'var(--color-text-inverted)',
				selected: 'var(--color-text-selected)'
			},
			backgroundColor: {
				skin: {
          			bg: 'var(--color-bg)',
					primary: 'var(--color-primary)',
					secondary: 'var(--color-secondary)',
					tertiary: 'var(--color-tertiary)',
					selected: 'var(--color-selected)'
				}
			},
		}
	},
  plugins: [],
}

module.exports = config;