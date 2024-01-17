import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-ngtest',
  template:`
  <div>
  <h1>NG DIR</h1>
  <button (click)="onClick($event)">Click</button>
  </div>
  <div *ngIf="boolvalue; then thenblock;else elseblock"></div>
  <ng-template #thenblock>
    <h2>then block</h2>
  </ng-template>
  <ng-template #elseblock>
    <h2>else block</h2>
  </ng-template>
  <div [ngSwitch]="switch_option">
  <div *ngSwitchCase="'android'">{{switch_option}} was chosen by you</div>
  <div *ngSwitchCase="'ios'">{{switch_option}} was chosen by you</div>
  <div *ngSwitchCase="'windows'">{{switch_option}} was chosen by you</div>
  <div *ngSwitchCase="'mac'">{{switch_option}} was chosen by you</div>
  <div *ngSwitchDefault>Not this time</div>
  
  </div>


  <div *ngFor="let color of colors;">
    <h1 [style.color]="color">{{color}}</h1>
  
  </div>
  <input type="text" [(ngModel)]="trial" />
  {{trial}}
  <h1>{{name}}</h1>
  <button [style]="buttonstyle" (click)="fireEvent()" >Click</button>
  
  
  `,
  styles: [``]
})
export class NgtestComponent implements OnInit {
  

  @Input('parentData') public name:any;
  @Output() public childEvent= new EventEmitter();
  public colors=["violet","indigo","blue","green","yellow","orange","red"]
  public boolvalue=false
  public switch_option="android"
  public trial="";
  public buttonstyle={
    color:"white",
    borderRadius:"10px",
    borderWidth:"0",
    backgroundColor:"red",
    padding:"10px 20px"
  }
  constructor() { }

  ngOnInit(): void {
  }
  onClick(event:any){
    console.log(event);
    
  }
  fireEvent(){
    this.childEvent.emit("Event Fired")
  }

}
