import { Component, inject } from '@angular/core';
import { GuiaVocacionalService } from '../../services/guia-vocacional.service';
import { AptitudesVocaciones, Role } from '../../interfaces/chatbot-response.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'guia-chatbot',
  templateUrl: './chatbot.component.html',
  styles: ``
})
export class ChatbotComponent {

  private gVocacionalService = inject(GuiaVocacionalService);
  private router = inject(Router);

  public response? : string;

  public aptitudes : string[] = [];

  public vocaciones : string[] = [];

  public resultados? : AptitudesVocaciones;

  mostrarResultados(){
    this.gVocacionalService.getMessages()
      .subscribe( {
        next: (res) => {

          if (
            res.data[0].messages[res.data[0].messages.length - 1].content.includes('Resultado') &&
            res.data[0].messages[res.data[0].messages.length - 1].role === Role.Assistant
          ){
            localStorage.setItem('conversationId', res.data[0].id.toString());
            const vocationsMatch = res.data[0].messages[res.data[0].messages.length - 1].content.match(/Vocaciones:\s*(.+?)\n/);
            const aptitudesMatch = res.data[0].messages[res.data[0].messages.length - 1].content.match(/Aptitudes:\s*(.+?)\n/);

            if (vocationsMatch){
              this.vocaciones = vocationsMatch[1].split(',')
              .map(item => item.trim())
              .map(item => item.replace(/^\*\*\s*/, ''));
            }

            if (aptitudesMatch){
              this.aptitudes = aptitudesMatch[1].split(',')
              .map(item => item.trim())
              .map(item => item.replace(/^\*\*\s*/, ''));
            }

            this.resultados = { aptitudes: this.aptitudes, vocaciones: this.vocaciones}

            localStorage.setItem('resultados', JSON.stringify(this.resultados));

            this.gVocacionalService.guardarResultados(this.resultados)
              .subscribe({
                next: () => {
                  console.log('Guardado');
                }
              });

            this.router.navigate(['/guia-vocacional/results']);
            // console.log(res.data[0].messages[res.data[0].messages.length - 1].content);
          } else {
            Swal.fire({
              position: "top-end",
              icon: "warning",
              title: "Complete el formulario del chatbot",
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
      });
  }

}
