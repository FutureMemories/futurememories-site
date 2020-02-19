const { writeFileSync } = require('fs-extra')
const { resolve } = require('path')
const merge = require('merge')

const data = {
  english: require('./src/english.json'),
  swedish: require('./src/swedish.json')
}

const getLanguageContent = (language) => {
  const languageData = merge.recursive(true, data.english, data[language] || {})
  const showCases = languageData.allCases.filter(c => c.showcase === true)
  const prefix = language === 'swedish' ? '/sv' : '/en'

  const routes = languageData.routes.map(r => ({ ...r, url: prefix + r.url }))

  const caseData = showCases.map(c => {
    const caseTitle = c.name && c.name + (c.desc ? `, ${c.desc.charAt(0).toLowerCase() + c.desc.slice(1)}` : '')
    return ({
      url: prefix + '/cases/' + c.id,
      title: c.title || `Future Memories${caseTitle ? ': ' + caseTitle : ''}`,
      description: c.metaDesc || c.desc
    })
  })

  return [...routes, ...caseData]
}

const addLanguageAlternatives = (result, { url, prio }) => {
  const variations = [
    { url: '/sv' + url, lang: 'sv' },
    { url: '/en' + url, lang: 'en' }
  ]

  return result.concat(
    variations.map(v => ({ url: v.url, prio, variations }))
  )
}

const generateSitemap = () => {
  const currentDate = new Date().toISOString()
  const showCases = data.english.allCases.filter(c => c.showcase === true)
  const siteRoutes = [].concat(
    data.english.routes.map(r => ({ url: r.url, prio: r.url === '/' ? '1.00' : '0.80' })),
    showCases.map(r => ({ url: `/cases/${r.id}`, prio: '0.64' }))
  ).reduce(addLanguageAlternatives, [])

  const siteUrls = siteRoutes.reduce((result, r) => {
    const variations = r.variations.reduce((res, v) => res + `
    <xhtml:link
      rel="alternate"
      hreflang="${v.lang}"
      href="https://www.futurememories.se${v.url}"/>`, '')

    return (
      result + `
  <url>
    <loc>https://www.futurememories.se${r.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>${r.prio}</priority>${variations}
  </url>`
    )
  }, '')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>${siteUrls}
</urlset>`

  writeFileSync(resolve(__dirname, 'src/assets-root/sitemap.xml'), sitemap)
}

const init = async () => {
  const prerenderUrls = [].concat(
    { url: '/', title: 'Future Memories' },
    getLanguageContent('english'),
    getLanguageContent('swedish')
  )

  generateSitemap()

  // Create prerender-urls.json file
  writeFileSync(resolve(__dirname, 'prerender-urls.json'), JSON.stringify(prerenderUrls))
}

init()
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
