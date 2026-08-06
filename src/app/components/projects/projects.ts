import { Component, OnInit, OnDestroy } from '@angular/core';

export interface Project {

  title: string;

  category: string;

  description: string;

  technologies: string[];

  live: string;

  github: string;

  images: string[];

}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent implements OnInit, OnDestroy {
   currentImage = 0;

   intervalId: any;

  ngOnInit() {

  this.startSlider();

}

 ngOnDestroy() {

  this.stopSlider();

}


  startSlider() {

  this.stopSlider();

  this.intervalId = setInterval(() => {

    this.nextImage();

  }, 3000);

}

stopSlider() {

  if (this.intervalId) {

    clearInterval(this.intervalId);

  }

}

  ecoHomeImages = [

  '/images/hero.PNG',

  '/images/categories.PNG',

  '/images/featured-collections.PNG',

  '/images/wishlist.PNG',

  '/images/cart.PNG',

  '/images/newsletter.PNG',

  '/images/login.PNG',

  '/images/signup.PNG'

];

  nextImage() {

  this.currentImage =
    (this.currentImage + 1) %
    this.ecoHomeImages.length;

  this.startSlider();

}

 previousImage() {

  this.currentImage =
    (this.currentImage - 1 + this.ecoHomeImages.length) %
    this.ecoHomeImages.length;

  this.startSlider();

}

}
