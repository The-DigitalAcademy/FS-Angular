import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  formData = {
    title: '',
    name: '',
    surname: '',
    phone: '',
    email: '',
    consent: false,
    marketingConsent: false
  };

 
  constructor() { }

  ngOnInit(): void {
  }

 

  submitForm(form: any) {
    if (form.valid) {
      // Perform form submission logic here
      console.log(this.formData); // Just an example, you can replace this with your actual logic
    } else {
      // Handle form validation errors
      alert('Please fill in all required fields.');
    }
  }
}
