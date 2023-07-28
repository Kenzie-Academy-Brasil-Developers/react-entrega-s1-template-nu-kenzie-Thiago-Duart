import style from "./style.module.css";
export const Sum = ({ investimentsList }) => {
  let array = [];
  const arrayMoney = investimentsList.map((e) => {
    return e.typeInvestiments === "Despesa"
      ? (array = parseFloat(-e.money))
      : (array = parseFloat(e.money));
  });
  const sumMoney = arrayMoney.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const formatted = formatter.format(sumMoney);
  return (
    <div className="container">
      <div className={style.total__container}>
        <div>
          <h2 className="title three">Valor Toltal</h2>
          <p className="title three sum">{formatted}</p>
        </div>
        <p className="headline body">o valor se refere ao saldo</p>
      </div>
    </div>
  );
};
