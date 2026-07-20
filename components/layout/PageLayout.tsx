import type { ReactNode } from "react";
import Header from "./../core/Header";
import Footer from "../core/Footer";

type LayoutProps = {
  children: ReactNode;
  isHeader: boolean;
  isFooter: boolean;
};

function PageLayout({ children, isHeader, isFooter }: LayoutProps) {
  return (
    <div className="flex flex-col">
      {isHeader && <Header />}
      {children}
      {isFooter && <Footer />}
    </div>
  );
}

export default PageLayout;
