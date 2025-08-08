import puppeteer from 'puppeteer';

const analyze = async (req, res) => {
  const url = req.body.url;

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

    const html = await page.content();
    const title = await page.title();
    // Optionally grab meta description as well:
    let description = "";
    try {
      description = await page.$eval('meta[name="description"]', el => el.content);
    } catch {}

    const headings = await page.$$eval('h1, h2, h3', els => els.map(e => ({ tag: e.tagName, text: e.textContent.trim() })));


    await browser.close();

    console.log(req.body)

    res.json({
      success: true,
      message: "Website Loaded Successfully",
      title,
      description,
     headings : headings
  
    });

  } catch (error) {
    res.json({
      success: false,
      message: error.message || "Failed to load the website."
    });
  }
};

export { analyze };
