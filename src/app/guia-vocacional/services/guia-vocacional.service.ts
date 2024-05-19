import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuiaVocacionalService {

  constructor() { }

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

}
