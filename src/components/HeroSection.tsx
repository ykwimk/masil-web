'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black pt-16">
      <div className="gradient-bg absolute inset-0"></div>

      {/* Floating tags */}
      {/* <motion.div
        className="floating-tag absolute top-[30%] left-[15%] hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        마케팅
      </motion.div>
      <motion.div
        className="floating-tag absolute top-[20%] right-[20%] hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        브랜딩
      </motion.div>
      <motion.div
        className="floating-tag absolute bottom-[35%] left-[25%] hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        콘텐츠
      </motion.div>
      <motion.div
        className="floating-tag absolute right-[25%] bottom-[25%] hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        인사이트
      </motion.div> */}

      <div className="sm:md-28 z-10 container mx-auto mb-12 px-4 text-center">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-3xl leading-tight font-bold text-white sm:mb-6 sm:text-4xl md:text-6xl">
            실패를 나누고,
            <br className="block md:hidden" /> 성장을 함께하는
            <br />
            <span className="text-primary">마케터 커뮤니티 ‘마실’</span>
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg md:text-xl">
            마케팅에 진심인 마실 멤버들의 첫번째 실험,
            <br />
            <strong>연사 초청 세미나에 여러분을 초대합니다.</strong>
          </p>

          <motion.div
            className="flex flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 py-5 text-sm sm:px-8 sm:py-6 sm:text-base"
            >
              <Link
                href="https://event-us.kr/masilcommunity/event/105246"
                target="_blank"
              >
                세미나 참가하기
              </Link>
            </Button>
            {/* <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white px-6 py-5 text-sm text-white sm:px-8 sm:py-6 sm:text-base"
            >
              <Link href="#about">더 알아보기</Link>
            </Button> */}
          </motion.div>
        </motion.div>
      </div>

      {/* Stats */}
      {/* <div className="absolute right-0 bottom-8 left-0 px-4">
        <motion.div
          className="stats-container mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="stat-item">
            <div className="stat-value">100+</div>
            <div className="stat-label text-white/70">마케터</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">24+</div>
            <div className="stat-label text-white/70">모임 횟수</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">50+</div>
            <div className="stat-label text-white/70">인사이트</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">12+</div>
            <div className="stat-label text-white/70">파트너</div>
          </div>
        </motion.div>
      </div> */}
    </section>
  );
}
