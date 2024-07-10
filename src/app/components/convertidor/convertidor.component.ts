import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  cantidad=0;
  tengo='USD';
  quiero='EUR';
  total=0;

  monedas:string[]=['USD', 'EUR','LIBRA'];

  convertir(){

    switch(this.tengo){
      case 'USD':
        if(this.quiero==='USD'){
          this.total=this.cantidad;
        }
        if(this.quiero==='EUR'){
            this.total=this.cantidad * 0.82;

        }
        if(this.quiero==='LIBRA'){
          this.total=this.cantidad * 0.92;

        }
        break;

      case 'EUR':
        if(this.quiero==='USD'){
          this.total=this.cantidad * 1.09;
        }
        if(this.quiero==='EUR'){
            this.total=this.cantidad;

        }
        if(this.quiero==='LIBRA'){
          this.total=this.cantidad * 0.87;

        }
        break;

        case 'LIBRA':
        if(this.quiero==='USD'){
          this.total=this.cantidad * 1.25;
        }
        if(this.quiero==='EUR'){
            this.total=this.cantidad * 1.15;

        }
        if(this.quiero==='LIBRA'){
          this.total=this.cantidad;

        }
        break;

      }
  }
}
