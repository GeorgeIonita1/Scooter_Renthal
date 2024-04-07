import { useTranslations } from 'next-intl';

import CardGrid from '@/components/Card/CardGrid';

export default function Index() {
    const t = useTranslations('Index');

    return (
        <main className='container'>
            <h1>{t('title')}</h1>
            <CardGrid />
        </main>
    )
}
