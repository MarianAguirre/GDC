import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Chart } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-costos',
  standalone: true,
  templateUrl: './costos.component.html',
  styleUrls: ['./costos.component.css'],
})
export class CostosComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderTotalCostsChart();
    }
  }

  renderTotalCostsChart() {
    const canvas = document.getElementById('totalCostsChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Hardware',
          'Software',
          'Construcción',
          'Terreno',
          'Seguridad Física',
          'Servicio de Internet',
          'Puesta a Tierra',
          'Generador',
        ],
        datasets: [
          {
            data: [
              59223776, // Hardware
              535182, // Software
              716700, // Construcción
              1209600, // Terreno
              346759, // Seguridad Física
              13156, // Servicio de Internet
              48859, // Puesta a Tierra
              2000000, // Generador
            ],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              '#C9CBCF',
              '#66BB6A',
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }
}
