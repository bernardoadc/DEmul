import Demul from './demul.svelte'

export default new Demul({
	target: document.body,
	props: {
    src: ''
	}
})

/*

formas que da pra abordar:
0) ajustar para que nao use vh e vw -> NAO FUNCIONA / COMPLICA
1) fazer o demul ser um componente (o iframe aponta pra onde dai??)
2) ter 2 renderings distintos - 2 outputs (com hydrate, not suitable for iframes ne?)
  2b) mas perala, tu ainda pode renderar um app/component independente e usar no src do iframe. A questao é como fica after bundle
3) ter 2 apps distintos - 2 dist folders, git, package, tudo (como fazer deploy? bom, 2 sites separados dá!) THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS FOR NOW

*/
