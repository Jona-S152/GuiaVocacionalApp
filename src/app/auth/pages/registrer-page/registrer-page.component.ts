import { Component, OnInit, inject } from '@angular/core';
import { GuiaVocacionalService } from '../../../guia-vocacional/services/guia-vocacional.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-registrer-page',
  templateUrl: './registrer-page.component.html',
  styles: ``
})
export class RegistrerPageComponent implements OnInit {

  public roleSelected : string = '';

  private guiaService = inject(GuiaVocacionalService);
  private router = inject(Router);

  ngOnInit(): void {
    if( this.guiaService.currentRoleSelected.length === 0 ) this.router.navigate(['/']);

    this.roleSelected = this.guiaService.currentRoleSelected
  }

}
