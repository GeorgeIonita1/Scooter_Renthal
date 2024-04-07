import CardPreview from "./CardPreview";

export default function CardGrid() {
    return (
        <section className="grid lg:grid-cols-2 gap-8 w-4/5 mx-auto">
            <CardPreview />
            <CardPreview />
        </section>
    );
}