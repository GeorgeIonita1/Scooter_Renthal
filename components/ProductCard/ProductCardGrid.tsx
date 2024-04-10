import ProductCardPreview from "./ProductCardPreview";

export default function ProductCardGrid() {
    return (
        <section className="grid lg:grid-cols-2 gap-8 w-4/5 mx-auto">
            <ProductCardPreview />
            <ProductCardPreview />
        </section>
    );
}
