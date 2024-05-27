import { Component, OnInit, inject } from '@angular/core';
import { GuiaVocacionalService } from '../../services/guia-vocacional.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styles: ``
})
export class ResultsPageComponent implements OnInit {

  public vocaciones? : string[] = [];

  public aptitudes? : string[] = [];

  private gVocacionalService = inject(GuiaVocacionalService);

  ngOnInit(): void {
    const resultado = this.gVocacionalService.currentResultados

    this.aptitudes = resultado?.aptitudes;
    this.vocaciones = resultado?.vocaciones;
  }

}
