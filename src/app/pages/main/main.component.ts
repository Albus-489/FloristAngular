import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  slogan: string = 'флористика с душой';
  btnText: string = 'СМОТРЕТЬ РАБОТЫ';
}
