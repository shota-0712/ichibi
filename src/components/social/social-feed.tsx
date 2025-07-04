import React, { useRef, useEffect } from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

export function SocialFeed() {
  const instagramContainerRef = useRef<HTMLIFrameElement>(null);
  
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

  return (
    <div className="py-16 bg-stone-50 social-feed-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">SNSでも情報発信中</h2>
            <p className="text-gray-600">
              最新のメニュー情報やイベント、お得なキャンペーンなどをいち早くお知らせしています。
              <br />ぜひフォローして、一期一美の最新情報をチェックしてください！
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instagram Feed - Embedded */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <Instagram className="h-6 w-6 text-pink-700" aria-hidden="true" />
                  <h3 className="font-semibold">Instagram</h3>
                </div>
                <a
                  href="https://www.instagram.com/ichigo__ichibi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-800 hover:text-pink-900 transition text-sm font-medium"
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
                  className="text-pink-800 hover:text-pink-900 transition font-semibold text-sm"
                >
                  もっと見る →
                </a>
              </div>
            </div>

            {/* Twitter - Just follow button */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <Twitter className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  <h3 className="font-semibold">X (Twitter)</h3>
                </div>
                <a
                  href="https://x.com/ichigo_ichibi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition text-sm font-medium"
                >
                  @ichigo_ichibi
                </a>
              </div>
              
              <div className="flex flex-col items-center justify-center p-6">
                <a 
                  href="https://x.com/ichigo_ichibi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition w-full justify-center"
                >
                  <Twitter className="h-5 w-5" />
                  <span>フォローする</span>
                </a>
              </div>
            </div>

            {/* Facebook - Just follow button */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <Facebook className="h-6 w-6 text-blue-800" aria-hidden="true" />
                  <h3 className="font-semibold">Facebook</h3>
                </div>
                <a
                  href="https://www.facebook.com/share/12DF9aSZmwS/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:text-blue-900 transition text-sm font-medium"
                >
                  一期一美
                </a>
              </div>
              
              <div className="flex flex-col items-center justify-center p-6">
                <a 
                  href="https://www.facebook.com/share/12DF9aSZmwS/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-full transition w-full justify-center"
                >
                  <Facebook className="h-5 w-5" />
                  <span>フォローする</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}