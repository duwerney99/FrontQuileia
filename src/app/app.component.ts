import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Conexiones } from './conexiones';
import { Dispositivo } from './dispositivo';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formularioDispositivo!: FormGroup;
  listaDispositivo!: Dispositivo[];
  formularioConexiones!: FormGroup;
  listaConexion!: Conexiones[];

  constructor(private formularioBuilder: FormBuilder, private servicio: ServiceService) {
  }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.inicializarConexion();
    this.listarDipositivos();
    this.listarConexiones();
  }

  get formulario() {
    return this.formularioDispositivo?.controls;
  }

  get formConexion() {
    return this.formularioConexiones?.controls;
  }


  private inicializarFormulario() {
    this.formularioDispositivo = this.formularioBuilder.group({
      conexionActual: ['', Validators.required],
      conexionRed: ['', Validators.required],
      ip: ['', Validators.required],
      mac: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  guardarDispositivo() {
    const dispositivo = new Dispositivo;
    dispositivo.conexionActual = this.formulario.conexionActual.value;
    dispositivo.conexionRed = true;
    dispositivo.ip = this.formulario.ip.value;
    dispositivo.mac = this.formulario.mac.value;
    dispositivo.tipo = this.formulario.tipo.value;
    console.log(dispositivo);
    this.servicio.guardarDispositivo(dispositivo).subscribe(respuesta => {
    });
  }

  eliminarDispositivo(dispositivoId: any) {
    this.servicio.eliminarDispositivo(dispositivoId).subscribe(respuesta => {
    });
  }

  listarDipositivos() {
    this.servicio.listarDispositivo().subscribe(respuesta => {
      this.listaDispositivo = respuesta;
    });
  }

  //componente Conexiones

  eliminarConexiones(id: any) {
    this.servicio.eliminarConexiones(id).subscribe(respuesta => {
    });
  }

  listarConexiones(){
    this.servicio.listarConexiones().subscribe(respuesta => {
      this.listaConexion = respuesta;
    });
  }


  private inicializarConexion(){
    this.formularioConexiones = this.formularioBuilder.group({
      tipo: ['', Validators.required],
      nombre: ['', Validators.required],
      tipoCifrado: ['', Validators.required],
      usuarioConexion: ['', Validators.required],
      contrasenaConexion: ['', Validators.required]
    });
  }

  guardarConexiones() {
    const conexiones = new Conexiones;
    conexiones.tipo = this.formConexion.tipo.value;
    conexiones.nombre = this.formConexion.nombre.value;
    conexiones.tipoCifrado = this.formConexion.tipoCifrado.value;
    conexiones.usuarioConexion = this.formConexion.usuarioConexion.value;
    conexiones.contrasenaConexion = this.formConexion.contrasenaConexion.value;
    console.log(conexiones);
    this.servicio.guardarConexion(conexiones).subscribe(respuesta => {
    });
  }
}
