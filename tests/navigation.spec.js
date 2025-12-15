const { test, expect } = require('@playwright/test');

test('has link to login page', async ({ page }) => {
  // 1. Wejdź na stronę główną
  await page.goto('http://localhost:3000/');

  // 2. Kliknij w link "Logowanie" w menu
  // Używamy text=... aby znaleźć element zawierający ten tekst
  // Jeśli na mobile menu jest ukryte, Playwright może wymagać szerszego okna - domyślnie otwiera szerokie.
  await page.click("text=🔐 Logowanie");

  // 3. Sprawdź, czy URL się zmienił na /user/signin
  await expect(page).toHaveURL('http://localhost:3000/user/signin');

  // 4. Sprawdź, czy na stronie logowania jest nagłówek h1 (lub h2) z odpowiednim tekstem
  // W twoim pliku logowania prawdopodobnie jest "Logowanie" lub "Sign In"
  await expect(page.locator('h1, h2')).toContainText(/Logowanie|Sign In/i);
});