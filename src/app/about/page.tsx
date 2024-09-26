import Link from 'next/link';

const AboutPage = () => {
    return (
        <div className="py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold mb-8">サービスについて</h1>
                <div className="space-y-12 text-gray-600">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            IT企業の採用HP/技術ブログ一覧とは
                        </h2>
                        <p>
                            当サービスは、IT業界の最新の採用情報と技術トレンドを一目で把握できるプラットフォームです。
                            各企業の採用ページと技術ブログへのリンクを集約し、効率的な情報収集を可能にします。
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            主な特徴
                        </h2>
                        <ul className="space-y-2">
                            {[
                                '最新のIT企業の採用情報にワンストップでアクセス',
                                '各社の技術ブログを通じて、最新の技術動向を把握',
                                '企業名や技術キーワードで簡単に検索可能',
                                '定期的に更新される企業リストと情報',
                            ].map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <svg
                                        className="w-6 h-6 mr-2 text-green-500 flex-shrink-0"
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
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            ご利用方法
                        </h2>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                トップページの検索バーを使用して、興味のある企業や技術を検索
                            </li>
                            <li>
                                表示された企業リストから、気になる企業の情報をチェック
                            </li>
                            <li>
                                「採用情報」または「テックブログ」リンクをクリックして、詳細を確認
                            </li>
                            <li>
                                定期的にサイトを訪れて、最新の情報をチェック
                            </li>
                        </ol>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            ご意見・ご要望
                        </h2>
                        <p>
                            当サービスへのご意見・ご要望は、ページ最下部の「お問い合わせ」からお寄せください。
                            <br />
                            頂いたフィードバックは、サービスの改善に活用させていただきます。
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <Link
                    href="/"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    ← トップページに戻る
                </Link>
            </div>
        </div>
    );
};

export default AboutPage;
