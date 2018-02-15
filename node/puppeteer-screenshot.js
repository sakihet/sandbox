const puppeteer = require('puppeteer')

let url = process.argv[2]

async function screenshot(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  await page.screenshot({ path: `screenshot.png` })
  await browser.close()
}

if (url) {
  screenshot(url)
} else {
  console.log('url is missing')
}
