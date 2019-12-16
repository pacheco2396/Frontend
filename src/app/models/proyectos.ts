export class Proyectos {

    constructor( _id = '', nombre = '',  descripcion = '', usuario = '' ) {
        this._id = _id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.usuario = usuario;
    }
    _id: string;
    nombre: string;
    descripcion: string;
    usuario: string;
    fecha: Date;
}