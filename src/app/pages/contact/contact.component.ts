import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    form : FormGroup;
  constructor( private readonly fb: FormBuilder){
          
    this.form = this.fb.group({
        name: ["", Validators.required],
        email: ["", Validators.required, Validators.email],
        subject: ["", Validators.required],
        comment: [""],
    })
    
  }

}
