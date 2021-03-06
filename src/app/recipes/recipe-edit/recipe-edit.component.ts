import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  private id: Number;
  private editMode: boolean = false;
  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param.id;
      this.editMode = this.id !== null;
      console.log(this.id + " -- " + this.editMode);
    })
  }

}
