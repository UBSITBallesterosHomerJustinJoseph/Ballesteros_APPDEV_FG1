import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-product-list',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products = [
    {id:1, name:'Hutao Costume', price:'7865'},
    {id:2, name:'Mavuika Costume', price:'5677'},
    {id:3, name:'Raiden Costume', price:'4345'},
    {id:4, name:'Mualani Costume', price:'7523'},
    {id:5, name:'Furina Costume', price:'6785'}
    
  ]
}
