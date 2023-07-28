export const Button = ({ styleClass, children, type }) => {
  return (
    <button type={type} className={styleClass}>
      {children}
    </button>
  );
};
