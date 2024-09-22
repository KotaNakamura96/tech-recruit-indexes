import ClientSearch from '@/app/components/ClientSearch';
import { getCompanies } from '@/app/lib/getCompanies';

const Home = () => {
    const companies = getCompanies();

    return (
        <div className="bg-white shadow-md rounded-lg">
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <ClientSearch initialCompanies={companies} />
            </div>
        </div>
    );
};

export default Home;
