export class User {

    constructor( _id = '', name = '',  email = '', password = '', conpassword = '' ) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.conpassword = conpassword;
    }
    _id: string;
    name: string;
    email: string;
    password: string;
    conpassword: string;
}
