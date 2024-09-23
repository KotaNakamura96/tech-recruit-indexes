import Link from 'next/link';
import { poppins } from '@/app/layout';

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="block">
                        <div>
                            <h1
                                className={`${poppins.className} text-2xl sm:text-3xl font-bold text-gray-800`}
                            >
                                IT企業情報
                            </h1>
                            <p className="mt-1 text-gray-600 text-sm">
                                採用HP・技術ブログ一覧
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
