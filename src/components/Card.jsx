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
    <div className="bg-white flex flex-col items-center gap-2 rounded-md p-4 shadow-xl/20 max-w-xs">
      
        <div className="flex flex-col gap-1.5 w-3xs h-40">
          <h2 className="font-extrabold text-xl">{props.titulo}</h2>
          <p>{props.descricao}</p>
          <p className="font-semibold">{precoFormatado}</p>
        </div>
        <div className="w-3xs rounded-md object-cover object-center overflow-hidden">
          <img src={props.imagem} alt={props.descricao} />
        </div>
          <form 
          className="flex flex-col items-start gap-3 w-3xs py-2"
          onSubmit={handleSubmit(adicionar)}>
            <div>
              <label className="font-bold">Quantidade: </label>
              <input
              className="w-24 rounded-md pl-2 bg-gray-200"
                {...register("qtde")}
                type="number"
                min="0"
                max="10"
                step="1"
              />
            </div>
            <button 
            className="bg-add-pedido text-white font-extrabold rounded-md w-24 p-1 cursor-pointer "
            type="submit"
            >Adicionar</button>
          </form>     
    </div>
  );
};

export default Card;
