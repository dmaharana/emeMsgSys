import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./sample-page.component.css']
})
export class SamplePageComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  ngOnInit() {
  }

}
