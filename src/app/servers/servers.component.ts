import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  Result:number=0;
  constructor() {
  }
  getValue(event:any){
    let str = event.target.value;
    let operators = ['+','-','*','/']
    if(operators.includes(str.charAt(str.length-1))){
    }
    else if( str.includes('=')) {
      alert("invalid")
    }
    else {
      this.Result = eval(str)
    }
  }
  ngOnInit(): void {
  }

}
