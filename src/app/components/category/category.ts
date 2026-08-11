import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory!: Category;
  constructor(private categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data;
    })
  }
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }
  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return "list-group-item active";
    }
    return "list-group-item";
  }
}
