import { Card } from "./Card/index";
import style from "./style.module.css";
export const Aside = ({ investimentsList, removeInvestiment }) => {
  return (
    <aside className={style.aside}>
      <h1 className="title three">Resumo financeiro</h1>
      <div>
        {investimentsList.length === 0 ? (
          <div className={style.message}>
            <p className="title two">Você ainda nao possui nenhum lançamento</p>
          </div>
        ) : (
          investimentsList.map((ele) => {
            return (
              <Card
                key={ele.id}
                id={ele.id}
                message={ele.description}
                inAdnOut={ele.typeInvestiments}
                value={ele.money}
                removeInvestiment={removeInvestiment}
              />
            );
          })
        )}
      </div>
    </aside>
  );
};
