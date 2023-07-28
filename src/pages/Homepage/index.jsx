import { TemplateDefault } from "../../components/TemplateDefault";
import { Registration } from "../../components/sections/RegistrationValue/index";
import style from "./style.module.css";
export const Homepage = () => {
  return (
    <>
      <TemplateDefault>
        <main className={style.main}>
          <Registration />
        </main>
      </TemplateDefault>
    </>
  );
};
