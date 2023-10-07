import { Component,ViewChild,Renderer2,ElementRef,AfterViewInit,ViewEncapsulation, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import  {TesteService} from './teste.service'
import { catchError, take, throwError } from 'rxjs';
import { DialogComponent, AnimationSettingsModel } from '@syncfusion/ej2-angular-popups';
import { CheckBoxComponent, ButtonModel } from '@syncfusion/ej2-angular-buttons';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import {Uppy} from '@uppy/core';
import DragDrop from '@uppy/drag-drop';

import Dashboard from '@uppy/dashboard';
import XHRUpload from '@uppy/xhr-upload';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  '../../node_modules/@uppy/core/dist/style.css',
  '../../node_modules/@uppy/dashboard/dist/style.css',
],
  providers:[TesteService]
})

export class AppComponent implements OnInit {
  title = 'teste'
  @ViewChild('tit2') tit2!:ElementRef<HTMLLIElement>;
  @ViewChild('novo') novo!:any;

  @Output() val = new EventEmitter<any>();
  isVisible: boolean=false;
  cor: string='black';
  someValue:number=0;
  postData!: any;

  text='Olá'
  data:any;
  data2:any;

  @ViewChild('modalDialog')
  public modalDialog!: DialogComponent;

  @ViewChild('overlay')
  public overlay!: CheckBoxComponent;

  @ViewChild('modalButton')
  public modalButton!: ButtonComponent;

  public target: string = '#modalTarget';
  public width: string = '335px';
  public header: string = 'Software Update';
  public content: string = 'Your current software version is up to date.';
  public isModal: Boolean = true;
  public animationSettings: AnimationSettingsModel = { effect: 'None' };

  uppy!: Uppy;

  tela:boolean=false;

  onDragOver(event: DragEvent): void {
    this.tela=true;
  }

  onDragLeave(event: DragEvent): void {
    this.tela=false;

  }

  constructor(private renderer:Renderer2, private teste:TesteService){}
  ngOnInit(): void {

    this.uppy = new Uppy({
      debug: true,
      autoProceed: false, // Don't upload automatically (you can change this)
    })
      .use(Dashboard, {
        inline: true, // Display the dashboard inline (optional)
      })
      .use(XHRUpload, {
        endpoint: '', // Your server upload endpoint
      })
      .use(DragDrop, { target: '#upp2' });



    this.teste.fetchData().subscribe((valor)=>{
      this.data=valor;
    });

  }

  obterVal(data:any){
    console.log(data);
    this.data2=data;
  }

  post(text:string){
    this.teste.postData({
      id: 1,
      title: text,
      body: 'bar',
      userId: 1,
    }).pipe(
      catchError((error) => {
      console.error('API Error:', error);
      return error;
    })).subscribe((data)=>{
      this.postData=data;
    })
  }

  onClick(){
 
     if(this.tit2.nativeElement.style.color==='black'){
      this.renderer.setStyle(this.tit2.nativeElement,'color','green');
      this.isVisible=true;
      this.cor='yellow';

    }else{

      this.renderer.setStyle(this.tit2.nativeElement,'color','black');
      this.isVisible=false;
      this.cor='black';

    }
  }

  incrementar(){
        this.text+='mundo';
        this.post(this.text);

       this.novo.atualizar();
       //this.teste.getAlert();
       
       (document.getElementById('ff') as HTMLElement).style.color='blue';

       console.log(this.text);
      // this.novo.texto=this.text;

     this.someValue+=1;
    if(this.someValue>2)
      this.someValue=0;
  }

}
