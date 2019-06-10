import Demul from './demul.svelte'

export default new Demul({
	target: document.body,
	props: {
    src: 'http://localhost:8000/'
	}
})