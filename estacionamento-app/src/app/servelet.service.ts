import { Injectable } from '@angular/core';
import { PAGAMENTOS } from './mockPagamentos';
import { pagamentos } from './pagamentos';

@Injectable({
  providedIn: 'root'
})
export class ServeletService {

  pagamentos = PAGAMENTOS;
  pagar : pagamentos;

  constructor() { }

  ListaPagamentos(): pagamentos[]{
    return this.pagamentos;
  }

  AdicionaLista(pdados: pagamentos){

    this.pagamentos.push(pdados);
    
  }

  AtualizaLista(){

    var indice = this.pagamentos.indexOf(this.pagar);
    this.pagamentos.splice(indice,1);

  }

  public validaTicket(dados: number):pagamentos{
    
    let ticket = this.pagamentos.find(x => x.id == dados)    
    this.pagar = ticket;
    return ticket;

  }

  returnNewID(): number{
    if(this.pagamentos.length>0){
      return this.pagamentos[this.pagamentos.length-1].id + 1;
    }
    else{
      return 1;
    }
  }

}
