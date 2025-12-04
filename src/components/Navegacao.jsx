const Navegacao = ({ setCategoriaSelecionada, categoriaSelecionada }) => {
  const categoriasMenu = ["Pratos Principais", "Sobremesas", "Bebidas"];
  
  return (
    <div className="rounded-md bg-nav min-w-[260px] flex flex-col sm:flex-row gap-0.5 p-2 items-center justify-evenly">
      {categoriasMenu.map((categoria, index) => (
        <p
          onClick={() => setCategoriaSelecionada(index)}
          key={index}
          className={`w-58 sm:w-80 rounded-md text-center
            p-1 text-white font-semibold cursor-pointer ${
            index === categoriaSelecionada ? "bg-category-selec transition-colors duration-200 ease-in-out" : ""
          }`}
        >
          {categoria}
        </p>
      ))}
    </div>
  );
};

export default Navegacao;
