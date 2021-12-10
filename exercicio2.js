// Parte 1
const regex = /https:\/\/tecnoblog.net\/\d{6}\/[\w\d-]*\//g
const link = 'https://tecnoblog.net/531569/apple-e-condenada-a-indenizar-consumidora-por-iphone-11-sem-carregador/'
console.log(link.match(regex))

const regex2 = /https:\/\/tecnoblog.net\/sobre\/\w+\/[\w\d-]+\//g
const link2 = 'https://tecnoblog.net/sobre/apple/iphone-11/'
console.log(link2.match(regex2))

// Parte 2
const regexTitulo = /(?<=<a.*title=">).*(?=")/
const regexData = /(?<=<time.*>)\d{2}\/\d{2}\/\d{4}/
const regexTexto = /(?<=<p>).*(?=<p>)/gm