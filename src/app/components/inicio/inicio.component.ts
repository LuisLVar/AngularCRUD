import { getNsPrefix } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  productos: any;

  producto: any = {
    nombre: ''
  };

  actual: any;

  constructor(private apiService: ApiService ) { }

  ngOnInit(): void {
    this.getProductos();
    this.actual = this.apiService.getCurrentProdut();
    alert("Nuestro producto actual es: "+this.actual.nombre);
  }


  getProductos() { 
    this.apiService.getProductos().subscribe(
      res => {
        console.log(res);
        this.productos = res;
      },
      err => console.log(err)
    );
  }

  getOneProduct(producto : number) { 
    this.apiService.getOneProduct(producto).subscribe(
      res => {
        console.log(res);
        this.producto = res[0];
      },
      err => console.log(err)
    );
  }

  comprarProducto(producto: any) { 
    console.log(producto);
    this.apiService.getOneProduct(producto.producto).subscribe(
      res => {
        console.log(res);
        this.producto = res[0];
        this.apiService.setProducto(producto);
        alert("Compraste el producto: " + this.producto.nombre);
      },
      err => console.log(err)
    );
  }

}
