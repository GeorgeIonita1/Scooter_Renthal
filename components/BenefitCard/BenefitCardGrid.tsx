import BenefitCard from "./BenefitCard";

export default function BenefitCardGrid() {
    return (
        <section className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard />
            <BenefitCard />
            <BenefitCard />
            <BenefitCard />
        </section>
    );
}
