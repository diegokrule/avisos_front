import { Component, OnInit } from '@angular/core';

import { ClientService } from '../client.service';

import { Client } from '../client';

import { Family } from '../dto/family';

import { Node } from '../dto/node';

import { NodeResponse } from '../dto/nodeResponse';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  client:Client;
  families:Family[];

  selectedItem:Family;

  level1Nodes:Node[];

  constructor(private clientService:ClientService) { }

  getNodes():void{
    this.clientService.getFamilias().subscribe(family=>this.families=family.familias);
  }

  ngOnInit() {
    this.getNodes();
  }

  level0Changed(va) {
    this.clientService.getLevel1(va.target.value).subscribe(l1Response=>this.level1Nodes=l1Response.bienes);
  }






}
