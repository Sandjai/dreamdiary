import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { SIZES } from "../../constants/ui";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <center>
        <p className="marBottomMed marTopLrg">404 Страница не найдена</p>
        <Button size={SIZES.l} onClick={() => navigate(-1)}>
          {" "}
          Вернуться назад{" "}
        </Button>
      </center>
    </>
  );
};
