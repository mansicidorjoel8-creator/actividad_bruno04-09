import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly campoUsuario: Locator;
  readonly campoContrasena: Locator;
  readonly botonIngresar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.campoUsuario = page.getByLabel('Usuario');
    this.campoContrasena = page.getByLabel('Contraseña');
    this.botonIngresar = page.getByRole('button', { name: 'Ingresar' });
  }

  async ir() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async iniciarSesion(usuario: string, contrasena: string) {
    await this.campoUsuario.fill(usuario);
    await this.campoContrasena.fill(contrasena);
    await this.botonIngresar.click();
  }
}
