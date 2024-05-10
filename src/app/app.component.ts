import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sil';
  liczba: number = 0;
  silnia:number = 0;
  liczby: number[] = [];
  wyniki: string[] = [];

  genLiczby(n: number): number[] {
    const liczby: number[] = [];
    for (let i = 0; i <= n; i++) {
      liczby.push(i);
    }
    return liczby;
  }
  
  licz(n: number): number {
    let wynik = 1;
    for(let i = 1; i <= n; i++){
      wynik *= i;
    }
    return wynik;
  }

  obliczWyniki(n: number): string[] {
    const wyniki: string[] = [];
    let wynik = '1';
    for (let i = 2; i <= n; i++) {
      wynik += ` * ${i}`;
      wyniki.push(`${i}! = ${wynik} = ${this.licz(i)}`);
    }
    return wyniki;
  }

  obliczSilnie(){
    if(this.liczba == 0){
      this.silnia = 1;
    }else{
      this.silnia = this.licz(this.liczba);
      this.liczby = this.genLiczby(this.liczba);
      this.wyniki = this.obliczWyniki(this.liczba);
    }
  }

}
