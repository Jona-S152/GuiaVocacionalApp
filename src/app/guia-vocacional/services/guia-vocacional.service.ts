import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AptitudesVocaciones, ChatbotResponse } from '../interfaces/chatbot-response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GuiaVocacionalService {

  private http = inject(HttpClient);

  private readonly baseUrl = environments.baseUrlChatbot;
  private readonly apiKey = environments.apiKeyChatbot;
  private readonly chatbotId = environments.chatbotId;

  private resultados? : AptitudesVocaciones;

  private myResultados = new BehaviorSubject<AptitudesVocaciones>({aptitudes: [], vocaciones: []});
  myResultados$ = this.myResultados.asObservable();

  setResultados( resultado : AptitudesVocaciones ) {
    this.resultados = resultado;
    this.myResultados.next(this.resultados);
  }

  public get currentResultados() : AptitudesVocaciones | undefined {
    return structuredClone(this.resultados);
  }


  private roleSelected : string = '';

  private myRoleSelected = new BehaviorSubject<string>('');
  myRoleSelected$ = this.myRoleSelected.asObservable();

  setRoleSelected( role : string ) {
    this.roleSelected = role;
    this.myRoleSelected.next(this.roleSelected);
  }


  public get currentRoleSelected() : string{
    return structuredClone(this.roleSelected);
  }

  public getMessages() : Observable<ChatbotResponse> {

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ this.apiKey }`);

    return this.http.get<ChatbotResponse>(`${ this.baseUrl }/api/v1/get-conversations?chatbotId=${ this.chatbotId }`, { headers });
  }


  guardarResultados( restultados : AptitudesVocaciones) : Observable<boolean> {
    return this.http.post<boolean>(`${ this.baseUrl }/api/authenticar`, restultados);
  }
}
