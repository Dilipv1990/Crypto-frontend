import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api/api.service"
import { Currency } from '../model/currencyModel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }
  public currency: Currency
  public currencyDetail: Array<Currency>
  currencySymbols = { eth: "Ethereum", btc: "Bitcoin", ltc: "Litecoin", doge: "Dogecoin" }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('symbol');
    this.apiService.getCurrencyDetails(id).subscribe((res) => {
      console.log("stocks1", res)
      this.currencyDetail = res
    })
    this.apiService.getCurrentData(id).subscribe((res) => {
      console.log("res",res)
      this.currency = res[0]})

    setInterval(() => {
      this.apiService.getCurrentData(id).subscribe((res) => this.currency = res[0])
    }, 2 * 60 * 1000);
  }

}
