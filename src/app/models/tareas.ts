export class Tareas {

    constructor( _id = '', nombre = '',  descripcion = '', proyecto = '' ) {
        this._id = _id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.proyecto = proyecto;
    }
    _id: string;
    nombre: string;
    descripcion: string;
    proyecto: string;
}
