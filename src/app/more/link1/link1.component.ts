import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule}
from '@angular/material';
import { InfoService } from '../../home/info.service';
import {Info} from "../../home/info.model";

@Component({
  selector: 'pm-link1',
  templateUrl: './link1.component.html',
  styleUrls: ['./link1.component.css']
})
export class Link1Component implements OnInit {

  info: Info[];
  private sorted = false;
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];

  constructor(private infoService: InfoService, private router: Router) { }

  ngOnInit() {
    this.fetchInfo();
  }

  fetchInfo() {
    this.infoService.getInfo()
      .subscribe((data: Info[]) => {
        this.info = data;
        // console.log('Data requested ... ');
        // console.log(this.info);
      });
  }

  sortBy(by: string | any): void {

    this.info.sort((a: any, b: any) => {
      if (a[by] < b[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a[by] > b[by]) {
        return this.sorted ? -1 : 1;
      }
      return 0;
    });

    this.sorted = !this.sorted;
  }

}
