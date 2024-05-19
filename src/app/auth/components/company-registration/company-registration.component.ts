import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserRegistrer } from '../../interfaces/UserRegistrer';
import { Router } from '@angular/router';

@Component({
  selector: 'company-registration',
  templateUrl: './company-registration.component.html',
  styles: ``
})
export class CompanyRegistrationComponent {

  private router = inject(Router);

  // Formato para enlazar al formulario
  public userRegistrerForm = new FormGroup({
    cedula : new FormControl<string>('', { nonNullable: true }),
    nombreUsuario : new FormControl<string>(''),
    correoElectronico: new FormControl<string>(''),
    contraseña : new FormControl<string>('', { nonNullable: true }),
  });

  public get currentUserForm() : UserRegistrer {
    const user = this.userRegistrerForm.value as UserRegistrer
    return user
  }

  public onRegistrer(){
    // TODO: Agregar servicio registrar empresa

    this.router.navigate(['/auth/login']);
  }

}
