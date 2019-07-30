import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  model: any = {};
  result: any =  {};
  sum: any =  0;
  hrs: any =  0;
  baseUrl:string = "http://192.168.10.91:8080/api/myattendance";

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
  }

    onSubmit() {
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.httpClient.get(this.baseUrl, 
      {params: {
        id: this.model.pId,
        month: this.model.month,
        year: this.model.year
     }}).subscribe((res)=>{
      this.sum = 0;
      this.hrs = 0;
      console.log(res);
      this.result = res['data'];
      console.log(this.result);
      for(let i=0;i<this.result.length;i++){
        this.sum  = this.sum + this.result[i].duration ;
      }
      this.hrs = this.sum / 60;
      alert('SUCCESS!! :-)\n' + this.hrs);
  });
  }

}
