import Link from 'next/link';
import { inter, poppins } from '../layout';

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <h1
                            className={`text-lg font-medium text-gray-900 ${poppins.className}`}
                        >
                            テック企業の採用HP/技術ブログ一覧
                        </h1>
                    </Link>

                    <nav>
                        <Link
                            href="/contact"
                            className={`px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ${inter.className}`}
                        >
                            お問い合わせ
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
