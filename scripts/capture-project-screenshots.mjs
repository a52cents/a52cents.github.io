import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const outputDir = path.resolve('public/projects');

const projects = [
  {
    name: 'kadr',
    url: 'https://kadr.space',
    output: 'kadr-landing.png',
  },
  {
    name: 'skyquest',
    url: 'https://sky-quest-psi.vercel.app',
    output: 'skyquest-landing.png',
  },
  {
  name: 'okaiana',
  url: 'https://okaianashopcbd.fr',
  output: 'okaiana-landing.png',
  hasAgeWall: true,
},
];

async function clickIfVisible(page, selectors) {
  for (const selector of selectors) {
    const element = page.locator(selector).first();

    try {
      if (await element.isVisible({ timeout: 1500 })) {
        await element.click({ timeout: 3000 });
        await page.waitForTimeout(1200);
        return true;
      }
    } catch {
      // Ignore selector failures and try the next one
    }
  }

  return false;
}

async function handleAgeWall(page) {
  const ageWallSelectors = [
    'button:has-text("Oui")',
    'a:has-text("Oui")',
    'button:has-text("OUI")',
    'a:has-text("OUI")',
    'button:has-text("J’ai 18 ans")',
    'button:has-text("J\\\'ai 18 ans")',
    'a:has-text("J’ai 18 ans")',
    'a:has-text("J\\\'ai 18 ans")',
    'button:has-text("Je certifie")',
    'a:has-text("Je certifie")',
    'button:has-text("Entrer")',
    'a:has-text("Entrer")',
    'button:has-text("Continuer")',
    'a:has-text("Continuer")',
    'button:has-text("Accepter")',
    'a:has-text("Accepter")',
    '.age-gate button:has-text("Oui")',
    '.age-verification button:has-text("Oui")',
    '#age-gate button:has-text("Oui")',
    '#age-verification button:has-text("Oui")',
  ];

  const clicked = await clickIfVisible(page, ageWallSelectors);

  if (clicked) {
    console.log('Age wall validé.');
  } else {
    console.log('Aucun age wall cliquable détecté.');
  }
}

async function handleCookieBanner(page) {
  const cookieSelectors = [
    'button:has-text("Accepter")',
    'button:has-text("Tout accepter")',
    'button:has-text("J’accepte")',
    'button:has-text("OK")',
    'a:has-text("Accepter")',
  ];

  await clickIfVisible(page, cookieSelectors);
}

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
});

const page = await browser.newPage({
  viewport: {
    width: 1440,
    height: 1000,
  },
  deviceScaleFactor: 1,
});

for (const project of projects) {
  console.log(`Capture ${project.name}...`);

  await page.goto(project.url, {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  await page.waitForTimeout(2000);

  if (project.hasAgeWall) {
    await handleAgeWall(page);
  }

  await handleCookieBanner(page);

  try {
    await page.waitForLoadState('networkidle', { timeout: 10000 });
  } catch {
    console.log('Network idle non atteint, capture quand même.');
  }

  await page.waitForTimeout(1500);

  await page.screenshot({
    path: path.join(outputDir, project.output),
    fullPage: false,
  });

  console.log(`Image créée : public/projects/${project.output}`);
}

await browser.close();

console.log('Captures terminées.');