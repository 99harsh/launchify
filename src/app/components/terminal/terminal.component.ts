import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit, AfterViewInit {
  @ViewChild('terminalInput', { static: false }) terminalInput!: ElementRef;
  
  inputContent: string = '';
  outputContent: string[] = ['Hello, world!'];  

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.focusInput();
  }

  focusInput() {
    this.terminalInput.nativeElement.focus();
  }

  handleInput(event: Event) {
    this.inputContent = (event.target as HTMLInputElement).value;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.executeCommand();
    }
  }

  executeCommand() {
   
  }
}