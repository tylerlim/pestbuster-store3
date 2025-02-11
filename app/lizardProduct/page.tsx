// File: pages/product.js
import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import ProductLizardRep from "@/components/custom/ProductLizardRep";


export default function ProductPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
   
   <Header />
      {/* <header>
        <h1 className="text-3xl font-bold mb-4">Product Page</h1>
      </header> */}
      <main>
        <ProductLizardRep />
      </main>

    <Footer />
    </div>
  );
}
