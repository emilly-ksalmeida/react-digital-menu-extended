const Navegacao = ({ setCategoriaSelecionada, categoriaSelecionada }) => {
  const categoriasMenu = ["Pratos Principais", "Sobremesas", "Bebidas"];
  
  return (
    <div className="rounded-md bg-nav flex flex-row gap-8 py-4 px-4 items-center justify-center">
      {categoriasMenu.map((categoria, index) => (
        <p
          onClick={() => setCategoriaSelecionada(index)}
          key={index}
          className={`w-1/3 rounded-md text-center
            p-2 text-white cursor-pointer ${
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
