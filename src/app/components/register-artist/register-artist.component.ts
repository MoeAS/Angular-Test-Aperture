import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-artist',
  templateUrl: './register-artist.component.html',
  styleUrl: './register-artist.component.scss',
})
export class RegisterArtistComponent {
  ArtistForm!: FormGroup;
  mobNumberPattern = "(?:\+961|961)?(1|0?3[0-9]?|[4-6]|70|71|76|78|79|7|81?|9)\d{6}"; 

  constructor() {}

  ngOnInit(): void {
    this.ArtistForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      dob: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required]),
      profilePicture: new FormControl(null, [Validators.required]),
      stageName: new FormControl(null),
      artistBackstory: new FormControl(null),
      startingDate: new FormControl(null),
      albums: new FormControl(null),
    });
  }

  calculateAge(date: number) {
    let birthday = new Date(date);
    let now = new Date();
    return now.getFullYear() - birthday.getFullYear() >= 25;
  }

  onSubmit() {

  }
}
