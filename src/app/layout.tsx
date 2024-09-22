import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export { inter, poppins };

export const metadata: Metadata = {
    title: 'IT企業の採用HP/技術ブログ一覧',
    description:
        'IT企業の採用HP/技術ブログ一覧を表示させ、検索する手間を減らします。',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className="min-h-screen">
            <body
                className={`${inter.className} flex flex-col bg-gray-100 text-gray-900`}
            >
                <Header />
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
