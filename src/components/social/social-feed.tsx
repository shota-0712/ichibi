import { useRef, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { storeInfo } from '../../data/store-info';

export function SocialFeed() {
  const instagramContainerRef = useRef<HTMLIFrameElement>(null);

  // Use Intersection Observer to lazy load Instagram widget
  useEffect(() => {
    if (!instagramContainerRef.current) return;

    const loadInstagramEmbed = (iframe: HTMLIFrameElement) => {
      // Only set src if not already set
      if (!iframe.src || iframe.src === 'about:blank') {
        iframe.src = `${storeInfo.social.instagram}embed`;
      }
    };

    // Create and configure Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '200px',
      threshold: 0.1
    };

    const instagramObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && instagramContainerRef.current) {
          loadInstagramEmbed(instagramContainerRef.current);
          instagramObserver.disconnect();
        }
      });
    }, observerOptions);

    // Start observing
    if (instagramContainerRef.current) {
      instagramObserver.observe(instagramContainerRef.current);
    }

    // Cleanup
    return () => {
      instagramObserver.disconnect();
    };
  }, []);


  return (
    <div className="py-16 bg-stone-50 social-feed-section" data-social-section>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-kanteiryuu mb-4">SNSでも情報発信中</h2>
            <p className="text-a11y-gray font-kanteiryuu">
              最新のメニュー情報やイベント、お得なキャンペーンなどをいち早くお知らせしています。
              <br />ぜひフォローして、一期一美の最新情報をチェックしてください！
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="text-center max-w-lg">
              <p className="mb-6 text-base text-a11y-gray font-kanteiryuu">
                LINE公式アカウントではデザートやドリンクなどのクーポンや季節限定メニューなどの最新情報をお届けしています！
              </p>
              <a
                href={storeInfo.social.line}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINEで友だち追加"
                className="inline-block transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                  alt="LINEで友だち追加"
                  className="h-14 w-auto"
                  width="116"
                  height="36"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-xl mx-auto">
            {/* Instagram Feed - Embedded */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <Instagram className="h-6 w-6 text-a11y-pink" aria-hidden="true" />
                  <h3 className="font-semibold font-kanteiryuu">Instagram</h3>
                </div>
                <a
                  href={storeInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-a11y-pink hover:text-a11y-pink-dark transition text-sm font-medium"
                >
                  {storeInfo.social.instagramHandle}
                </a>
              </div>

              <div className="instagram-embed p-2 overflow-hidden" style={{ height: '450px' }}>
                <iframe
                  ref={instagramContainerRef}
                  src="about:blank" // Initially blank, will be set when visible
                  width="100%"
                  height="450"
                  frameBorder="0"
                  scrolling="no"
                  title="Instagram Feed"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="p-4 bg-gray-50 text-center">
                <a
                  href={storeInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-a11y-pink hover:text-a11y-pink-dark transition font-semibold text-sm"
                >
                  もっと見る →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
