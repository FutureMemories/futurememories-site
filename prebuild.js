const { writeFileSync } = require('fs-extra')
const { resolve } = require('path')
const { routes, allCases } = require('./src/data.json')

const init = async () => {
  const showCases = allCases.filter(c => c.showcase === true)
  const caseData = showCases.map(c => ({
    url: '/cases/' + c.id,
    title: c.name ? 'Future Memories - ' + c.name : 'Future Memories',
    description: c.metaDesc || c.desc
  }))

  const prerenderUrls = [
    ...routes,
    ...caseData
  ]

  // Create prerender-urls.json file
  writeFileSync(resolve(__dirname, 'prerender-urls.json'), JSON.stringify(prerenderUrls))
}

init()
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
