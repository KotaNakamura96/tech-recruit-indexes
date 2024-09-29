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
            <p className="mt-8 text-gray-600">
                表示中の企業数: {companies.length}件
            </p>
        </div>
    );
};

const CompanyCard = ({ company }: { company: Company }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {company.name}
            </h2>
            <div className="flex space-x-4">
                {company.recruitPageUrl ? (
                    <a
                        href={company.recruitPageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        採用情報 ↗︎
                    </a>
                ) : (
                    <span
                        className="text-gray-400 cursor-not-allowed"
                        title="採用情報は現在利用できません"
                    >
                        採用情報
                    </span>
                )}
                <a
                    href={company.techBlogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                >
                    テックブログ ↗︎
                </a>
            </div>
        </div>
    );
};

export default CompanyList;
