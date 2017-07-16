/**
 * Created by RPasupul on 6/29/2017.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class QuickStartService {
  private _nameIs = 'test1';

  getNameIs(): string {
    return this._nameIs;
  }

  setNameIs(value: string) {
    this._nameIs = value;
  }
}
