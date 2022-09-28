import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return [
    ['NEWS', 'https://bokupa-movie-news.tumblr.com'],
    ['あらすじ', '/#outline'],
    ['キャスト', '/#casts'],
    ['スタッフ', '/#staffs'],
    ['劇場情報', '/theaters'],
    ['キャンペーン', '/campaigns'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      target={label === 'NEWS' && '_blank'}
      rel={label === 'NEWS' && 'noopener noreferrer'}
      className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-100"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10 font-kaisei">{label}</span>
    </Link>
  ))
}
