import Navbar from "./components/Navbar";


function StandardLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="pt-[0px]">{children}</div>
    </div>
  );
}

export default StandardLayout;
