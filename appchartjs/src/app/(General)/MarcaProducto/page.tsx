'use client'
import { MarcaProducto } from "@/app/ServiciosApi/Api";
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: [],
    datasets: [{
      label: 'Productos por marca',
      data: [],
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#AA65CE', '#32C850',
        '#F26B38', '#00BFFF', '#FFD700', '#20B2AA', '#CD5C5C'
      ]
    }]
  });

  useEffect(() => {
    MarcaProducto()
      .then(data => {
        const labels = data.map((item: any) => item.brandcode);
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
      <Pie data={charData} />
    </div>
  );
}
