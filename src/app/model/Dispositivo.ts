export class Dispositivo{
    private _dispositivoId: Number;
    private _nombre: String;
    private _ubicacion: String;
    private _electrovalvulaId: Number;

    constructor(dispositivo,nombre,ubicacion,electrovalvulaId){
        this._dispositivoId=dispositivo;
        this._nombre=nombre;
        this._ubicacion=ubicacion;
        this._electrovalvulaId=electrovalvulaId;
    }

    public get dispositivoId(): Number {
        return this._dispositivoId;
    }
    public set dispositivoId(value: Number) {
        this._dispositivoId = value;
    }

    public get nombre(): String {
        return this._nombre;
    }
    public set nombre(value: String) {
        this._nombre = value;
    }

    public get ubicacion(): String {
        return this._ubicacion;
    }
    public set ubicacion(value: String) {
        this._ubicacion = value;
    }

    public get electrovalvulaId(): Number {
        return this._electrovalvulaId;
    }
    public set electrovalvulaId(value: Number) {
        this._electrovalvulaId = value;
    }
}
