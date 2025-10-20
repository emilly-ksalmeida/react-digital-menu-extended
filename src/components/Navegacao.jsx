const Navegacao = ({ setCategoriaSelecionada, categoriaSelecionada }) => {
  const categoriasMenu = ["Pratos Principais", "Sobremesas", "Bebidas"];
  

  return (
    <div className="categorias">
      {categoriasMenu.map((categoria, index) => (
        <p
          onClick={() => setCategoriaSelecionada(index)}
          key={index}
          className={`categoria${
            index === categoriaSelecionada ? " categoria--selecionada" : ""
          }`}
        >
          {categoria}
        </p>
      ))}
    </div>
  );
};

export default Navegacao;
