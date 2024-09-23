import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'サービスについて | IT企業の採用HP/技術ブログ一覧',
    description:
        'IT企業の採用情報と技術ブログを簡単に見つけられるサービスの詳細説明ページです。',
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container mx-auto">
            <div className="max-w-3xl">{children}</div>
        </div>
    );
};

export default AboutLayout;
