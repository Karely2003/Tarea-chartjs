'use client'
import { TotalTProducto } from "@/app/ServiciosApi/Api"
import React, { useEffect, useState } from 'react'
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: [],
    datasets: [{
      label: 'Valor total por tipo',
      data: [],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  });

  useEffect(() => {
    TotalTProducto()
      .then(data => {
        const labels = data.map((item: any) => item.productType);
        const valores = data.map((item: any) => parseFloat(item.valor_total));

        setCharData(prev => ({
          ...prev,
          labels,
          datasets: [{ ...prev.datasets[0], data: valores }]
        }));
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }, []);

  return (
    <div>
      <Radar data={charData} />
    </div>
  );
}
