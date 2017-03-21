import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MainpageService } from '../services/mainpage.service';
import { HttpModule} from '@angular/http';
import { LoginComponent  } from '../login/login.component';
import { AuthenticationService } from '../services/authentication.service' 
import { UserprofileService } from '../services/userprofile.service'


@Component({
  selector: 'app-mainpage',
  // declarations: [ LoginComponent ],
  templateUrl:'./mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  providers:[MainpageService,HttpModule,AuthenticationService,LoginComponent,UserprofileService]
})
//./mainpage.component.html
export class MainpageComponent implements OnInit {
  loading = false;
  public  Tutorials : any;
  // public looged
   checkToken = JSON.parse(localStorage.getItem('currentUser'));
  looged =this.logincomponent.looged;
  constructor(
    private router: ActivatedRoute,
    private mainpageService: MainpageService,
    private authenticationService: AuthenticationService,
    public logincomponent : LoginComponent,
    private userprofileService: UserprofileService

  ) {}

  ngOnInit() {

    // console.log('!!!!!!!!!!!!!!mainpage',checkToken);
                  console.log('looged',this.logincomponent.looged)
    this.loading = true;
        this.mainpageService.gettutorials()
            .subscribe(
                data => {
                  this.Tutorials = data;
                   // this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                });
  }

  Subscribe(TutorialID){
   var username = JSON.parse(localStorage.getItem('username'));
   this.userprofileService.addNewTutorial(TutorialID,username)
 
  //  console.log(username)
    // console.log(model)
    // console.log(owner)
    // console.log(this.Tutorials)
  }

} 