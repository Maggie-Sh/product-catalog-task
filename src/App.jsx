import Header from "./components/header";
import Footer from "./components/footer";
import ProductsPage from "./pages/product-page";

const App = () => {
  return (
    <div className="min-h-[100svh] h-[100svh] flex flex-col">
      <Header />
      <main className="flex-1 py-4 flex gap-4 flex-col items-baseline sm:flex-row px-4 sm:px-0 sm:overflow-hidden">
        <ProductsPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
