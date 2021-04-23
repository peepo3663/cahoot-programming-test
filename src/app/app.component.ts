import { Component } from '@angular/core';
import {ApiService} from './api.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cahoot Interview Project - StackOverflow';
  search = null;
  currentPage = 0;
  searchResults: Array<any>;
  error: any;
  isLoading = false;
  request: Subscription;

  constructor(private apiService: ApiService) {
  }

  showPreSearchBar(): boolean {
    return this.search == null;
  }

  initiateSearch(): void {
    this.search = '';
  }

  endSearch(): void {
    this.search = null;
  }

  startSearch(): void {
    this.error = null;
    this.searchResults = null;
    if (!this.search || this.search.length === 0) {
      return;
    }
    this.isLoading = true;
    this.request = this.apiService.getPosts({searchKeyword: this.search, page: this.currentPage}).subscribe(response => {
      this.isLoading = false;
      this.request = null;
      this.searchResults = response;
    }, error => {
      this.isLoading = false;
      this.error = error;
      this.searchResults = null;
      this.request = null;
    });
  }

  onSearchBarTextChanged(event: any): void {
    const curSearch = event.target.value;
    this.search = curSearch.trim();
    if (this.search.length < 3) {
      event.preventDefault();
      return;
    }
    if (this.request) {
      this.request.unsubscribe();
      this.request = null;
    }
    this.startSearch();
  }
}
