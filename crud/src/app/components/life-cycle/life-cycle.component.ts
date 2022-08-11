import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() number = 10;

  constructor() {
    console.log('Chamou o construtor')
   };
  
   ngOnChanges(): void {
    console.log('Chamou o OnChanges')
       
   };

  ngOnInit(): void {
    console.log('chamou o on Init')
  };

  ngDoCheck(): void {
    console.log('Chamou o ngDoChek')
  };

  ngAfterContentInit(): void {
    console.log('Chamou o ngAfterContentInit')
  };

  ngAfterContentChecked(): void {
    console.log('Chamou o ngAfterContentChecked')
  };

  ngAfterViewInit(): void {
    console.log('Chamou o AfterViewInit')
  };
  ngAfterViewChecked(): void {
    console.log('Chamou o ngAfterViewChecked')
  };
  ngOnDestroy(): void {
    console.log('Chamou o ngOnDestroy')
  }



}
