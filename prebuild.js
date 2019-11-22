const { writeFileSync } = require('fs-extra')
const { resolve } = require('path')
const { routes, allCases } = require('./src/data.json')

const init = async () => {
  const showCases = allCases.filter(c => c.showcase === true)
  const currentDate = new Date().toISOString()

  // prerender-url.json
  const caseData = showCases.map(c => ({
    url: '/cases/' + c.id,
    title: c.name ? 'Future Memories - ' + c.name : 'Future Memories',
    description: c.metaDesc || c.desc
  }))

  const prerenderUrls = [
    ...routes,
    ...caseData
  ]

  // sitemap.xml
  let sitemapData = ''
  routes.forEach(route => {
    sitemapData += `
  <url>
    <loc>https://www.futurememories.se${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>${route.url === '/' ? '1.00' : '0.80'}</priority>
  </url>`
  })

  showCases.forEach(showcase => {
    sitemapData += `
  <url>
    <loc>https://www.futurememories.se/cases/${showcase.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.64</priority>
  </url>`
  })

  sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${sitemapData}
</urlset>`

  console.log(sitemap)

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
