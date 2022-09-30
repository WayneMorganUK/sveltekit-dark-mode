/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],  
  darkMode: 'class',
	theme: {
		extend: {
			textColor: {
				skin: {
					base: 'var(--color-text-base)',
					muted: 'var(--color-text-muted)',
					inverted: 'var(--color-text-inverted)',
					selected: 'var(--color-text-selected)',
					mutedinverted: 'var(--color-text-muted-inverted)'
				}
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

