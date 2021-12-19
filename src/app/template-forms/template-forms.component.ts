import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  @ViewChild('userForm' ,{static:true}) userForm:NgForm;
  public States = [
    { stateName:"India"},
    { stateName:"China"},
    { stateName:"Japan"},
    { stateName:"America"},
    { stateName:"Russia"}
  ]
     
  constructor() { 
    
  }

  ngOnInit() {

  }

  formData(userForm){
    this.userForm.reset();
    console.log(userForm)
  }

}
