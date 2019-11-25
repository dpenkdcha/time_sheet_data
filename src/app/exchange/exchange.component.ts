import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
model: any = {};
result: any =  {};
sum: any =  0;
hrs: any =  0;
baseUrl:string = "http://dxa.streebo.com/MFRestService/StreeboAdapter/FEBServiceCall";
temp11: any = {};
temp21: any = [];

constructor(private httpClient : HttpClient) { }

ngOnInit() {
}

onSubmitExchange() {
  //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  //console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  let headers = new HttpHeaders({
    'accessToken':  this.model.accessToken});
  let options = { headers: headers };

  this.httpClient.post(this.baseUrl, 
    {"record":
      {"name":"09a4ec83-751d-4e42-9708-ae67559cdf2f",
      "form":"F_Points1",
      "accessToken":this.model.accessToken,
      "ltpaToken":this.model.ltpaToken,
      "searchfilter":
      "F_DropDown1=" + this.model.email + "&F_Date1__lte=" + this.model.toDate + "&F_Date2__gte="+this.model.fromDate+"",
      "recordBetweenDates":"all",
      "colFilter":"[\"F_Number3\",\"F_SingleLine3\",\"F_Status\",\"F_DropDown1\",\"F_DropDown3\",\"F_DropDown2\",\"F_DropDown4\",\"F_Date1\",\"F_Date2\",\"F_Paragraphtext1\",\"F_DropDown5\",\"F_DropDown7\",\"F_DropDown6\",\"F_Number7\",\"F_Paragraphtext5\",\"F_CheckBox1\",\"F_DropDown8\",\"F_Paragraphtext3\",\"F_DropDown9\",\"F_DropDown10\"]"},
      "name":"nitro:in-app:672708eb-d2b9-43e4-8c0c-d598c1fa4dcf:ce24461b-a49c-4b86-8098-beb531272471","button":"id",
      "state":"ST_Start",
      "form":"F_RMyAllocation1"}
    ,options).subscribe((res)=>{
      this.result = res;
      console.log("Data", res);
      if(this.result.status == 200) {
        alert("Success");
        console.log("Data1", JSON.parse(this.result.data.value));
        this.temp11 = JSON.parse(this.result.data.value);
        this.temp21 = this.temp11.data.data;
        for(var arrEle of this.temp21) {
          console.log("Task Name : ", arrEle['F_Paragraphtext1'].split('-')[0]);
          console.log("Allocated Hours : ", arrEle['F_Number3']);
          console.log("Entered Hours : ", arrEle['F_Number7']);
          console.log("Rating : ", arrEle['F_SingleLine3']);
        }



      }
      
    });
  }

}
