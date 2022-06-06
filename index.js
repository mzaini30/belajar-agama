import ambil from './ambil.js'
import {writeFileSync, existsSync, mkdirSync} from 'fs'

const {stringify} = JSON

async function init(){
	const semuaArtikel = await ambil([
		{
			website: 'https://burhansodiq.com/',
			list: '.post.type-post',
			artikel: '.entry-title > a'	
		},
		{
			website: 'https://isykarima.com/',
			list: '.td_module_6.td_module_wrap.td-animation-stack .entry-title.td-module-title',
			artikel: 'a'
		},
		{
			website: 'https://konsultasisyariah.com/',
			list: '#td_uid_6_629dc9378258b .td_module_6.td_module_wrap.td-animation-stack',
			artikel: 'a'
		},
		{
			website: 'https://konsultasisyariah.com/',
			list: '#td_uid_7_629dc93787fed .td_module_6.td_module_wrap.td-animation-stack',
			artikel: 'a'
		},
		{
			website: 'https://konsultasisyariah.com/',
			list: '#td_uid_8_629dc93791a84 .td_module_mx4.td_module_wrap.td-animation-stack',
			artikel: 'a'
		},
		{
			website: 'https://konsultasisyariah.com/',
			list: '#td_uid_65_629dc9379d44a .td_module_mx2.td_module_wrap.td-animation-stack',
			artikel: 'a'
		},
		{
			website: 'https://konsultasisyariah.com/',
			list: '#td_uid_66_629dc937a1116 .td_module_mx2.td_module_wrap.td-animation-stack',
			artikel: 'a'
		},
		{
			website: 'https://konsultasisyariah.com/',
			list: '#td_uid_184_629dc937c2a41 .td_module_10.td_module_wrap.td-animation-stack .entry-title.td-module-title',
			artikel: 'a'
		},
	])
	
	if (!existsSync('dist')){
		mkdirSync('dist')
	}
	writeFileSync('dist/data.json', stringify(semuaArtikel, null, 2))
}
init()