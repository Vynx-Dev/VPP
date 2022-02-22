import { Component, OnInit } from '@angular/core';

import { ObtainTextService } from '../obtain-text.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  rawlist: any;

  constructor(private obtainTextService: ObtainTextService) { }

  ngOnInit(): void {
    this.getRawData();
  }

  getRawData() {
    this.obtainTextService
      .getRawData()
      .subscribe(
        data => this.rawlist=data,
        error => console.log(error)
      );
  }

}
