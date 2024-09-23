import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="py-4 space-y-12">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                サービスについて
            </h1>

            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    IT企業の採用HP/技術ブログ一覧とは
                </h2>
                <p className="text-gray-600">
                    各企業の採用ページと技術ブログへのリンクを集約し、効率的な情報収集を可能にします。
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    主な特徴
                </h2>
                <ul className="space-y-3">
                    {[
                        '最新のIT企業の採用情報にワンストップでアクセス',
                        '各社の技術ブログを通じて、最新の技術動向を把握',
                        '企業名や技術キーワードで簡単に検索可能',
                        '定期的に更新される企業リストと情報',
                    ].map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center text-gray-600"
                        >
                            <svg
                                className="w-6 h-6 mr-2 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                ></path>
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    ご利用方法
                </h2>
                <ol className="list-decimal list-inside space-y-3">
                    {[
                        'トップページの検索バーを使用して、興味のある企業や技術を検索',
                        '表示された企業リストから、気になる企業の情報をチェック',
                        '「採用情報」または「テックブログ」リンクをクリックして、詳細を確認',
                        '定期的にサイトを訪れて、最新の情報をチェック',
                    ].map((step, index) => (
                        <li key={index} className="text-gray-600">
                            {step}
                        </li>
                    ))}
                </ol>
            </section>

            <Link
                href="/"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                ← トップページに戻る
            </Link>
        </div>
    );
}
