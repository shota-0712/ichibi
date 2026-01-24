import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function DiningPhilosophy() {
  return (
    <div className="bg-[#F5F0E8] min-h-screen">
      {/* Fixed Home Button */}
      <Link
        to="/"
        className="fixed bottom-6 left-6 bg-japanese-red hover:bg-red-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 transform hover:scale-105"
        aria-label="ホームに戻る"
      >
        <Home className="h-6 w-6" />
      </Link>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/image/exterior_entrance.webp"
            alt="一期一美のこだわり"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center px-4 flex flex-col items-center"
          >
            <h1
              className="text-white font-kanteiryuu text-4xl md:text-5xl lg:text-6xl tracking-widest"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                letterSpacing: '0.2em',
                height: 'auto',
                maxHeight: '55vh'
              }}
            >
              一期一美のこだわり
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-japanese-gold font-kanteiryuu text-lg md:text-xl tracking-[0.3em] mt-8 mb-16"
          >
            — 心を込めた味づくり —
          </motion.p>

          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-[1px] h-12 bg-white/50" />
            <span className="text-white/70 text-xs font-kanteiryuu tracking-widest mt-2">
              SCROLL
            </span>
          </motion.div>
        </div>
      </section>

      {/* Section 1: 十割蕎麦と二八蕎麦 - Marugame Style: Side by side, no overlap */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-start">
            {/* Left: Image Composition - Side by side with offset heights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex gap-3 md:gap-4"
            >
              {/* Small image - Left, upper position */}
              <div className="w-[35%] md:w-[32%]">
                <img
                  src="/image/soba_chopsticks.webp"
                  alt="箸で持ち上げた蕎麦"
                  className="w-full h-[200px] md:h-[260px] object-cover rounded-lg shadow-md"
                />
              </div>
              {/* Large image - Right, lower position with top margin */}
              <div className="w-[65%] md:w-[68%] mt-16 md:mt-24">
                <img
                  src="/image/soba_ko.png"
                  alt="蕎麦粉"
                  className="w-full h-[240px] md:h-[320px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            {/* Right: Text Content - Marugame Style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-end mt-8 lg:mt-0"
            >
              <div className="flex items-start gap-4 md:gap-6">
                {/* Vertical Description - Multiple Columns */}
                <div className="flex gap-2">
                  <p
                    className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '280px'
                    }}
                  >
                    どちらも蕎麦の良さをそれぞれのかたちで提供しています。
                  </p>
                  <p
                    className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '280px'
                    }}
                  >
                    二割の小麦を加えた二八は、すっと食べやすい安心の味わい。
                  </p>
                  <p
                    className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '280px'
                    }}
                  >
                    蕎麦粉と浄水のみで打つ十割は、噛むほどに広がる風味が特徴。
                  </p>
                  <p
                    className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '280px'
                    }}
                  >
                    香り高い十割蕎麦。のどごし良い二八蕎麦。
                  </p>
                </div>

                {/* Vertical Title - Large */}
                <h2
                  className="font-kanteiryuu text-3xl md:text-4xl lg:text-5xl text-[#2a2a2a] shrink-0"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright',
                    letterSpacing: '0.12em'
                  }}
                >
                  蕎麦の二つの顔
                </h2>
              </div>
            </motion.div>
          </div>

          {/* CTA Link - Centered */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16 text-center"
          >
            <Link
              to="/dining-philosophy/soba-types"
              className="inline-block font-kanteiryuu text-[#2a2a2a] text-base md:text-lg border-b-2 border-[#2a2a2a] hover:border-japanese-gold hover:text-japanese-red transition-colors pb-1 px-4"
            >
              十割蕎麦と二八蕎麦を見る
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: 一期一美が目指すもの */}
      <section className="py-20 md:py-32 bg-[#e8e0d4] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row-reverse items-start">
            {/* Right: Image Composition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex gap-3 md:gap-4"
            >
              {/* Large image - Left, lower position */}
              <div className="w-[65%] md:w-[68%] mt-16 md:mt-24">
                <img
                  src="/image/ichigo_ichibi_set.webp"
                  alt="一期一美の御膳"
                  className="w-full h-[240px] md:h-[320px] object-cover rounded-lg shadow-lg"
                />
              </div>
              {/* Small image - Right, upper position */}
              <div className="w-[35%] md:w-[32%]">
                <img
                  src="/image/exterior_noren.webp"
                  alt="一期一美の暖簾"
                  className="w-full h-[200px] md:h-[260px] object-cover rounded-lg shadow-md"
                />
              </div>
            </motion.div>

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-start mt-8 lg:mt-0"
            >
              <div className="flex items-start gap-4 md:gap-6">
                {/* Vertical Title - Large */}
                <h2
                  className="font-kanteiryuu text-3xl md:text-4xl lg:text-5xl text-[#2a2a2a] shrink-0"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright',
                    letterSpacing: '0.12em'
                  }}
                >
                  目指すところ
                </h2>

                {/* Vertical Description */}
                <div className="flex gap-2">
                  <p
                    className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '300px'
                    }}
                  >
                    君津の地から、本当に美味しい十割蕎麦を届けたい。
                  </p>
                  <p
                    className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '300px'
                    }}
                  >
                    十割蕎麦がもっと身近な存在になることに、少しでも貢献できたら。
                  </p>
                  <p
                    className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '300px'
                    }}
                  >
                    蕎麦を食べるなら、一期一美へ。そう思い出してもらえる店を目指して。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16 text-center"
          >
            <Link
              to="/dining-philosophy/vision"
              className="inline-block font-kanteiryuu text-[#2a2a2a] text-base md:text-lg border-b-2 border-[#2a2a2a] hover:border-japanese-gold hover:text-japanese-red transition-colors pb-1 px-4"
            >
              一期一美が目指すものを見る
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 3: 空間と過ごし方 */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-start">
            {/* Left: Image Composition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex gap-3 md:gap-4"
            >
              {/* Small image - Left, upper position */}
              <div className="w-[35%] md:w-[32%]">
                <img
                  src="/image/interior_table.webp"
                  alt="テーブル席"
                  className="w-full h-[200px] md:h-[260px] object-cover rounded-lg shadow-md"
                />
              </div>
              {/* Large image - Right, lower position */}
              <div className="w-[65%] md:w-[68%] mt-16 md:mt-24">
                <img
                  src="/image/interior_kitchen.webp"
                  alt="オープンキッチン"
                  className="w-full h-[240px] md:h-[320px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-end mt-8 lg:mt-0"
            >
              <div className="flex items-start gap-4 md:gap-6">
                {/* Vertical Description */}
                <div className="flex gap-2">
                  <p
                    className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '300px'
                    }}
                  >
                    それぞれのお客さんにとって、無理のない距離感を大切に。
                  </p>
                  <p
                    className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '300px'
                    }}
                  >
                    会話を楽しむ時間も、蕎麦に静かに向き合う時間も。
                  </p>
                  <p
                    className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '300px'
                    }}
                  >
                    一人でも安心して入れる店でありたい。清潔感のある店内。心地よい空気。
                  </p>
                </div>

                {/* Vertical Title */}
                <h2
                  className="font-kanteiryuu text-3xl md:text-4xl lg:text-5xl text-[#2a2a2a] shrink-0"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright',
                    letterSpacing: '0.12em'
                  }}
                >
                  空間と時間
                </h2>
              </div>
            </motion.div>
          </div>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16 text-center"
          >
            <Link
              to="/dining-philosophy/space"
              className="inline-block font-kanteiryuu text-[#2a2a2a] text-base md:text-lg border-b-2 border-[#2a2a2a] hover:border-japanese-gold hover:text-japanese-red transition-colors pb-1 px-4"
            >
              空間と過ごし方を見る
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 4: そばつゆについて */}
      <section className="py-20 md:py-32 bg-[#2a2a2a] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row-reverse items-start">
            {/* Right: Image Composition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex gap-3 md:gap-4"
            >
              {/* Large image - Left, lower position */}
              <div className="w-[65%] md:w-[68%] mt-12 md:mt-20">
                <img
                  src="/image/seiro.webp"
                  alt="せいろ蕎麦"
                  className="w-full h-[220px] md:h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
              {/* Small image - Right, upper position */}
              <div className="w-[35%] md:w-[32%]">
                <img
                  src="/image/鴨せいろ.webp"
                  alt="鴨せいろ"
                  className="w-full h-[180px] md:h-[240px] object-cover rounded-lg shadow-md"
                />
              </div>
            </motion.div>

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-start mt-8 lg:mt-0"
            >
              <div className="flex items-start gap-4 md:gap-6">
                {/* Vertical Title */}
                <h2
                  className="font-kanteiryuu text-3xl md:text-4xl lg:text-5xl text-white shrink-0"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright',
                    letterSpacing: '0.12em'
                  }}
                >
                  江戸前のつゆ
                </h2>

                {/* Vertical Description */}
                <div className="flex gap-2">
                  <p
                    className="text-white/80 font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '300px'
                    }}
                  >
                    そば湯を注いでも美味しいつゆを。江戸前の少し濃いめの味わいを大切に。
                  </p>
                  <p
                    className="text-white/80 font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '300px'
                    }}
                  >
                    厳選した出汁と、昔ながらの製法で仕込むかえしを使っています。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16 text-center"
          >
            <Link
              to="/dining-philosophy/tsuyu"
              className="inline-block font-kanteiryuu text-japanese-gold text-base md:text-lg border-b-2 border-japanese-gold hover:text-white hover:border-white transition-colors pb-1 px-4"
            >
              そばつゆのこだわりを見る
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 5: 日々の蕎麦打ち */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-start">
            {/* Left: Image Composition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex gap-3 md:gap-4"
            >
              {/* Small image - Left, upper position */}
              <div className="w-[35%] md:w-[32%]">
                <img
                  src="/image/soba_ko.png"
                  alt="蕎麦粉"
                  className="w-full h-[200px] md:h-[260px] object-cover rounded-lg shadow-md"
                />
              </div>
              {/* Large image - Right, lower position */}
              <div className="w-[65%] md:w-[68%] mt-16 md:mt-24">
                <img
                  src="/image/teuchi_tekiri.png"
                  alt="手打ち・手切り"
                  className="w-full h-[240px] md:h-[320px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-end mt-8 lg:mt-0"
            >
              <div className="flex items-start gap-4 md:gap-6">
                {/* Vertical Description */}
                <div className="flex gap-2">
                  <p
                    className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '320px'
                    }}
                  >
                    お客さんの反応を大切に受け取り、次の一杯に生かしていく。
                  </p>
                  <p
                    className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '320px'
                    }}
                  >
                    現状に満足せず、より良い蕎麦を目指して日々改善を重ねる。
                  </p>
                  <p
                    className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: '320px'
                    }}
                  >
                    湿度、温度、粉の状態。その日の蕎麦を見ながら、ひとつひとつ調整。
                  </p>
                </div>

                {/* Vertical Title */}
                <h2
                  className="font-kanteiryuu text-3xl md:text-4xl lg:text-5xl text-[#2a2a2a] shrink-0"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright',
                    letterSpacing: '0.12em'
                  }}
                >
                  日々の積み重ね
                </h2>
              </div>
            </motion.div>
          </div>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16 text-center"
          >
            <Link
              to="/dining-philosophy/daily-craft"
              className="inline-block font-kanteiryuu text-[#2a2a2a] text-base md:text-lg border-b-2 border-[#2a2a2a] hover:border-japanese-gold hover:text-japanese-red transition-colors pb-1 px-4"
            >
              日々の蕎麦打ちを見る
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 6: 健康と美味しさ / 十割にこだわる理由 */}
      <section className="py-20 md:py-32 bg-[#e8e0d4] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Health */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h3
                className="font-kanteiryuu text-2xl md:text-3xl text-[#2a2a2a] mb-8"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  letterSpacing: '0.1em'
                }}
              >
                健康と美味しさ
              </h3>

              <p
                className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2] mb-6"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  height: '200px'
                }}
              >
                健康のために我慢する蕎麦ではなく、美味しさをきちんと感じられる十割蕎麦を。
              </p>

              <Link
                to="/dining-philosophy/health"
                className="inline-block font-kanteiryuu text-[#2a2a2a] text-base border-b border-[#2a2a2a] hover:border-japanese-gold hover:text-japanese-red transition-colors pb-1"
              >
                健康と美味しさを見る
              </Link>
            </motion.div>

            {/* Juwari Reason */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <h3
                className="font-kanteiryuu text-2xl md:text-3xl text-[#2a2a2a] mb-8"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  letterSpacing: '0.1em'
                }}
              >
                十割にこだわる理由
              </h3>

              <p
                className="text-[#4a4a4a] font-kanteiryuu text-sm md:text-base leading-[2] mb-6"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  height: '240px'
                }}
              >
                「切れやすい」「ぼそぼそする」という先入観を超える、純粋に美味しい十割蕎麦を。
              </p>

              <Link
                to="/dining-philosophy/juwari"
                className="inline-block font-kanteiryuu text-[#2a2a2a] text-base border-b border-[#2a2a2a] hover:border-japanese-gold hover:text-japanese-red transition-colors pb-1"
              >
                十割蕎麦にこだわる理由を見る
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 md:py-28 bg-[#2a2a2a]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2
              className="font-kanteiryuu text-2xl md:text-3xl lg:text-4xl text-white mb-8 mx-auto"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                letterSpacing: '0.15em'
              }}
            >
              君津の地から
            </h2>

            <p className="text-white/80 font-kanteiryuu text-base md:text-lg leading-loose tracking-wide max-w-xl mx-auto mt-10">
              お客さんの反応を大切に受け取り、<br />
              次の一杯に生かしていく。<br />
              その積み重ねを、何よりも大切にしています。
            </p>

            <div className="mt-10">
              <Link
                to="/menu"
                className="inline-block border border-japanese-gold text-japanese-gold hover:bg-japanese-gold hover:text-[#2a2a2a] px-8 py-3 font-kanteiryuu tracking-widest transition-all duration-300 text-base"
              >
                お品書きを見る
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default DiningPhilosophy;
