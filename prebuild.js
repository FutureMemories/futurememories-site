const { writeFileSync } = require('fs-extra')
const { resolve } = require('path')
const merge = require('merge')

const data = {
  english: require('./src/english.json'),
  swedish: require('./src/swedish.json')
}

const getLanguageContent = (language) => {
  const languageData = merge.recursive(true, data.english, data[language] || {})
  const showcaseCases = Object.entries(languageData.allCases)
    .map(([id, value]) => ({ id, ...value }))
    .filter(c => c.showcase === true)
  const prefix = language === 'swedish' ? '/sv' : '/en'

  const routes = Object.values(languageData.routes)

  for (const key of Object.keys(languageData.caseCategories)) {
    if (key === 'featured') continue // same as homepage

    routes.push({
      url: '/' + key,
      title: languageData.caseCategories[key].title,
      description: languageData.caseCategories[key].description
    })
  }

  const translatedRoutes = routes.map(r => ({ ...r, url: prefix + r.url }))

  const caseData = showcaseCases.map(c => {
    const caseTitle = c.name && c.name + (c.desc ? `, ${c.desc.charAt(0).toLowerCase() + c.desc.slice(1)}` : '')
    return ({
      url: prefix + '/cases/' + c.id,
      title: c.title || `Future Memories${caseTitle ? ': ' + caseTitle : ''}`,
      description: c.metaDesc || c.desc
    })
  })

  return [...translatedRoutes, ...caseData]
}

const addLanguageAlternatives = (result, { url, prio, external, ignoreVariations }) => {
  const variations = !ignoreVariations ? [
    { url: '/sv' + url, lang: 'sv' },
    { url: '/en' + url, lang: 'en' }
  ] : []

  return result.concat({ url, prio, external, variations })
}

const generateSitemap = () => {
  const currentDate = new Date().toISOString()
  const showcaseCases = Object.entries(data.english.allCases)
    .map(([id, value]) => ({ id, ...value }))
    .filter(c => c.showcase === true)
  const caseCategories = Object.keys(data.english.caseCategories)

  const siteRoutes = [].concat(
    Object.values(data.english.routes).map(r => ({ url: r.url, prio: r.url === '/' ? '1.00' : (r.sitemapPrio || '0.80') })),
    caseCategories.map(r => ({ url: `/${r}`, prio: '0.7' })),
    caseCategories.map(r => ({ url: `/work/${r}`, prio: '0.72' })),
    showcaseCases.map(r => ({ url: `/cases/${r.id}`, prio: '0.64' })),
    [{ url: 'https://jobs.futurememories.se/', prio: '0.8', external: true, ignoreVariations: true }]
  ).reduce(addLanguageAlternatives, [])

  // Ignored routes that we don't want to be included in the sitemap.
  const ignoredRoutes = ['/careers']

  const siteUrls = siteRoutes
    .filter(route => !ignoredRoutes.includes(route.url))
    .reduce((result, r) => {
      const baseUrl = !r.external ? 'https://www.futurememories.se' : ''
      const variations = r.variations.reduce((res, v) => res + `
    <xhtml:link
      rel="alternate"
      hreflang="${v.lang}"
      href="${baseUrl + v.url}"/>`, '')

      return (
        result + `
  <url>
    <loc>${baseUrl + r.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>${r.prio}</priority>${variations || ''}
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
