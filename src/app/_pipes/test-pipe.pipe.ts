import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   let returnVal: string = value;
  //   for(let i=0; i<args.length; i++) {
  //     returnVal += " " + args[i];
  //   }
  //   return returnVal;
  // }

  // transform(value: any): any {
  //   switch (typeof value) {
  //     case "string": {
  //       return `string: ${value}`;
  //       break;
  //     }
  //     case "object": {
  //       if (Array.isArray(value)) {
  //         if (value.length > 0 && typeof value[0] == "object") {
  //           return `array object: ${value}`;
  //         } else {
  //           return `array: ${value}`;
  //         }
  //       } else {
  //         return `object: ${value}`;
  //       }
  //       break;
  //     }
  //     default: {
  //       return `default: ${value}`;
  //       break;
  //     }
  //   }
  // }

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (data) {
      return JSON.stringify(data).toLowerCase().includes(args);
    });
  }
}
