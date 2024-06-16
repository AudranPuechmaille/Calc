// calculator.component.ts

import { Component } from '@angular/core';

interface HistoryEntry {
  time: string;
  operation: string;
  result: number;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  selectedOperation: string = 'add';
  result: number = 0;
  history: HistoryEntry[] = [];

  calculate(): void {
    let operationSymbol: string;
    let operationResult: number;

    switch (this.selectedOperation) {
      case 'add':
        operationSymbol = '+';
        operationResult = this.number1 + this.number2;
        break;
      case 'subtract':
        operationSymbol = '-';
        operationResult = this.number1 - this.number2;
        break;
      case 'multiply':
        operationSymbol = '*';
        operationResult = this.number1 * this.number2;
        break;
      case 'divide':
        operationSymbol = '/';
        operationResult = this.number1 / this.number2;
        break;
      default:
        return;
    }

    this.result = operationResult;

    // Ajouter à l'historique
    const entry: HistoryEntry = {
      time: new Date().toLocaleString(),
      operation: `${this.number1} ${operationSymbol} ${this.number2}`,
      result: this.result
    };
    this.history.unshift(entry); // Ajoute à début de l'historique
  }

  deleteEntry(entry: HistoryEntry): void {
    const index = this.history.indexOf(entry);
    if (index !== -1) {
      this.history.splice(index, 1);
    }
  }
}
