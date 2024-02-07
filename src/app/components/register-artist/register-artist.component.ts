import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register-artist',
  templateUrl: './register-artist.component.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  styleUrl: './register-artist.component.scss',
})
export class RegisterArtistComponent {
  ArtistForm!: FormGroup;
  mobNumberPattern =
    '^(961(3|70|71|76|78|79|81)|(03|70|71|76|78|79|81))[0-9]{6}$';
  albumDate: String = '';
  songName: String = '';
  songDuration: number = 0;
  albumPic!: File;

  constructor(public dialog: MatDialog, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ArtistForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      dob: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required]),
      profilePicture: new FormControl(null, [Validators.required]),
      stageName: new FormControl(null),
      artistBackstory: new FormControl(null),
      startingDate: new FormControl(null),
      albums: new FormArray([]),
    });
  }

  albumDateKey(event: any) {
    this.albumDate = event.target.value
  }

  songNameKey(event: any) {
    this.songName = event.target.value
  }

  songDurationKey(event: any) {
    this.songDuration = event.target.value
  }

  closeRegisterArtistDialog() {
    const dialogRef = this.dialog.closeAll();
  }

  calculateAge(date: number) {
    let birthday = new Date(date);
    let now = new Date();
    return now.getFullYear() - birthday.getFullYear() >= 25;
  }

  onProfilePicPicked(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.ArtistForm.patchValue({ profilePicture: file });
  }

  onAlbumPicPicked(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    // this.ArtistForm.patchValue({ profilePicture: file });
    this.albumPic = file
  }

  onSubmit() {
    this.ArtistForm.value.albums.push({ albumPicture: this.albumPic });
    this.ArtistForm.value.albums.push({ albumDate: this.albumDate });
    this.ArtistForm.value.albums.push({Songs: [{
      songName: this.songName,
      songDuration: this.songDuration
    }]});
    console.log('Artist Registration: ', this.ArtistForm.value);
    this.closeRegisterArtistDialog();
  }
}
