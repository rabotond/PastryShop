import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import 'aos/dist/aos.css';
import { RecipeComponent } from './recipe/recipe.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'scrollingPage';
  constructor(public dialog: MatDialog) {}

  cakes: Cake[] = [
    { name: 'Brownie', img_path: '../assets/brownie.jpg' },
    { name: 'Lemon Pie', img_path: '../assets/pie.jfif' },
    { name: 'Eszterházi torta', img_path: '../assets/eszerhazi.jpg' },
  ];

  openDialog() {
    const dialogRef = this.dialog.open(RecipeComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

interface Cake {
  img_path: string;
  name: string;
}
