export const Input = ({
  id,
  type,
  placeholder,
  label,
  name,
  setValue,
  value,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
