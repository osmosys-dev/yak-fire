import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-hint-text',
  templateUrl: './input-hint-text.component.html',
  styleUrls: ['./input-hint-text.component.scss'],
})
export class InputHintTextComponent implements OnInit {

  public isHintText: boolean;
  public isInput: boolean;

  @Input()
  inputValue: string;
  @Input()
  textareaValue: string;


  @Input()
  public placeholder: string;
  @Input()
  public hintText: string;
  @Input()
  public hintTextColor: string;
  @Input()
  public type: string;

  constructor() { }

  ngOnInit() {
    this.toggleInputType();
  }

  triggerHintText(value: boolean){
    this.isHintText = value;
  }
  toggleInputType(){
    this.type === 'textarea' ? this.isInput = false : this.isInput = true;
  }

}
