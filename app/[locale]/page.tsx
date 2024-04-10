import { useTranslations } from 'next-intl';

import HeroBanner from '@/components/Banner/HeroBanner';
import BenefitCardGrid from '@/components/BenefitCard/BenefitCardGrid';
import ProductCardGrid from '@/components/ProductCard/ProductCardGrid';

export default function Index() {
    const t = useTranslations('Index');

    return (
        <main>
            {/* <h1>{t('title')}</h1> */}
            <HeroBanner />
            <ProductCardGrid />
            <BenefitCardGrid />
        </main>
    )
}
