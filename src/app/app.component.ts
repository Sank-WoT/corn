import { Component, OnInit } from '@angular/core';
import { DataService } from './dog.service';
import { Dog } from './class/dog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app works!';
  public item: Dog;
  public dog: Dog[] = [];

  hidden: boolean = false;
  sendShow: boolean = true;
  constructor(private dataService: DataService) {this.title = "100";}
  	ngOnInit(){
		  //this.dataService.getData().subscribe(data => this.dog = data);
		  console.log(this.dog);
	}
  Show() {
    this.hidden = !this.hidden;
    this.sendShow = !this.sendShow; 
  }
}

