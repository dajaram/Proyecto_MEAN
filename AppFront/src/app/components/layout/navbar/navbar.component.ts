import { Component } from '@angular/core';
import { take } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent {
  userIsLoggedIn: boolean = false;
  subscription: any


  constructor(private sharedService: SharedService) { }


  async ngOnInit() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }

    if (localStorage.getItem('user_token')) {
      this.userIsLoggedIn = true;
    } else {
      this.userIsLoggedIn = false;
    }
  }


  footer() {
    document.getElementById('footer1')?.scrollIntoView({ behavior: 'smooth' })
  }

  onToggleCart() {
    this.subscription = this.sharedService.getCartStatus().pipe(take(1)).subscribe()
  }
}