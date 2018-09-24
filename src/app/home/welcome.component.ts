import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material';
import { Info } from './info.model';
import { InfoService} from "./info.service";

import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  templateUrl: './welcome.component.html',
  styleUrls:['./welcome.component.css']
})
export class WelcomeComponent implements OnInit
{
     createForm: FormGroup;
//   angForm: FormGroup;
  info: Info[];
  displayedColumns = ['name', 'email', 'phone', 'message'];
  constructor(private infoService: InfoService, private fb: FormBuilder, private router: Router){
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      email: '',
      phone: '',
      message: ''
    });
  }

  addInfo(name, email, phone, message) {
    this.infoService.addInfo(name, email, phone, message).subscribe(() => {
      // this.router.navigate(['/Link1']);
      // console.log('subscribing to link1');
    });
  }

  ngOnInit() {
  }

}
