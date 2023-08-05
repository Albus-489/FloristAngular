import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-outline',
  templateUrl: './btn-outline.component.html',
  styleUrls: ['./btn-outline.component.scss']
})
export class BtnOutlineComponent {
  @Input() btnText: string = 'Your text';

}
