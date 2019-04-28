import { Component } from '@angular/core';
import { ServeletService } from '../servelet.service';
import { pagamentos } from '../pagamentos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  pagamentos: pagamentos[];

  constructor(private router: Router, public serv: ServeletService){

    this.pagamentos = serv.ListaPagamentos();
  }

  pagar(id: number){
    if(this.serv.validaTicket(id).valor == 0){
      this.router.navigate(['/pagamentos']);
    }
    else{
      alert('Ticket ja pago');
    }
    
  }
}
