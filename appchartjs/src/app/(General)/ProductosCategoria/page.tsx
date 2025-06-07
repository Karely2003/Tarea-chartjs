'use client'
import { ProductosCategoria } from "@/app/ServiciosApi/Api"
import React, { useEffect, useState } from 'react'
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: [],
    datasets: [{
      label: 'Productos por categoría',
      data: [],
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#00C49F', '#FF6F91'
      ]
    }]
  });

  useEffect(() => {
    ProductosCategoria()
      .then(data => {
        const labels = data.map((item: any) => item.categorycode);
        const valores = data.map((item: any) => item.total);

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
      <PolarArea data={charData} />
    </div>
  );
}
