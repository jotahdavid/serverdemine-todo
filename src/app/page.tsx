import { TodoItem } from "@/components/TodoItem";

export default function Home() {
  return (
    <div className="h-[100vh] text-white flex overflow-hidden">
      <aside className="h-full bg-green-950 px-16 py-14 max-w-[420px] flex flex-col justify-between">
        <header>
          <h1 className="text-5xl mb-20">ServerdeMine</h1>

          <div className="flex flex-col gap-y-5 mb-10 pb-10 border-b">
            <a className="text-2xl" href="#">
              Documentação
            </a>
            <a className="text-2xl" href="#">
              Documentação
            </a>
          </div>

          <div>
            <strong className="text-2xl mb-5 block">Categorias</strong>
            <ul className="space-y-5">
              {['Construção', 'Exploração', 'Automação'].map((categoryName) => (
                <li key={categoryName}>
                  <a href="#">
                    # {categoryName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <footer>
          <img src="#" alt="Logo" />
        </footer>
      </aside>

      <main className="h-full w-full bg-green-300 bg-[url('/minepattern.png')] overflow-y-auto">
        <div className="h-full p-14 flex flex-col">
          <button className="w-fit bg-green-950 py-2 px-8 rounded-sm hover:bg-green-900 transition-colors">
            Nova tarefa
          </button>

          <hr className="mt-8 mb-4" />

          <h2 className="text-2xl mb-7">A fazer</h2>

          <ul className="space-y-4 flex-1">
            <li>
              <TodoItem />
            </li>
            <li>
              <TodoItem />
            </li>
            <li>
              <TodoItem />
            </li>
          </ul>

          <hr className="mt-8 mb-4" />

          <h2 className="text-2xl mb-7">Concluido</h2>

          <ul className="space-y-4 pb-14">
            <li>
              <TodoItem />
            </li>
            <li>
              <TodoItem />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
