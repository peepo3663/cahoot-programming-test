import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() dataSource: Array<any>;
  @Input() pageIndex: number;

  DEFAULT_PAGE_SIZE = 10;

  constructor() {

  }

  ngAfterViewInit(): void {

  }
}
