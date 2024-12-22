import Footer from "@/components/custom/Footer"
import Header from "@/components/custom/Header"
// import ProductPage3 from "@/components/custom/Product3";
import CompanyStory from "@/components/custom/Story";
// import { Link } from "@chakra-ui/react";
/**
 * The main page of the app.
 *
 * This page is the entry point of the app. It displays the Next.js logo, a
 * list of instructions, and some links to useful resources.
 *
 * The page is styled using utility-first CSS, which is a set of classes
 * that can be used to style HTML elements. The classes are provided by the
 * `tailwindcss` package.
 *
 * The page also uses the `next/image` module to import and render the
 * Next.js logo.
 *
 * The page is responsive, meaning that it will adapt to different screen
 * sizes and devices.
 *
 * The page is also accessible, meaning that it follows best practices for
 * accessibility and can be used by people with disabilities.
 */
export default function Home() {
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      {/* <ProductPage /> */}
      {/* <ProductPage2 /> */}
       {/* <ProductPage3 /> */}
      <CompanyStory /> 
       {/* <CompanyStory />  */}
      {/* <nav className="flex gap-4">
          <Link href="/products">Product Page</Link>
    
        </nav> */}
        {/* <Navigation> */}
      </main>
      <Footer />
    </div>
  );
}
