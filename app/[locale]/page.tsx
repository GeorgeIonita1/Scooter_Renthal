import { useTranslations } from 'next-intl';

import CardGrid from '@/components/Card/CardGrid';
import HeroBanner from '@/components/Banner/HeroBanner';

export default function Index() {
    const t = useTranslations('Index');

    return (
        <main>
            {/* <h1>{t('title')}</h1> */}
            <HeroBanner />
            <CardGrid />
        </main>
    )
}
