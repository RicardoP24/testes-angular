import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NodeSelectEventArgs } from '@syncfusion/ej2-angular-navigations';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'salvarAntesDoRefresh';
  @ViewChild('ejDialog') ejDialog!: DialogComponent;
  @ViewChild('container', { read: ElementRef, static: true }) container!: ElementRef;
  public targetElement!: HTMLElement;
  ultimoNodeSelecionado:any;
  visible:boolean=false
  podeIr:any=null;
  public hierarchicalData: Object[] = [
    { id: '01', name: 'Music', expanded: true,
        subChild: [
            {id: '01-01', name: 'Gouttes.mp3', selected:true},
                  ]
    },
    {
        id: '02', name: 'Videos',
        subChild: [
            {id: '02-01', name: 'Naturals.mp4'},
            {id: '02-02', name: 'Wild.mpeg'}
    ]
    },
    {
        id: '03', name: 'Documents',
        subChild: [
            {id: '03-01', name: 'Environment Pollution.docx'},
            {id: '03-02', name: 'Global Water, Sanitation, & Hygiene.docx'},
            {id: '03-03', name: 'Global Warming.ppt'},
            {id: '03-02', name: 'Social Network.pdf'},
            {id: '03-03', name: 'Youth Empowerment.pdf'},
        ]
    }
];
public field:Object ={ dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild' };

  public initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.container.nativeElement.parentElement;
  }


  ngOnInit() {
    window.addEventListener("beforeunload", (event) => {

       this.ejDialog.show()
    });

  }
  ir(){
    this.ejDialog.hide()
    this.visible=false;
    this.podeIr=true

  }

  verificaEstadoVariavel(){
    this.podeIr=null
    return new Promise<any>((resolve)=>{
      const funcao = ()=>{

        if(this.podeIr!=null){
          resolve(this.podeIr)
        }else{
          setTimeout(funcao, 200);
        }
      }

      funcao()
    })
  }
  
  iniciarTree(){
    this.ultimoNodeSelecionado=document.querySelector('#treeelement_active .e-list-parent .e-active')
    console.log(this.ultimoNodeSelecionado)
  }



  async onSelect(event:NodeSelectEventArgs){
    this.ejDialog.show()
    let result=await this.verificaEstadoVariavel()
    if(!result){
      event.node.classList.remove('e-active')
      this.ultimoNodeSelecionado.classList.add('e-active')
      return;
    }

    this.ultimoNodeSelecionado=event.node;
  }


 cancelar(){
    this.ejDialog.hide()
    this.visible=false;
    this.podeIr=false

  }
  openDialog(){
    if(!this.visible)
    	this.ejDialog.show()
    else
      this.ejDialog.hide()
      this.visible=!this.visible;
  }

}
