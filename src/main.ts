import 'zone.js/dist/zone';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h1>Contact us!</h1>
    <div class='container'>
    <form class="section" (submit)="onSubmit()">
      <div class="name">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" />
      </div>
    
      <div class="email">
        <label for="email">E-mail</label>
        <input id="email" name="email" type="text" />
      </div>
    
      <div class="phone">
        <label for="phone">Cell Phone#</label>
        <input id="phone" name="phone" type="tel" />
      </div>
    
      <div class="button-section">
        <button type="submit" class="btn btn-primary" id="submit">Submit</button>
        <button type="button" class="btn btn-secondary">Clear</button>
      </div>
      <div class="result">
        <b>Print the details!</b>
        <p>Name: </p>
        <p>Email: </p>
        <p>Phone Number (XXX XXX-XXXX): </p>
      </div>
    </form>
    </div>
  `,
})
export class App {
  
 
  onSubmit() {}
}

bootstrapApplication(App);
