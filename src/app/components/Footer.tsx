import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-100 mt-12">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-center space-x-4">
                    <FooterLink href="/about">サービスについて</FooterLink>
                    <FooterLink href="/privacy">
                        プライバシーポリシー
                    </FooterLink>
                    <FooterLink href="/terms">利用規約</FooterLink>
                    <FooterLink
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeACciTw0UDG9PQt-L-bAXA8tx64B-ynkOcFzxOHRFT9BEzcA/viewform"
                        external={true}
                    >
                        お問い合わせ
                    </FooterLink>
                </div>
                <p className="text-center mt-4 text-gray-600 text-sm">
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
    external = false,
}: {
    href: string;
    children: React.ReactNode;
    external?: boolean;
}) => {
    if (external) {
        return (
            <a
                href={href}
                className="text-gray-600 hover:text-gray-900 text-sm"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }
    return (
        <Link href={href} className="text-gray-600 hover:text-gray-900 text-sm">
            {children}
        </Link>
    );
};

export default Footer;
