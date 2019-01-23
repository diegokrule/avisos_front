import { Injectable } from '@angular/core'

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {  Client } from './client'

import {  Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { FamilyResponse } from './dto/familyResponse'

import { NodeResponse } from './dto/nodeResponse'





@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }


  getClient():Observable<Client>{
    return this.http.get<Client>("http://localhost:8080/client");
  }

  getLevel1(cod:string):Observable<NodeResponse>{
    return this.http.get<NodeResponse>("http://localhost:8080/level1/"+cod);
  }

  getFamilias():Observable<FamilyResponse>{
    return this.http.get<FamilyResponse>("http://localhost:8080/familias");
  }
}
