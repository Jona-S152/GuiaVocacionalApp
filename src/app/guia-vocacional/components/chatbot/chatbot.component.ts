import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'guia-chatbot',
  templateUrl: './chatbot.component.html',
  styles: ``
})
export class ChatbotComponent implements OnInit {

  public response? : string;

  ngOnInit(): void {

  }

  mostrarResultados(){
    const resultado = localStorage.key(0)

    console.log({resultado});
  }

}
