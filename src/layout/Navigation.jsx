import Header from "@/components/navigation/Header";

export default function Navigation({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <div></div>
    </>
  );
}
