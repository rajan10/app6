import { Component } from '@angular/core';
//import { ForbibddenNameDirective } from './forbibdden-name.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers: [ForbibddenNameDirective]
})
export class AppComponent {
  title = 'app6';

  bname:string="";
  bisbn:string="";
  bauthor:string="";

  msg:string="";

  onSubmitClick(){
   //alert("Book Name: "+this.bname+"\nISBN: "+this.bisbn+"\nAuthor: "+this.bauthor);
   console.log("Book Name: "+this.bname+"\nISBN: "+this.bisbn+"\nAuthor: "+this.bauthor);
   this.msg="SUCCESS:Form Submitted";

  // console.log(this.bauthor.valueOf());



  }
}
