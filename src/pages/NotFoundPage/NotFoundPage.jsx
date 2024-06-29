import { useNavigate } from "react-router-dom";
import { Button_custom } from "../../components/Button/Button";
import { SIZES } from "../../constants/ui";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <center>
        <p className="marBottomMed marTopLrg">404 Страница не найдена</p>
        <Button_custom size={SIZES.l} onClick={() => navigate(-1)}>
          {" "}
          Вернуться назад{" "}
        </Button_custom>
      </center>
    </>
  );
};
