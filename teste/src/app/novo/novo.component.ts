import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css'],
})
export class NovoComponent implements OnChanges {
  @Input() texto!: string;
  @Input() funcaoClique!: () => void;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  @Output() evento = new EventEmitter<any>();
  a: number = 5;
  atualizar() {
    this.changeDetectorRef.detectChanges();
  }

  clique() {
    //this.funcaoClique();

    this.evento.emit(++this.a);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['texto']) {
      console.log(
        `O valor de entrada mudou para: ${changes['texto'].currentValue}`
      );
    }
  }
}
