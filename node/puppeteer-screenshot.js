const puppeteer = require('puppeteer')

let url = process.argv[2]

if (url) {
  ;(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    await page.screenshot({ path: `screenshot.png` })
    await browser.close()
  })()
} else {
  console.log('url is missing')
}
