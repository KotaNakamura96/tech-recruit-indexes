import Link from 'next/link';

const PrivacyPolicy = () => {
    return (
        <div className="py-8 space-y-12">
            <h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1>

            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">はじめに</h2>
                <p className="text-gray-600 mb-4">
                    当サイト（IT企業の採用HP/技術ブログ一覧）は、ユーザーのプライバシーを尊重し、適用される全てのデータ保護法および個人情報保護法を遵守することを約束します。
                </p>
                <p className="text-gray-600">最終更新日: 2024年9月24日</p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">収集する情報</h2>
                <p className="text-gray-600 mb-4">
                    当サイトでは、個人を特定できる情報を意図的に収集することはありません。ただし、サイトの利用状況を分析し、サービスの改善に役立てるため、以下の匿名データを収集する場合があります：
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>
                        アクセスログ（IPアドレス、ブラウザの種類、参照元ページなど）
                    </li>
                    <li>クッキーを通じて得られる情報</li>
                </ul>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">情報の使用</h2>
                <p className="text-gray-600 mb-4">
                    収集したデータは、以下の目的にのみ使用されます：
                </p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>サイトの利用状況の分析</li>
                    <li>サービスの改善と最適化</li>
                    <li>技術的な問題の診断と解決</li>
                </ul>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">
                    第三者への情報提供
                </h2>
                <p className="text-gray-600">
                    当サイトは、法的な要請がある場合を除き、収集した情報を第三者と共有したり、売却したりすることはありません。
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">セキュリティ</h2>
                <p className="text-gray-600">
                    当サイトは、収集したデータを適切に保護し、不正アクセス、紛失、破壊、改ざん、漏洩などを防ぐために合理的な対策を講じます。ただし、インターネット上での完全な安全性を保証することはできません。
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">お問い合わせ</h2>
                <p className="text-gray-600 mb-4">
                    プライバシーポリシーに関するご質問やご意見がある場合は、以下のGoogleフォームからお問い合わせください。
                </p>
                <a
                    href="https://forms.gle/yourGoogleFormLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    お問い合わせフォーム
                </a>
            </section>

            <Link
                href="/"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                ← トップページに戻る
            </Link>
        </div>
    );
};

export default PrivacyPolicy;
