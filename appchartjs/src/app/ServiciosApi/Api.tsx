export const MarcaProducto = async () => {
  const response = await axios.get(`${URL_API}/productos-por-marca`);
  return response.data;
}

export const ProductosCategoria = async () => {
  const response = await axios.get(`${URL_API}/productos-por-categoria`);
  return response.data;
}

export const TotalTProducto = async () => {
  const response = await axios.get(`${URL_API}/valor-total-por-tipo`);
  return response.data;
}
