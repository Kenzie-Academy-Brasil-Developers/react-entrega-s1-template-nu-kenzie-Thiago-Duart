import { Input } from "../../Forms/Inputs";
import { Select } from "../../Forms/Select/index";
import { Button } from "../../Buttons/index";
import style from "./style.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const Form = ({ addInvestiments }) => {
  const [description, setDescription] = useState("");
  const [money, setMoney] = useState("");
  const [typeInvestiments, setInvestiments] = useState("Entrada");

  function handleSubmit(e) {
    e.preventDefault();
    if(description !== "" && money !== ""){
    const formData = {
      id: uuidv4(),
      description: description,
      money: money,
      typeInvestiments: typeInvestiments,
    };
    addInvestiments(formData);
  }else{
    alert("Preencha todos os campos")
  }
    setDescription("");
    setMoney("");
  }

  return (
    <div className="container">
      <div className={style.form__container}>
        <form onSubmit={handleSubmit} className={style.form}>
          <Input
            id={"description"}
            type={"text"}
            label={"Descrição"}
            placeholder={"Digite aqui sua descrição"}
            value={description}
            setValue={setDescription}
          />
          <span className="headline body">EX: Compra de roupas</span>
          <Input
            id={"money"}
            type={"number"}
            label={"Valor{R$}"}
            placeholder={"1"}
            value={money}
            setValue={setMoney}
          />
          <Select
            description={"tipo de valor"}
            id={"investiments"}
            value={typeInvestiments}
            setValue={setInvestiments}
          />
          <Button type={"submit"} styleClass={"btn"}>
            Inserir valor
          </Button>
        </form>
      </div>
    </div>
  );
};
