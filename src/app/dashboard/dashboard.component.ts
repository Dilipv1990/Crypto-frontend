import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api/api.service'
import { Currency} from "../model/currencyModel"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public currencies: Array<Currency>
  public currencySymbols={eth:"Ethereum", btc:"Bitcoin", ltc:"Litecoin",doge:"Dogecoin"}
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getCurrencies().subscribe((res) => {console.log("res",res)
      this.currencies = res});
  }

}
