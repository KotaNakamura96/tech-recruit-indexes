import Link from 'next/link';

const TermsOfService = () => {
    return (
        <div className="py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold mb-8">利用規約</h1>

                <div className="space-y-8 text-gray-600">
                    <p>
                        本利用規約（以下、「本規約」といいます。）は、当サイト（IT企業の採用HP/技術ブログ一覧）が提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
                    </p>

                    <div className="pt-4">
                        <h2 className="text-2xl font-semibold mb-4">
                            1. サービスの利用
                        </h2>
                        <p>
                            本サービスはユーザー登録なしでご利用いただけます。ユーザーは、本規約に同意した上で本サービスを利用するものとします。
                        </p>
                    </div>

                    <div className="pt-4">
                        <h2 className="text-2xl font-semibold mb-4">
                            2. 禁止事項
                        </h2>
                        <p className="mb-2">
                            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>法令または公序良俗に違反する行為</li>
                            <li>犯罪行為に関連する行為</li>
                            <li>
                                当サイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
                            </li>
                            <li>
                                当サイトのサービスの運営を妨害するおそれのある行為
                            </li>
                            <li>
                                他のユーザーに関する個人情報等を収集または蓄積する行為
                            </li>
                            <li>不正アクセスをし、またはこれを試みる行為</li>
                            <li>他のユーザーに成りすます行為</li>
                            <li>
                                当サイトのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
                            </li>
                            <li>その他、当サイトが不適切と判断する行為</li>
                        </ul>
                    </div>

                    <div className="pt-4">
                        <h2 className="text-2xl font-semibold mb-4">
                            3. 本サービスの提供の停止等
                        </h2>
                        <p className="mb-2">
                            当サイトは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1 mb-2">
                            <li>
                                本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
                            </li>
                            <li>
                                地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
                            </li>
                            <li>
                                コンピュータまたは通信回線等が事故により停止した場合
                            </li>
                            <li>
                                その他、当サイトが本サービスの提供が困難と判断した場合
                            </li>
                        </ul>
                        <p>
                            当サイトは、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害について、理由を問わず一切の責任を負わないものとします。
                        </p>
                    </div>

                    <div className="pt-4">
                        <h2 className="text-2xl font-semibold mb-4">
                            4. 著作権
                        </h2>
                        <p>
                            ユーザーは、本サービスを利用することにより得られる情報を、当サイトの事前の承諾なく複製、送信、出版、頒布、放送その他方法の如何を問わず利用してはならないものとします。
                        </p>
                    </div>

                    <div className="pt-4">
                        <h2 className="text-2xl font-semibold mb-4">
                            5. 保証の否認および免責事項
                        </h2>
                        <p className="mb-2">
                            当サイトは、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                        </p>
                        <p>
                            当サイトは、本サービスに起因してユーザーに生じたあらゆる損害について、当サイトの故意又は重過失による場合を除き、一切の責任を負いません。
                        </p>
                    </div>

                    <div className="pt-4">
                        <h2 className="text-2xl font-semibold mb-4">
                            6. サービス内容の変更等
                        </h2>
                        <p>
                            当サイトは、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
                        </p>
                    </div>

                    <div className="pt-4">
                        <h2 className="text-2xl font-semibold mb-4">
                            7. 利用規約の変更
                        </h2>
                        <p>
                            当サイトは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
                        </p>
                    </div>

                    <div className="pt-4">
                        <h2 className="text-2xl font-semibold mb-4">
                            8. 準拠法・裁判管轄
                        </h2>
                        <p>
                            本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当サイトの本店所在地を管轄する裁判所を専属的合意管轄とします。
                        </p>
                    </div>

                    <p className="pt-8">以上</p>
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

export default TermsOfService;
