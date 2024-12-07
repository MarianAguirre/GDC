import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MatTableModule } from '@angular/material/table';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-energy',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css'],
})
export class EnergyComponent implements AfterViewInit {
  electricConsumption = [
    { tipo: 'Equipos TI', consumo: 17 },
    { tipo: 'Sistemas de Refrigeración', consumo: 85 },
    { tipo: 'UPS', consumo: 22 },
    { tipo: 'Iluminación', consumo: 1.5 },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createAnnualConsumptionChart();
    }
  }

  private createAnnualConsumptionChart(): void {
    const ctx = document.getElementById('annualConsumptionChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Equipos TI', 'Refrigeración', 'UPS', 'Iluminación'],
        datasets: [
          {
            label: 'Consumo Anual (kWh)',
            data: [148920, 744600, 192720, 13140],
            backgroundColor: ['#66fcf1', '#45a29e', '#0f6b5b', '#c5c6c7'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }
}
