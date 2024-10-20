import PageCarrinho from "pages/Carrinho";
import PageCategoria from "pages/Categoria";
import PageHome from "pages/Home";
import PaginaPadrao from "pages/PaginaPadrao";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<PageHome />} />
          <Route path='categoria/:nomeCategoria' element={<PageCategoria />} />
          <Route path='carrinho' element={<PageCarrinho />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;