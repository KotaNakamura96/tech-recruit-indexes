import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 mt-12">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-center space-x-4">
                    <FooterLink href="/about">サービスについて</FooterLink>
                    <FooterLink href="/privacy">
                        プライバシーポリシー
                    </FooterLink>
                    <FooterLink href="/terms">利用規約</FooterLink>
                </div>
                <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} IT企業の採用HP/技術ブログ一覧.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};

const FooterLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <Link
            href={href}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
            {children}
        </Link>
    );
};

export default Footer;
