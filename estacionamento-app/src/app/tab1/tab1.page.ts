import { Component } from '@angular/core';
import { ServeletService } from '../servelet.service';
import { pagamentos } from '../pagamentos';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

codigo : number;

ticket : pagamentos;

data : string;
cliente: string;
veiculo: string;

constructor(private router: Router, public PagServive: ServeletService, public alertController: AlertController){

}

public addList(){
  var data = new Date();

  var minuto =  data.getMinutes().toString();

  if(minuto.length==1){
    minuto = '0'+ minuto;
  }

  this.data = (data.getHours() +':'+ minuto);
  
  this.ticket = new pagamentos;
  this.ticket.id = this.PagServive.returnNewID();
  this.ticket.datainicial = this.data;
  this.ticket.datafinal = '00:00';
  this.ticket.valor = 0;
  this.ticket.cliente = this.cliente;
  this.ticket.veiculo = this.veiculo;

  this.PagServive.AdicionaLista(this.ticket); 

  //this.router.navigate(['/tabs/tab3']);

  this.codigo = null;
  this.cliente='';
  this.veiculo='';
}

}
