import { Component, inject } from '@angular/core';
import { GuiaVocacionalService } from '../../services/guia-vocacional.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  private guiaService = inject(GuiaVocacionalService);
  private router = inject(Router);

  public onSelected( roleSelected : string ){
    this.guiaService.setRoleSelected(roleSelected);
    // console.log(this.guiaService.myRoleSelected$)
    this.router.navigate(['/auth/registrer']);
  }


}
