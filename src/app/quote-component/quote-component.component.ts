import { Quote } from '../quote';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quote-component',
  templateUrl: './quote-component.component.html',
  styleUrls: ['./quote-component.component.scss']
})
export class QuoteComponentComponent implements OnInit {

  arrayQuotes:Quote[] = [
    new Quote('There is no Limit to what we, as women, can accomplish', 'Davine Phylis', 'Michelle Obama'),
    new Quote('The most alluring thing a woman can have is confidence', 'Nalah Mumbi', 'Beyonce Knowles'),
    new Quote('Be messy and complicated and afraid and show up anyways', 'Sammy Mwithi', 'Glennon Doyle'),
    new Quote('She does not know what the future holds, but is focussed', 'Paul Durr', 'Morgan Harper'),
    new Quote('A woman is the full circle. Within her lies great power','Lady Danbury','Serena Williams'),
    new Quote('In order to be irreplacable one must always be different', 'Jeniffer Muthoni','Coco Chanel')
  ]

  deleteQuote(del:any,index:number) {
    if (del) {
      this.arrayQuotes.splice(index,1)
    }
  }

  addLike(newLike:any, index:number) {
    if (newLike) {
      this.arrayQuotes[index].likes += 1
    }
  }

  addDislike(newDislike:any, index:number) {
    if (newDislike) {
      this.arrayQuotes[index].dislikes += 1
    }
  }

  newQuote(quoteNew:any) {
    this.arrayQuotes.push(quoteNew)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
