import ListaDeNotas from './components/listaDeNotas'
function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua Nota..."></textarea>
        <button>Criar Nota</button>
      </form>
      <ListaDeNotas />
    </section>

  );
}

export default App;
