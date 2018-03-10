import { Component, OnInit } from '@angular/core'
import { ApiService } from '../api/api.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchtext: string
  public currencynames = []
  public flag = false
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit() {
    this.apiService.getCurrencyNames().subscribe((result) => result.forEach((val) => this.currencynames.push(val["_id"])))
  }
  itemClicked(elem) {
    this.searchtext = elem
     this.flag = true
    this.router.navigate(["/detail/"+elem])
  }
}
