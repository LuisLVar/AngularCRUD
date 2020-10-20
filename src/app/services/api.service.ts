import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  API_URI = 'http://localhost:3000/api'

  getProductos() { 
    return this.http.get(`${this.API_URI}/productos`);
  }
  
  getOneProduct(id: any) { 
    console.log(id);
    return this.http.get(`${this.API_URI}/productos/${id}`);
  }

  updateProducto() { 

  }

  deleteProducto() { 

  }

  newProducto() { 

  }

  public setProducto(producto: any) { 
    let usr_string = JSON.stringify(producto);
    localStorage.setItem('productoactual', usr_string);
  }

  public getCurrentProdut() {
    let user_string = localStorage.getItem('productoactual');
    if (!isNullOrUndefined(user_string)) {
      let user = JSON.parse(user_string);
      return user;
    }
    return false;
  }

  public removeProduct(): void {
    localStorage.removeItem("productoactual");
  }

}
