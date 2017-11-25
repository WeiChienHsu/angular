import { FavoriteChangedEvenArgs } from './components/favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title:"Title",
    isFavorite: true
  }

  onFavoriteChanged(enventArgs:FavoriteChangedEvenArgs){
    console.log("Change!!!!!",enventArgs);
  }
}
