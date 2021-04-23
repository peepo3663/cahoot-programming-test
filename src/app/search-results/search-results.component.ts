import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataLength: number;
  @Input() dataSource: Array<any>;
  @Input() pageIndex: number;
  @Output() pageChange: EventEmitter<PageEvent>;

  DEFAULT_PAGE_SIZE = 10;

  constructor(private apiService: ApiService) {
    this.pageChange = new EventEmitter<PageEvent>();
  }

  ngAfterViewInit(): void {
    this.apiService.getPostsCount().subscribe(res => {
      this.dataLength = res.postCounts;
    }, err => {
      this.dataLength = 0;
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageChange.emit(event);
  }
}
