import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./styles.module.css";
import { Header } from "../../components/Header/Header";
import { formatDate } from "../../utils/formatDate";
import { DreamTabs } from "../../components/DreamTabs/DreamTabs";
import { useRef, useState } from "react";

export const MainPage = () => {
  const navigate = useNavigate();

  const url = new URL(window.location.href);
  const { datestring } = useParams();

  const getDefaultMessage = () => {
    if (url.pathname.includes("/date/") && !url.pathname.includes("/dream/")) {
      return (
        <section>
          <Header>
            <h2>
              Список снов на{" "}
              {formatDate(new Date(datestring), { dateStyle: "long" })}
            </h2>

            <DreamTabs></DreamTabs>
          </Header>
          <div className="marTopLrg">
            <h3>Выбери сон или создай новый</h3>

            <Button
              onClick={() => {
                navigate(`/date/${datestring}/dream/newDream`);
              }}
              type="roundBtn"
            >
              {" "}
            </Button>
          </div>
        </section>
      );
    }
  };

  const [isOpen, setIsOpen] = useState(true);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div
        className={classNames(
          styles.contentWrapper,
          { [styles.contentWrapper_narrow]: !isOpen },
          {
            [styles.contentWrapper_wide]: isOpen,
          }
        )}
      >
        <Sidebar onClick={toggleSidebar} isOpen={isOpen}></Sidebar>
        <div className={styles.main}>
          {getDefaultMessage()}
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};
