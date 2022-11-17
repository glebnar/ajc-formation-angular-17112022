import { Component } from '@angular/core';

@Component({
  selector: 'app-list-selfies',
  templateUrl: './list-selfies.component.html',
  styleUrls: ['./list-selfies.component.css']
})
export class ListSelfiesComponent {
  // selfies: string[] = ['', '', ''];
  selfies =  ['', '', ''];

  deleteSelfie(): void {
    this.selfies.pop();
  }

  addSelfie(): void {
    this.selfies.push('');
  }

  get isEmptyList(): boolean {
    return ! this.selfies || this.selfies.length === 0;
  }
}
