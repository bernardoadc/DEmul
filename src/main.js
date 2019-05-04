import App from './components/app.svelte'

const app = new App({
	target: document.body,
	props: {
		name: 'UNIVERSE'
	}
})

export default app