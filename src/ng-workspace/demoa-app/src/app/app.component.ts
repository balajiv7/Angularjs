import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location = 'vnr';
  // onBoxValueChange() {
  //   console.log("app component: Box value changed");
  // }
  onBoxValueChange(paramData: any)
{
  //console.log("app component: "+ (event.target as HTMLInputElement).value)
  console.log("app component : " + paramData.value)
}
}
