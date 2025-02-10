import { ReactNode } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        flex: 1,
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
