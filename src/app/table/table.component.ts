import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  employs: any;

  constructor(private lt: ListService, private route: Router) { }

  ngOnInit() {
    this.empDet();

  }
  empDet() {
    this.lt.getEmp().subscribe(res => {
      this.employs = res
      console.log(res.id);
    })
  }
  toUpdate() {
    this.route.navigate(['/update'])
  }
  toDelete(id: any) {
    this.lt.delEmp(id).subscribe((res) => {
      console.log("delete ts", res);
      window.location.reload();

    })

  }


}

