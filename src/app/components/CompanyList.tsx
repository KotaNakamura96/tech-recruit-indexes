import { Company } from '@/app/types';

type CompanyListProps = {
    companies: Company[];
};

const CompanyList = ({ companies }: CompanyListProps) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {companies.map((company) => (
                    <CompanyCard key={company.id} company={company} />
                ))}
            </div>
            <p className="mt-8 text-gray-600 dark:text-gray-400">
                表示中の企業数: {companies.length}件
            </p>
        </div>
    );
};

const CompanyCard = ({ company }: { company: Company }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {company.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                {company.industry}
            </p>
            <div className="flex space-x-4">
                <a
                    href={company.careerPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline"
                >
                    採用情報 ↗︎
                </a>
                <a
                    href={company.techBlogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    テックブログ ↗︎
                </a>
            </div>
        </div>
    );
};

export default CompanyList;
