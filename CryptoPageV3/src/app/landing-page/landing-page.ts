import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from './header/header';
import { Introduction } from './introduction/introduction';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, Header, Introduction],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {

}
