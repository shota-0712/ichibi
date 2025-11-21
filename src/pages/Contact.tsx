import React, { useMemo, useState } from 'react';
import { Mail, Info, Phone } from 'lucide-react';

type ReplyPreference = 'reply' | 'no-reply';

type ContactCategory = {
  id: string;
  label: string;
  description: string;
  subject: string;
  prompts: Record<ReplyPreference, string[]>;
  note?: string;
};

const CONTACT_ADDRESS = 'ichibi2025@gmail.com';

const CONTACT_CATEGORIES: ContactCategory[] = [
  {
    id: 'feedback',
    label: 'ご意見・ご要望',
    description: 'お店へのご意見やご感想、改善のご提案など。',
    subject: '【ご意見・ご要望】について',
    prompts: {
      reply: [
        'お名前：',
        'ご連絡先：',
        'ご来店日：',
        'ご着席時間：',
        'ご意見・ご要望：'
      ],
      'no-reply': [
        'ご来店日：',
        'ご着席時間：',
        'ご意見・ご要望：'
      ]
    }
  },
  {
    id: 'other',
    label: 'その他',
    description: '上記以外の内容についてはこちらから。',
    subject: '【その他】お問い合わせ',
    prompts: {
      reply: [
        'お名前：',
        'ご連絡先：',
        'お問い合わせ内容：'
      ],
      'no-reply': [
        'お問い合わせ内容：'
      ]
    }
  }
];

const REPLY_OPTIONS: Array<{
  key: ReplyPreference;
  label: string;
  helper: string;
  description: string;
}> = [
    {
      key: 'no-reply',
      label: '返信を希望しない',
      helper: 'お客様情報は不要です',
      description: '情報のみお伝えいただく場合はこちら。'
    },
    {
      key: 'reply',
      label: '返信を希望する',
      helper: 'お客様情報が必要です',
      description: '折り返し連絡をご希望の方はこちら。'
    }
  ];

export function Contact() {
  const [preference, setPreference] = useState<ReplyPreference>('reply');
  const [categoryId, setCategoryId] = useState<string>(CONTACT_CATEGORIES[0]?.id ?? '');

  const category = useMemo(() => {
    return CONTACT_CATEGORIES.find(item => item.id === categoryId) ?? CONTACT_CATEGORIES[0];
  }, [categoryId]);

  const previewBody = useMemo(() => {
    if (!category) return '';

    const headerLine = preference === 'reply'
      ? 'ご返信を希望しております。下記の内容をご記入ください。'
      : 'ご返信は不要です。下記の内容をご記入ください。';

    const lines = [
      `【${category.label}】に関するご連絡`,
      '',
      headerLine,
      '',
      ...category.prompts[preference],
      '',
      '---',
      '十割蕎麦・創作酒場「一期一美」宛'
    ];

    if (category.note) {
      lines.push('', category.note);
    }

    return lines.join('\n');
  }, [category, preference]);

  const mailtoLink = useMemo(() => {
    if (!category) return '#';
    const subject = encodeURIComponent(category.subject);
    const body = encodeURIComponent(previewBody);
    return `mailto:${CONTACT_ADDRESS}?subject=${subject}&body=${body}`;
  }, [category, previewBody]);

  return (
    <div className="bg-stone-50">
      <div className="bg-japanese-indigo text-white pt-36 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-kanteiryuu mb-4">お問い合わせ・ご要望</h1>
          <p className="text-lg text-japanese-gold">ご用件に合わせてメール本文テンプレートを選択できます。</p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-kanteiryuu font-semibold text-japanese-indigo mb-4">ご連絡の前に</h2>
            <ul className="space-y-3 text-sm md:text-base text-gray-700">
              <li className="flex gap-3">
                <Info className="h-5 w-5 text-japanese-red mt-1 flex-shrink-0" aria-hidden="true" />
                <span>受付順に対応しているため、内容によりご返信までお時間をいただく場合がございます。</span>
              </li>
              <li className="flex gap-3">
                <Info className="h-5 w-5 text-japanese-red mt-1 flex-shrink-0" aria-hidden="true" />
                <span>座席状況のご確認は <Phone className="inline h-4 w-4" aria-hidden="true" /> 0439-72-3988 までお電話ください。</span>
              </li>
              <li className="flex gap-3">
                <Info className="h-5 w-5 text-japanese-red mt-1 flex-shrink-0" aria-hidden="true" />
                <span>お問い合わせ内容により、担当者より追加でご連絡させていただく場合がございます。</span>
              </li>
            </ul>
          </section>

          <section className="grid gap-4 md:grid-cols-2">
            {REPLY_OPTIONS.map(option => (
              <button
                key={option.key}
                type="button"
                role="radio"
                aria-checked={preference === option.key}
                onClick={() => setPreference(option.key)}
                className={`rounded-xl border-2 p-6 text-left transition focus:outline-none focus:ring-2 focus:ring-japanese-gold ${preference === option.key
                    ? 'border-japanese-gold bg-japanese-gold/10 text-japanese-indigo'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-japanese-gold/50'
                  }`}
              >
                <p className="text-sm font-semibold text-japanese-red mb-1">{option.helper}</p>
                <p className="text-2xl font-kanteiryuu mb-2">{`返信を「${option.label}」`}</p>
                <p className="text-sm text-gray-600">{option.description}</p>
              </button>
            ))}
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-6">
            <div>
              <label htmlFor="contact-category" className="block text-sm font-medium text-gray-700 mb-2">
                種別をお選びください
              </label>
              <select
                id="contact-category"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-japanese-gold focus:outline-none focus:ring-2 focus:ring-japanese-gold text-gray-800"
                value={categoryId}
                onChange={event => setCategoryId(event.target.value)}
              >
                {CONTACT_CATEGORIES.map(item => (
                  <option key={item.id} value={item.id}>{item.label}</option>
                ))}
              </select>
              {category && (
                <p className="mt-2 text-sm text-gray-600">{category.description}</p>

              )}
            </div>

            {category?.note && (
              <div className="rounded-lg bg-japanese-gold/10 border border-japanese-gold/40 px-4 py-3 text-sm text-japanese-indigo">
                {category.note}
              </div>
            )}

            <div>
              <label htmlFor="contact-body" className="block text-sm font-medium text-gray-700 mb-2">
                メール本文テンプレート
              </label>
              <textarea
                id="contact-body"
                className="w-full h-56 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm md:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-japanese-gold"
                value={previewBody}
                readOnly
              />
              <div className="mt-2 flex flex-wrap gap-2">
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-2 rounded-full bg-japanese-red px-5 py-2 text-sm font-medium text-white transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-japanese-gold"
                >
                  <Mail className="h-4 w-4" />
                  メールアプリを開く
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
