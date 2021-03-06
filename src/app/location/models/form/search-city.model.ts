import { Injectable } from '@angular/core';
import { WhereItem } from '@cartesian-ui/ng-axis';

@Injectable()
export class SearchCityForm {
  name: WhereItem = { column: 'name', operator: '=', value: null };
  code: WhereItem = { column: 'code', operator: '=', value: null };
}
