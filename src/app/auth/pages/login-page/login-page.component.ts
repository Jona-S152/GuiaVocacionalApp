import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserLogin } from '../../interfaces/UserLogin';
import { GuiaVocacionalService } from '../../../guia-vocacional/services/guia-vocacional.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  private router = inject(Router);
  private authService = inject(AuthService);

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
    if (this.authService.getRandomBoolean()) {
      this.authService.login();
      this.router.navigate(['/guia-vocacional/chatbot']);
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Credenciales incorrectas",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

}
