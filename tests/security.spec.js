const { test, expect } = require('@playwright/test');

test('redirects unauthenticated user to login', async ({ page }) => {
  // 1. Próba wejścia bezpośrednio na profil BEZ logowania
  await page.goto('http://localhost:3000/user/profile');

  // 2. Oczekujemy, że system przekieruje nas na stronę logowania
  // Używamy wyrażenia regularnego /.*signin/, żeby pasowało do http://localhost:3000/user/signin
  await expect(page).toHaveURL(/.*signin/);
  
  // 3. Sprawdźmy czy jesteśmy na stronie logowania
  await expect(page.locator('h1, h2')).toContainText(/Logowanie|Sign In/i);
});