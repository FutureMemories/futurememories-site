const { writeFileSync } = require('fs-extra')
const { resolve } = require('path')
const { routes, allCases } = require('./src/data.json')

const init = async () => {
  const showCases = allCases.filter(c => c.showcase === true)
  const currentDate = new Date().toISOString()

  // prerender-url.json
  const caseData = showCases.map(c => ({
    url: '/cases/' + c.id,
    title: `Future Memories${c.name ? ` - ${c.name}` : ''}`,
    description: c.metaDesc || c.desc
  }))

  const prerenderUrls = [...routes, ...caseData]

  // sitemap.xml
  const siteRoutes = []
  routes.forEach(r => siteRoutes.push({ url: r.url, prio: r.url === '/' ? '1.00' : '0.80' }))
  showCases.forEach(r => siteRoutes.push({ url: `/cases/${r.id}`, prio: '0.64' }))

  let siteUrls = ''
  siteRoutes.forEach(r => {
    siteUrls += `\n  <url>\n    <loc>https://www.futurememories.se${r.url}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <priority>${r.prio}</priority>\n  </url>`
  })

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>', '<urlset',
    '  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"', '  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
    '  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"',
    '>' + siteUrls, '</urlset>'
  ].join('\n')

  // Create prerender-urls.json file
  writeFileSync(resolve(__dirname, 'prerender-urls.json'), JSON.stringify(prerenderUrls))

  // Create sitemap.xml file
  writeFileSync(resolve(__dirname, 'src/assets-root/sitemap.xml'), sitemap)
}

init()
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
