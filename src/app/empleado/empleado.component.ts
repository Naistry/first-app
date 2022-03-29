import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  
  nombre = 'Martín';
  apellido = 'Pastorino';
  public edad = 29;
  text = "Usuario no registrado";
  empresa = "Google";
  constructor() { }

  public getEdad(){
    return this.edad;
  }

  public setEdad(edad: number){
    this.edad= edad;
  }

  habilitarText=false;
  
  loginCheckProperty= false;


  /*getRegistroUsario (){
    this.loginCheckProperty = false;
  }*/

  setUsario(event:Event){
    
   // this.text= "Usuario registrado";
    if((<HTMLInputElement>event.target).value == 'si'){
      this.text="Se registro";
    }else {
      this.text = "No se registro";
    }
  }

  
  ngOnInit(): void {
  }


}
