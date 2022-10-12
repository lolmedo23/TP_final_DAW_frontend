export class Medicion{
  private _medicionId: Number;
  private _fecha: String;
  private _valor: Number;
  private _dispositivoId: Number;

  constructor(medicionId,fecha,valor,dispositivoId){
      this._medicionId=medicionId;
      this._fecha=fecha;
      this._valor=valor;
      this._dispositivoId=dispositivoId;
  }

  public get medicionId(): Number {
      return this._medicionId;
  }
  public set medicionId(value: Number) {
      this._medicionId = value;
  }

  public get fecha(): String {
      return this._fecha;
  }
  public set fecha(value: String) {
      this.fecha = value;
  }

  public get valor(): Number {
      return this._valor;
  }
  public set valor(value: Number) {
      this._valor = value;
  }
  public get dispositivoId(): Number {
    return this._dispositivoId;
  }
  public set dispositivoId(value: Number) {
    this._dispositivoId = value;
  }
}
