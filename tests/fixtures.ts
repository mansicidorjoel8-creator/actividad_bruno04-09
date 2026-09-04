import { test as base } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

type MisFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<MisFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.ir();
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
