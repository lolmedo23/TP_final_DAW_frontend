export class Log{
  private _logRiegoId: Number;
  private _apertura: Number;
  private _fecha: String;
  private _electrovalvulaId: Number;

  constructor(logRiegoId,apertura,fecha,electrovalvulaId){
      this._logRiegoId=logRiegoId;
      this._fecha=fecha;
      this._apertura=apertura;
      this._electrovalvulaId=electrovalvulaId;
  }

  public get logRiegoId(): Number {
      return this._logRiegoId;
  }
  public set logRiegoId(value: Number) {
      this._logRiegoId = value;
  }

  public get apertura(): Number {
      return this._apertura;
  }
  public set apertura(value: Number) {
      this._apertura = value;
  }

  public get fecha(): String {
    return this._fecha;
  }
  public set fecha(value: String) {
    this.fecha = value;
  }

  public get electrovalvulaId(): Number {
    return this._electrovalvulaId;
  }
  public set electrovalvulaId(value: Number) {
    this._electrovalvulaId = value;
  }
}
