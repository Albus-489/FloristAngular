import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logoPath: string = '/assets/header/logo.png';
  navigationItems: string[] = ["УСЛУГИ", "АКЦИИ", "КОМПОЗИЦИИ", "ПОДАРОЧНЫЕ КАРТЫ", "НАШИ ПАРТНЁРЫ"]
  phoneNumber: string = "+7 (916) 392 17 77"

}
