import { useForm } from "react-hook-form";
import { useContext } from "react";
import Context from "../context/Context.js";

const formatarParaBRL = (valor) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
};

const Card = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const [itens, setItens] = useContext(Context);

  const precoFormatado = formatarParaBRL(props.preco);

  function adicionar(qtdeItem) {
    let numQtdeItem = Number(qtdeItem.qtde);
    const novaCompra = {
      produto: props.titulo,
      quantidade: numQtdeItem,
      precoUnitario: props.preco,
    };
    setItens((anterior) => [...anterior, novaCompra]);
    reset();
  }

  return (
    <div className="bg-white rounded-md px-4 py-4 shadow-xl/20">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1.5 w-3xs h-40">
          <h2 className="font-bold text-xl">{props.titulo}</h2>
          <p>{props.descricao}</p>
          <p >{precoFormatado}</p>
        </div>
        <div className="w-3xs rounded-md object-cover object-center overflow-hidden">
          <img className="object-center" src={props.imagem} alt={props.descricao} />
        </div>
        <div>
          <form 
          className="flex flex-col items-start gap-3 py-2"
          onSubmit={handleSubmit(adicionar)}>
            <div>
              <label>Quantidade: </label>
              <input
              className="w-24 rounded-md pl-2 bg-gray-100"
                {...register("qtde")}
                type="number"
                min="0"
                max="10"
                step="1"
              />
            </div>
            <button 
            className="bg-add-pedido rounded-md w-24 p-1 cursor-pointer "
            type="submit"
            >Adicionar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
