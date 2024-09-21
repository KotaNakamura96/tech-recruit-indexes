import ClientSearch from '@/app/components/ClientSearch';
import Footer from '@/app/components/Footer';
import { getCompanies } from '@/app/lib/getCompanies';

const Home = () => {
    const companies = getCompanies();

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    IT企業の採用HP/技術ブログ一覧
                </h1>
                <ClientSearch initialCompanies={companies} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
