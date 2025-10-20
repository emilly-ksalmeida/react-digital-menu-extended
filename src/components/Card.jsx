import { useForm } from "react-hook-form";
import { useContext } from "react";
import Context from "../context/Context.js";

const Card = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const [itens, setItens] = useContext(Context);

  function adicionar(qtdeItem) {
    let numQtdeItem = Number(qtdeItem.qtde);
    const novaCompra = {
      produto: props.titulo,
      quantidade: numQtdeItem,
      precoUnitario: props.preco,
    };
    setItens(anterior=> [...anterior, novaCompra]);
    reset();
  }

  return (
    <div>
      <div className="card">
        <div className="card__textos">
          <h2 className="card__titulo">{props.titulo}</h2>
          <p>{props.descricao}</p>
          <p className="card__preco">{props.preco}</p>
        </div>
        <div className="card__img">
          <img src={props.imagem} alt={props.descricao} />
        </div>
        <div>
          <form onSubmit={handleSubmit(adicionar)}>
            <label>Quantidade: </label>
            <input
              {...register("qtde")}
              type="number"
              min="0"
              max="10"
              step="1"
            />
            <button type="submit">Adicionar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
