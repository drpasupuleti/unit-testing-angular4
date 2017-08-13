/**
 * Created by RPasupul on 6/29/2017.
 */

export class TestQuickStartService {
  private _name: string = 'Injected Service';

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

}
