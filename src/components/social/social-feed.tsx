import { useRef, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { XLogo } from '../icons/x-logo';

export function SocialFeed() {
  const instagramContainerRef = useRef<HTMLIFrameElement>(null);
  const xContainerRef = useRef<HTMLDivElement>(null);
  
  // Use Intersection Observer to lazy load Instagram widget
  useEffect(() => {
    if (!instagramContainerRef.current) return;
    
    const loadInstagramEmbed = (iframe: HTMLIFrameElement) => {
      // Only set src if not already set
      if (!iframe.src || iframe.src === 'about:blank') {
        iframe.src = 'https://www.instagram.com/ichigo__ichibi/embed';
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

  useEffect(() => {
    const target = xContainerRef.current;
    if (!target) {
      return;
    }

    let hasLoaded = false;

    const loadXTimeline = () => {
      if (hasLoaded) return;
      hasLoaded = true;

      const initializeTimeline = () => {
        if (!(window as any).twttr || !(window as any).twttr.widgets) {
          return;
        }
        (window as any).twttr.widgets.load(target);
      };

      if (!(window as any).twttr) {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.onload = initializeTimeline;
        document.body.appendChild(script);
      } else {
        initializeTimeline();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadXTimeline();
          observer.disconnect();
        }
      },
      { rootMargin: '200px', threshold: 0.1 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="py-16 bg-stone-50 social-feed-section" data-social-section>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-kanteiryuu mb-4">SNSでも情報発信中</h2>
            <p className="text-a11y-gray">
              最新のメニュー情報やイベント、お得なキャンペーンなどをいち早くお知らせしています。
              <br />ぜひフォローして、一期一美の最新情報をチェックしてください！
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="text-center">
              <p className="mb-4 text-sm text-a11y-gray">
                LINE公式アカウントではデザートやドリンクなどのクーポンや季節限定メニューなどの最新情報をお届けしています！
              </p>
              <a
                href="https://lin.ee/kDzulfG"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINEで友だち追加"
                className="inline-block"
              >
                <img
                  src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                  alt="LINEで友だち追加"
                  className="h-9 w-auto"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Instagram Feed - Embedded */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <Instagram className="h-6 w-6 text-a11y-pink" aria-hidden="true" />
                  <h3 className="font-semibold">Instagram</h3>
                </div>
                <a
                  href="https://www.instagram.com/ichigo__ichibi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-a11y-pink hover:text-a11y-pink-dark transition text-sm font-medium"
                >
                  @ichigo__ichibi
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
                  href="https://www.instagram.com/ichigo__ichibi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-a11y-pink hover:text-a11y-pink-dark transition font-semibold text-sm"
                >
                  もっと見る →
                </a>
              </div>
            </div>

            {/* X Timeline */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <XLogo className="h-6 w-6 text-black" aria-hidden="true" />
                  <h3 className="font-semibold">X (Twitter)</h3>
                </div>
                <a
                  href="https://x.com/ichigo_ichibi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 transition text-sm font-medium"
                >
                  @ichigo_ichibi
                </a>
              </div>

              <div
                ref={xContainerRef}
                className="p-2 overflow-hidden"
                style={{ height: '450px' }}
              >
                <a
                  className="twitter-timeline"
                  data-theme="dark"
                  data-height="430"
                  href="https://twitter.com/ichigo_ichibi"
                >
                  Posts by @ichigo_ichibi
                </a>
              </div>

              <div className="p-4 bg-gray-50 text-center">
                <a
                  href="https://x.com/ichigo_ichibi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 transition font-semibold text-sm"
                >
                  Xで最新情報を見る →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
