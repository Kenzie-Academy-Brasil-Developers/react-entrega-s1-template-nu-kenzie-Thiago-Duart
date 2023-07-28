import { Option } from "./Options/index";
export const Select = ({ id, description, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}>{description}</label>
      <select
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <Option value={"Entrada"}>Entrada</Option>
        <Option value={"Despesa"}>Despesa</Option>
      </select>
    </div>
  );
};
