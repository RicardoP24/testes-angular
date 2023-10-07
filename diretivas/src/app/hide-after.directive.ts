import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideAfter]'
})
export class HideAfterDirective implements OnInit {

  @Input('appHideAfter') delay= 0;
  // se o input tiver o mesmo nome que o selector ou @Input('appHideAfter') delay=0;  
  // pode se usar a sintaxe *appHideAfter=5000 para qualquer 
  @Input('appHideAfterThen') outraDiv:TemplateRef<any> | null =null;

  constructor(public viewContainer:ViewContainerRef,
    public template:TemplateRef<any>
    ) {}

     ngOnInit(){
        this.viewContainer.createEmbeddedView(this.template);
        setTimeout(() => {
          this.viewContainer.clear()
          if(this.outraDiv)
            this.viewContainer.createEmbeddedView(this.outraDiv)
        }, this.delay);
     }
     

}
