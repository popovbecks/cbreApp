import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform (employeeList, value) {
    return employeeList.filter(user => {
      return user.name.includes(value);
    })
  }

}
