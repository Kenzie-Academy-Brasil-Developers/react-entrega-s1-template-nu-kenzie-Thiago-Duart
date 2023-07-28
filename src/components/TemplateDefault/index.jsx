import { Header } from "../Header/index";

export const TemplateDefault = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
    </>
  );
};
