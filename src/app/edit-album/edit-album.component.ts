import { Component, Input, OnInit } from '@angular/core';

//to use a service you need to
// 1. Imports the AlbumService at the top of the file.
// 2. Adds a providers property to the component's annotation.
// 3. Registers AlbumService in the providers array
// 4. Declares a new instance of AlbumService in the constructor.
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
  providers: [AlbumService]
})
export class EditAlbumComponent implements OnInit {

  //our variables

  //To input data from parent you need to
  //1. Import Input from core above
  //2. Add decorator @input() to a variable
  //3. add the link in the parents HTML where:
  // [selectedAlbum]="album" read as [whatTheChildSees]="parentsName"
  @Input() selectedAlbum;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }
  //new method here

  beginUpdatingAlbum(albumToUpdate){
    this.albumService.updateAlbum(albumToUpdate);
  }
}
