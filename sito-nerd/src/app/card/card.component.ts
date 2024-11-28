import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  datiCarta : any;
  loading = false;

  constructor(private route:ActivatedRoute, private http:HttpClient){}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const CartaCaro = params.get('name')!;
    this.fetchdatiCarta(CartaCaro);
  });
    
  
}
fetchdatiCarta(CartaCaro : string): void{
  this.loading = true;
  const url = `https://api.scryfall.com/cards/named?fuzzy=${CartaCaro}`; // Usare backticks
  this.http.get(url).subscribe(
    (data) => {
      this.datiCarta = data;
      this.loading = false;
    },
    (error) => {
      console.error('Carta non trovata', error);
      this.loading = false;
    }
  );
}

}
