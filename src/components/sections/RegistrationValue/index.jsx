import { Aside } from "../../Aside";
import { Form } from "../Form/index";
import { Sum } from "../Sum/index";
import { useState } from "react";
import style from "./style.module.css";
export const Registration = () => {
  const [investimentsList, setInvestimentsList] = useState([]);
  const addInvestiments =(data)=> {
    setInvestimentsList([...investimentsList, data]);
  }
  const removeInvestiment =(removeId)=> {
    const newInvestimentsList = investimentsList.filter(
      (inv) => inv.id !== removeId
    );
    setInvestimentsList(newInvestimentsList);
  }
  return (
    <section className="container">
      <div className={style.section}>
        <div>
          <Form addInvestiments={addInvestiments} />
          <Sum investimentsList={investimentsList} />
        </div>
        <div className={style.aside}>
          <Aside
            investimentsList={investimentsList}
            removeInvestiment={removeInvestiment}
          />
        </div>
      </div>
    </section>
  );
};
