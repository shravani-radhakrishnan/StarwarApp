import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {
   dataPass$ = new BehaviorSubject(null);
  constructor() { }
}
