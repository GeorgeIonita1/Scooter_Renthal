import ProductCardPreview from "./ProductCardPreview";

export default function ProductCardGrid() {
    return (
        <section className="container grid lg:w-4/5 md:grid-cols-2 gap-8 mx-auto">
            <ProductCardPreview />
            <ProductCardPreview />
        </section>
    );
}
