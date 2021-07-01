import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html', //This is used when user wants template from another page.
  // styleUrls: ['./app.component.css'],
  template :`<body>
              <div>
                <!--<h1>
                    Welcome to Angular, {{name}}. {{500==500}} {{{name:"amit", age:20}.name}} {{['hi','bye'][1]}}
                    {{'Full name: '+ getFullName()}}
                    <img src={{image_path}} width="300"/>
                </h1>
                <hr>
                <img src={{pic}} width=400>
                <br>
                <button diabled=[value]>Button</button><br>
                <button (click)="onClick()">BUTTON CLICK</button>-->
                <app-display></app-display>

                <h2> Square root of 25 is {{25 | squareroot}}</h2>
              </div>
            </body>`// template multiline -> `. .template single line ->'
            //app-display in html. Either in template or templateUrl
})
export class AppComponent {
  title = 'my-app';
  name:string="Amit";
  image_path: string="https://www.natgeokids.com/wp-content/uploads/2014/10/emperor-penguin-facts-4.jpg";
  first_name: string="Amit";
  last_name: string="Raj Singh";
  pic: string="../assets/pic.jpg";
  value: boolean=false;
  getFullName(): string
  {
    return this.first_name+' '+this.last_name;
  }
  onClick(): void{
    console.log("Button Clicked");
  }
}
