import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface ChartResponse {
  rows: any;
}

@Injectable()
export class GSheetService {

  constructor(private _http: HttpClient) { }

  gSheet1() {
    return this._http.get<ChartResponse>("https://crossorigin.me/https://stormy-forest-17892.herokuapp.com/api?id=1k8TZTBBCpGEm2gYtFhCDJkVA-fS-Mo6iHjyR_Ri_Eqg")
      .map(result => result);
  }

  gDashboard() {
    return this._http.get<ChartResponse>("https://crossorigin.me/https://stormy-forest-17892.herokuapp.com/api?id=1xi9qx5vQrv4rloBt_tkxUtAJJysgYqIKK1EWY7oGfKY&sheet=2")
      .map(result => result);
  }

  /*gDashboard() {
    return this._http.get<ChartResponse>("https://crossorigin.me/https://stormy-forest-17892.herokuapp.com/api?id=1k8TZTBBCpGEm2gYtFhCDJkVA-fS-Mo6iHjyR_Ri_Eqg&sheet=2")
      .map(result => result);
  }*/

  gSheetMeters() {
    return this._http.get<ChartResponse>("https://crossorigin.me/https://stormy-forest-17892.herokuapp.com/api?id=1k8TZTBBCpGEm2gYtFhCDJkVA-fS-Mo6iHjyR_Ri_Eqg&sheet=3")
      .map(result => result);
  }

  gSheetMetersCalc() {
    return this._http.get<ChartResponse>("https://crossorigin.me/https://stormy-forest-17892.herokuapp.com/api?id=1k8TZTBBCpGEm2gYtFhCDJkVA-fS-Mo6iHjyR_Ri_Eqg&sheet=7")
      .map(result => result);
  }
}

