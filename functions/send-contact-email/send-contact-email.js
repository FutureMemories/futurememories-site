const https = require('https')
const HOOK_HOST = 'hooks.slack.com'
const HOOK_PATH = '/services/T0L2B0UDU/BUJD3TJKC/vb1rqlydnG6oAjM5RkgoeCiD' // #site-feedback
// const HOOK_PATH = '/services/T0L2B0UDU/BUJD685U2/fzTFKvbe334F3gNxBFyQVUKA' // #site-feedback-test

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Oops, what did you do now?' }
  }

  const body = JSON.parse(event.body)
  console.log(body)

  // Check required fields
  if (!body.name || !body.email || !body.message) {
    return { statusCode: 400, body: 'Oops, what did you do now?' }
  }

  const postData = JSON.stringify({
    text: (
      `*Name*: ${body.name}\n` +
      `*Email*: ${body.email}\n` +
      (body.telephone ? `*Telephone*: ${body.telephone}\n` : '') +
      (body.time ? `*Time*: ${body.time}\n` : '') +
      `*Message*: ${body.message}\n`
    )
  })

  const options = {
    hostname: HOOK_HOST,
    port: 443,
    path: HOOK_PATH,
    method: 'POST',
    headers: {
      'Content-Type': 'application/application/json',
      'Content-Length': postData.length
    }
  }

  console.log(postData)

  let statusCode
  try {
    statusCode = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        resolve(res.statusCode)
      })

      req.on('error', reject)
      req.write(postData)
      req.end()
    })
  } catch (_) {
    statusCode = 500
  }

  return { statusCode, body: '' }
}
