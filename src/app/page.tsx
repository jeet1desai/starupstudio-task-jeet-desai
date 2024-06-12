import dynamic from "next/dynamic";

import StripOfferLoading from "@/components/StripOffer/loading";
const StripOffer = dynamic(() => import("@/components/StripOffer"), { loading: () => <StripOfferLoading /> });

import HeaderLoading from "@/components/Header/loading";
const Header = dynamic(() => import("@/components/Header"), { loading: () => <HeaderLoading /> });

import ProductListLoading from "@/components/ProductList/loading";
const ProductList = dynamic(() => import("@/components/ProductList"), { loading: () => <ProductListLoading /> });

import FooterLoading from "@/components/Footer/loading";
const Footer = dynamic(() => import("@/components/Footer"), { loading: () => <FooterLoading /> });

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <StripOffer />
      <Header />
      <ProductList />
      <Footer />
    </main>
  );
};

export default Home;
