import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Name } from '../name';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './demo.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '../../../node_modules/font-awesome/css/font-awesome.min.css'
  ]
})
export class DemoComponent implements OnInit {

  newNameFormTitle = '';
  confirmationMessage = '';
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
    this.newNameFormTitle = 'Add a new singer';
    this.name = {id: 0, fn: '', ln: ''};
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  editName(content, id): void {
    // console.log('inside editName');
    this.newNameFormTitle = 'Edit Name';
    const nameIdx = this.findNameById(id);
    // console.log(`Name index = ${nameIdx}`);
    this.name.id = this.names[nameIdx].id;
    this.name.fn = this.names[nameIdx].fn;
    this.name.ln = this.names[nameIdx].ln;
    this.modalService.open(content);
  }

  saveNewEditName(name): void {
    const lastId = this.names[this.names.length - 1].id;
    let nameIndex: number;
    // console.log('inside saveNewEditName');
    // console.log(lastId);
    // console.log(`Id of the returned name ${name.id}`);
    if (name.id === 0) { // add a new name
      const newUser: Name = {id: lastId + 1, fn: name.fn, ln: name.ln};
      this.names.push(newUser);
    } else { // edit an existing name
      nameIndex = this.findNameById(name.id);
      this.names[nameIndex].id = name.id;
      this.names[nameIndex].fn = name.fn;
      this.names[nameIndex].ln = name.ln;
    }
  }

  confirmDeletion(content, id): void {
    const nameIdx = this.findNameById(id);
    this.name.id = this.names[nameIdx].id;
    this.name.fn = this.names[nameIdx].fn;
    this.name.ln = this.names[nameIdx].ln;
    this.confirmationMessage = `Confirm deletion of "${this.name.fn} ${this.name.ln}"`;
    this.modalService.open(content);
  }

  deleteName(id): void {
    const entryIdx = this.findNameById(id);
    this.names.splice(entryIdx, 1);
  }

  private findNameById(id): number {
    // console.log(`edit name with id=${id}`);
    // console.log('inside findNameById');
    let nameIdx = 0;
    let name: Name = new Name();
    for (name of this.names) {
      if (name.id === id) {
        nameIdx = this.names.indexOf(name);
      }
    }
    return nameIdx;
  }

  ngOnInit() {
  }

}
