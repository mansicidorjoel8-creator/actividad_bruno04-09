import { test, expect } from './fixtures';

// Array de datos parametrizados para probar distintos casos
const casos = [
  { usuario: 'student', clave: 'incorrecta1', valido: false },
  { usuario: 'inexistente', clave: 'Password123', valido: false },
  { usuario: '', clave: '', valido: false }
];

// Test de éxito
test('login exitoso', async ({ loginPage, page }) => {
  await loginPage.iniciarSesion('student', 'Password123');
  await expect(page).toHaveURL(/.*dashboard/);
});

// Tests parametrizados de falla
for (const caso of casos) {
  test(`login falla con usuario=${caso.usuario}`, async ({ loginPage }) => {
    await loginPage.iniciarSesion(caso.usuario, caso.clave);
  });
}
