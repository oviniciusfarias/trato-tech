import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';
import contadorSlice from './reducers/contador';
import carrinhoSlice from './reducers/carrinho';
import buscaSlice from './reducers/busca';

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    contador: contadorSlice,
    carrinho: carrinhoSlice,
    busca: buscaSlice
  }
});

export default store;