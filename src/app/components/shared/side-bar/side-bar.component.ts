import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterArtistComponent } from '../../register-artist/register-artist.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  constructor(public dialog: MatDialog) {}

  openRegisterArtistDialog() {
    const dialogRef = this.dialog.open(RegisterArtistComponent, {
      width: '700px',
      panelClass: 'my-dialog-panel',
      hasBackdrop: false,
    });
  }
}
