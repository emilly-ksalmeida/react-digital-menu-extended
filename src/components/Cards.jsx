import Card from "./Card";
import { pratosPrincipais, sobremesas, bebidas } from "../assets/cardapio.js";

const Cards = ({ categoriaSelecionada }) => {
  const itensCategorias = [pratosPrincipais, sobremesas, bebidas];
  const pratos = itensCategorias[categoriaSelecionada];
  return (
    <div className="cards">
      {pratos.map((prato) => (
        <Card
          key={prato.id}
          titulo={prato.nome}
          descricao={prato.descricao}
          preco={prato.preco}
          imagem={prato.imagem}
        />
      ))}
    </div>
  );
};

export default Cards;
