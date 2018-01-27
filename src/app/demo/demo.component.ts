import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Name } from '../name';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './demo.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class DemoComponent implements OnInit {

  newNameFormTitle = 'Add a new singer';
  name: Name = new Name();
  names: Name[] = [
    {id: 1, fn: 'Kishore', ln: 'Kumar'},
    {id: 2, fn: 'Md.', ln: 'Rafi'},
    {id: 3, fn: 'Gulam', ln: 'Ali'},
    {id: 4, fn: 'Jagit', ln: 'Singh'},
    {id: 5, fn: 'Sonu', ln: 'Nigam'}
  ];
  constructor(private modalService: NgbModal) { }

  addNewName(content): void {
    // console.log('clicked on add');
    this.name = {id: 0, fn: '', ln: ''};
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  saveNewName(name): void {
    const lastId = this.names[this.names.length - 1].id;
    // console.log(lastId);
    const newUser: Name = {id: lastId + 1, fn: name.fn, ln: name.ln};
    this.names.push(newUser);
  }

  ngOnInit() {
  }

}
