import { Component, OnInit, inject } from '@angular/core';
import { GuiaVocacionalService } from '../../services/guia-vocacional.service';
import { AptitudesVocaciones } from '../../interfaces/chatbot-response.interface';

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

    if (resultado?.aptitudes.length === 0 || resultado?.vocaciones.length === 0){
      const miResultado = localStorage.getItem('resultados');

      if (miResultado !== null){
        const miResultadoFromLstorage = JSON.parse(miResultado);

        this.aptitudes = miResultadoFromLstorage.aptitudes;
        this.vocaciones = miResultadoFromLstorage.vocaciones;
      }
    } else {
      this.aptitudes = resultado?.aptitudes;
      this.vocaciones = resultado?.vocaciones;
    }

  }

}
