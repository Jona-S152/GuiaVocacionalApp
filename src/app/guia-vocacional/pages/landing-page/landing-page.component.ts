import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GuiaVocacionalService } from '../../services/guia-vocacional.service';
import { AuthService } from '../../../auth/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styles: ``
})
export class LandingPageComponent {

  private router = inject(Router);
  private authService = inject(AuthService);

  navigateTo(){
    const isAuthenticated = this.authService.checkAuthentication()

    if ( isAuthenticated ) return this.router.navigate(['/guia-vocacional/chatbot']);

    return Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Inicia sesion o crea una cuenta.",
      showConfirmButton: false,
      timer: 1500
    });
  }


  public get isAuthenticated() : boolean {
    return this.authService.checkAuthentication();
  }

}
