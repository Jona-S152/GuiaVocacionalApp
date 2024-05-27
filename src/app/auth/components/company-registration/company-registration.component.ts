import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrer } from '../../interfaces/UserRegistrer.interface';
import { CompanyRegistrer } from '../../interfaces/CompanyRegistrer.interface';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'company-registration',
  templateUrl: './company-registration.component.html',
  styles: ``
})
export class CompanyRegistrationComponent {

  private router = inject(Router);
  private authService = inject(AuthService);

  // Formato para enlazar al formulario
  public companyRegistrerForm = new FormGroup({
    nickname : new FormControl<string>('', { nonNullable: true }),
    correo : new FormControl<string>('', { nonNullable: true }),
    contraseña: new FormControl<string>('', { nonNullable: true }),
    nombre : new FormControl<string>('', { nonNullable: true }),
    tipo: new FormControl<string>('', { nonNullable: true }),
    descripcion: new FormControl<string>('', { nonNullable: true })
  });

  public get currentCompanyForm() : CompanyRegistrer {
    const company = this.companyRegistrerForm.value as CompanyRegistrer
    // company.rol = 'EMPRESA'
    return company
  }

  public onRegistrer(){
    // TODO: Agregar servicio registrar empresa
    if ( this.companyRegistrerForm.invalid ) return

    this.authService.createCompanyAccount(this.currentCompanyForm)
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
