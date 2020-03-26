import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  title:string=""; 
  products=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 
  closeResult = '';
  constructor(private route:ActivatedRoute) { }
  add:boolean=false;
  ngOnInit(): void {
    this.title= this.route.snapshot.paramMap.get('id');
  }
  addtocart()
  {
    this.add=!this.add; 
  }
}
