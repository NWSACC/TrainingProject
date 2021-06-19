import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoop]'
})
export class LoopDirective {

  constructor(
    private template: TemplateRef<any>, 
    private viewContainer: ViewContainerRef) {
  }

  @Input() set appLoop(count: number) {
    this.viewContainer.clear();
    for(let i=0; i<count; i++) {
      this.viewContainer.createEmbeddedView(this.template);
    }
  }

}
