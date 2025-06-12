const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  // Lance le navigateur en mode sans tête (headless)
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Définit un User-Agent personnalisé pour masquer Puppeteer
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
  
  // Va sur le site à scraper
  await page.goto('https://www.mkasuoind.pro/user');

  // Attend que les titres soient visibles sur la page
  await page.waitForSelector('h2');  // Adapte ce sélecteur en fonction de ta cible

  // Récupère les titres des articles
  const titles = await page.evaluate(() => {
    // Sélectionne les éléments contenant les titres
    const articles = Array.from(document.querySelectorAll('h2'));
    
    // Récupère le texte de chaque titre
    return articles.map(article => article.innerText);
  });

  // Affiche les titres dans la console
  console.log(titles);

  // Sauvegarde les titres dans un fichier JSON
  fs.writeFileSync('titles.json', JSON.stringify(titles, null, 2));

  // Ferme le navigateur
  await browser.close();
})();