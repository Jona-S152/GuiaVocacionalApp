import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserLogin } from '../../interfaces/UserLogin';
import { GuiaVocacionalService } from '../../../guia-vocacional/services/guia-vocacional.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  private router = inject(Router);

  public hide : boolean = true;

  // Formato para enlazar al formulario
  public userLoginForm = new FormGroup({
    nombreUsuario : new FormControl<string>(''),
    contraseña : new FormControl<string>('', { nonNullable: true }),
  });

  public get currentUserForm() : UserLogin {
    const user = this.userLoginForm.value as UserLogin
    return user
  }

  public onLogin(){
    // TODO: Agregar servicio login

    this.router.navigate(['/guia-vocacional/chatbot']);
  }

}
