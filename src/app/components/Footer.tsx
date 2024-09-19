import { inter } from '../layout';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="text-center">
                    <p className={`text-sm text-gray-600 ${inter.className}`}>
                        © 2024 テック企業の採用HP/技術ブログ一覧. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
