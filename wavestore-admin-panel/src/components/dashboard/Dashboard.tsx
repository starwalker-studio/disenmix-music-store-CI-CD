import clsx from "clsx";
import { useState, type JSX } from "react";
import style from "./Dashboard.module.scss";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";

type DashboardProps = {
  children: JSX.Element;
};

export const Dashboard = ({ children }: DashboardProps) => {
  const [close, setClose] = useState<boolean>(false);

  const handleOpenCloseSideBar = () => {
    setClose((prevState) => !prevState);
  };
  return (
    <>
      <Header handleOpenCloseSideBar={handleOpenCloseSideBar} close={close} />
      <Sidebar close={close} />
      <div className={clsx(style.dashboard_container, close && style.wide_dashboard)}>
        <div className={style.dashboard_content}>{children}</div>
      </div>
    </>
  );
};
