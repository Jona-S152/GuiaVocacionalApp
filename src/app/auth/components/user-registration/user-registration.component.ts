import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrer } from '../../interfaces/UserRegistrer.interface';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styles: ``
})
export class UserRegistrationComponent {

  private router = inject(Router);
  private authService = inject(AuthService);

    // Formato para enlazar al formulario
    public userRegistrerForm = new FormGroup({
      correoelectronico : new FormControl<string>('', { nonNullable: true }),
      nickName : new FormControl<string>('', { nonNullable: true }),
      contraseña : new FormControl<string>('', { nonNullable: true }),
      nombre: new FormControl<string>('', { nonNullable: true }),
      apellido: new FormControl<string>('', { nonNullable: true }),
      edad: new FormControl<string>('', { nonNullable: true }),
      estudiorealizado: new FormControl<string>(''),
      descripcionpersonal: new FormControl<string>('', { nonNullable: true })
    });

    public get currentUserForm() : UserRegistrer {
      const user = this.userRegistrerForm.value as UserRegistrer
      user.rol = 'USUARIO'
      return user
    }

    public onRegistrer(){

      if (this.userRegistrerForm.invalid) return
      // TODO: Agregar servicio registrar postulante
      // console.log(this.currentUserForm);
      this.authService.createAccount(this.currentUserForm)
        .subscribe({
          next: (res) => console.log(res),
          // next: () => this.router.navigate(['/auth/login']),
          error: (message) => {
            Swal.fire('Error', message, 'error')
          }
        });

      // this.router.navigate(['/auth/login']);
    }

}
