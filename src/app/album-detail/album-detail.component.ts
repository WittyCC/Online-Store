import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})

export class AlbumDetailComponent implements OnInit {
  albumId: string;
  albumToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = urlParameters['id'];
    });
    //OLD WAY
    // this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
    // console.log(this.albumToDisplay);

    // stevesFunction(passedArgument){return passedArgument+5 }
    // passedArgument => the code to the function

    // NEW WAY
    this.albumService.getAlbumById(this.albumId).subscribe(dataLastEmittedFromObserver => {
     //this.albumToDisplay = dataLastEmittedFromObserver;
     this.albumToDisplay = new Album(dataLastEmittedFromObserver.title,
                                      dataLastEmittedFromObserver.artist,
                                      dataLastEmittedFromObserver.description);
     console.log(this.albumToDisplay);
     });

  }

  goToMarketplace() {
    this.router.navigate(['marketplace']);
  };

}
