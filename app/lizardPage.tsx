// File: pages/product.js
import ProductPage3 from "@/components/custom/Product3";

export default function lizardPage() {
  return (
    <div className="min-h-screen p-8 pb-20">
      <header>
        <h1 className="text-3xl font-bold mb-4">Product Page</h1>
      </header>
      <main>
        <ProductPage3 />
      </main>
    </div>
  );
}
