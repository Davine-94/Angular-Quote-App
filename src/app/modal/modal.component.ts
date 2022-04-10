import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  newQuote = new Quote("", "", "")

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(f: NgForm) {
    if (f.valid) {
      this.addQuote.emit(this.newQuote);
      this.newQuote = new Quote('', '', '');
    } else {
      alert('')
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}

// import {Component} from '@angular/core';

// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'ngbd-modal-basic',
//   templateUrl: './modal-basic.html'
// })
// export class NgbdModalBasic {
//   closeResult = '';

//   constructor(private modalService: NgbModal) {}

//   open(content:any) {
//     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }

//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return `with: ${reason}`;
//     }
//   }
// }
