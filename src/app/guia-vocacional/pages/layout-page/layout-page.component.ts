import { Component, inject } from '@angular/core';
import { GuiaVocacionalService } from '../../services/guia-vocacional.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  private guiaService = inject(GuiaVocacionalService);
  private authService = inject(AuthService);
  private router = inject(Router);

  public onSelected( roleSelected : string ){
    this.guiaService.setRoleSelected(roleSelected);
    // console.log(this.guiaService.myRoleSelected$)
    this.router.navigate(['/auth/registrer']);
  }

  irInicio() {
    this.router.navigate(['/guia-vocacional/']);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/guia-vocacional/welcome']);
  }


  public get isAuthenticated() : boolean {
    return this.authService.checkAuthentication();
  }

}
