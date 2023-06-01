import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(public authService: AuthService) {}
  ngOnInit(): void {}
}
