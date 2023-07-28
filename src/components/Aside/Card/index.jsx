import style from "./style.module.css";
export const Card = ({ message, inAdnOut, value, id, removeInvestiment }) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const formatted = formatter.format(value);
  return (
    <div key={id} className={inAdnOut === "Entrada" ? style.entry : style.out}>
      <div className={style.info}>
        <h2 className="title two">{message}</h2>
        <p className="headline">{inAdnOut}</p>
      </div>
      <div className={style.handle}>
        <p>{formatted}</p>
        <button
          className="secundary delete"
          onClick={() => removeInvestiment(id)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};
