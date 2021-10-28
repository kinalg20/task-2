import { Component } from '@angular/core';
import { ServiceTryService } from './service-try.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  namespace:any;
  title = 'Dropdown';
  states: any = [];
  city: any = [];
  result:any=[];

  constructor(private apiservice: ServiceTryService) {
    this.functionApi();
    this.functionApi1();
  }
  ngOninit() {

  }
  functionApi() {
    this.apiservice.getstate().subscribe((res) => {
      this.states = res;
    });
  }

  functionApi1() {
    this.apiservice.getcity().subscribe((res) => {
      this.city = res;
    });
  }
  // data(state:any){
  //   this.namespace=state;
  //   if (!this.states.toLowerCase().includes(state.toLowerCase())) {
  //     this.states.push(state)
  //   } else {
  //     var index = this.states.indexOf(state);
  //     if (index > -1) {
  //       this.states.splice(index, 1);
  //     }
  //   }
  // }
}
