import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./sample-page.component.css']
})
export class SamplePageComponent implements OnInit {
  closeResult: string;
  optionsModel: number[];
  myOptions: IMultiSelectOption[];

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  setResponse(resp): void {
    this.closeResult = '';
    if (resp === 0) {
      this.closeResult = 'Fruit';
    } else if (resp === 1) {
      this.closeResult = 'Vegetable';
    }
  }

  ngOnInit() {
    this.myOptions = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
    ];
  }

  onChange() {
    console.log(this.optionsModel);
  }

}
