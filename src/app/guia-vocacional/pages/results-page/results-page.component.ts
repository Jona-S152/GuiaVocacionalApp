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

    const miResultado = localStorage.getItem('resultados');

    if (miResultado){
      const miResultadoFromLstorage = JSON.parse(miResultado);

      this.aptitudes = miResultadoFromLstorage.aptitudes;
      this.vocaciones = miResultadoFromLstorage.vocaciones;

      console.log(this.aptitudes);
      console.log(this.vocaciones);
    }
    // const resultado = this.gVocacionalService.currentResultados
    // console.log(resultado?.aptitudes[0])

    // if (resultado!.aptitudes.length <= 0 || resultado!.vocaciones.length <= 0){

    // } else {
    //   this.aptitudes = resultado?.aptitudes;
    //   this.vocaciones = resultado?.vocaciones;
    // }

  }

}
