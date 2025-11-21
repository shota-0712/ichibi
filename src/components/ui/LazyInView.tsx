import React, { useEffect, useRef, useState } from 'react';

export function LazyInView({ children, rootMargin = '200px' }: { children: React.ReactNode; rootMargin?: string }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (visible) return; // 1度表示したら終了
        const el = ref.current;
        if (!el || typeof IntersectionObserver === 'undefined') {
            // 環境非対応時は即表示
            setVisible(true);
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            if (entries.some(e => e.isIntersecting)) {
                setVisible(true);
                observer.disconnect();
            }
        }, { root: null, rootMargin, threshold: 0.01 });
        observer.observe(el);
        return () => observer.disconnect();
    }, [visible, rootMargin]);

    return (
        <div ref={ref} data-lazy-section>
            {visible ? children : null}
        </div>
    );
}
