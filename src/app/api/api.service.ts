import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Currency } from '../model/currencyModel';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  private currencyUrl = 'http://localhost:8000/api/currencies';
  private currencyNameUrl = 'http://localhost:8000/api/currencyNames'
  private aaUrl = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&market=USD&apikey=TCYUGXKDIJXN56W7&symbol="
  private currencyDetailUrl = 'http://localhost:8000/api/currencyDetails?symbol='
  getCurrencies(): Observable<Currency[]> {
    return this.http.get(this.currencyUrl)
      .map((res: Response) => res.json().data)
      .catch((error: any) => Observable.throw(error.data || 'Server error'));

  };
  getCurrencyNames(): Observable<String[]> {
    return this.http.get(this.currencyNameUrl).map((res: Response) => res.json().data)
      .catch((error: any) => Observable.throw(error.data || 'Server error'))
  }
  getCurrencyDetails(symbol: String):Observable<Array<Currency>>{
    return this.http.get(this.currencyDetailUrl + symbol).map((res:Response)=>res.json().data)
      .catch((error: any) => Observable.throw(error.data || 'Server error'))
    
  }
  getCurrentData(symbol: String) {
    return this.http.get(this.aaUrl + symbol).map((res: Response) =>{
      let resCurrecies = []
      let tempRes = JSON.parse(res["_body"])["Time Series (Digital Currency Intraday)"]
      for (let key in tempRes) {
        let element = tempRes[key]
        let temp = new Currency(key, element["2. volume"], null, element["3. market cap (USD)"], element["1a. price (USD)"],null,null,null, symbol)
        resCurrecies.push(temp)
        break
      }
      return resCurrecies
    })
      .catch((error: any) => Observable.throw(error.data || 'Server error'))
  }
}
