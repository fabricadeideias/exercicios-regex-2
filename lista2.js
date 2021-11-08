// Regex para URLs

const urlRegex1 = /https:\/\/tecnoblog\.net\/\d{6,7}\/([a-z0-9]+-)+[a-z0-9]+\//g
const urlRegex2 = /https:\/\/www1\.tecnoblog\.net\/\d{6,7}\/([a-z0-9]+-)+[a-z0-9]+\//g

// Regex para título

const titleRegex = /<meta property="og:title" content="(.*?) &ndash; Tecnoblog"/g

// Regex para data
const dataRegex = /<meta property="article:published_time" content="(.*?)T(.*?)"/g

// Regex para texto
const textoRegex = /<p>(.*?)<\/p>/gm