import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/services/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  userObs: Observable<User>;
  authSubscription: Subscription;

  constructor(private router: Router,
    private authService: AuthService ) { }

  ngOnInit() {
    this.authSubscription = this.authService.getUser()
      .subscribe((user: User) => this.user = user);

    this.userObs = this.authService.getUser();
  }

  goToFeed() {
    this.router.navigate(['/feed']);
  }

}
