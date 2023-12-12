import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  searchInput: string = '';
  title = 'angular-searchbar-exercise';
  mockData: string[] = ['apple', 'bat', 'app', 'date', 'ball', 'kiwi', 'orange','App','Ball','Bat','grape','vegetables','Ankita','Akshay','Mayuri','Abhijeet','joshi','a','abc','Ask','Kurta'];
  filteredWords: string[] = [];
  onInputChange() {
    this.filteredWords = this.mockData.filter(word =>
      word.toLowerCase().startsWith(this.searchInput.toLowerCase())
    );
  }

  selectSuggestion(word: string) {
    this.searchInput = word;
    this.filteredWords = [];
  }
}
