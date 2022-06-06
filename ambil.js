import scrape from 'scrape-it'

export default async function(data){
	let semua = []

	for (const {website, list, artikel} of data){
		const {data} = await scrape(website, {
			artikel: {
				listItem: list,
				data: {
					judul: artikel,
					link: {
						selector: artikel,
						attr: 'href'
					}
				}
			}
		})
		semua.push(...data.artikel)
	}

	semua.sort((a, b) => a.judul > b.judul ? 1 : -1)
	return semua
}