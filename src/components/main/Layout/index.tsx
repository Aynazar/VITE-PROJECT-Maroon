import { FC, memo, ReactNode } from "react";
import Header from "../../common/Header";

interface OwnProps {
  children?: ReactNode;
}

const Layout: FC<OwnProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="page">
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default memo(Layout);
