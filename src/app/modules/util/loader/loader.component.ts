import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  private subLoader: Subscription = new Subscription();

  showLoader: boolean = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.subLoader = this.loaderService.showSpinner.subscribe(showLoader => {
      this.showLoader = showLoader;
    }) 
  }

  ngOnDestroy(): void {
    if(this.subLoader){
      this.subLoader.unsubscribe();
    }
  }

}
