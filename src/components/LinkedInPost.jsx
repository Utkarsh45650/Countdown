import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, MessageSquare, Repeat2, Send, Globe2, MoreHorizontal } from 'lucide-react';

export default function LinkedInPost() {
  const handlePostClick = (e) => {
    // Prevent default action if they clicked a specific interactive element
    // but redirect to linkedin.
    window.open('https://www.linkedin.com/', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      onClick={handlePostClick}
      className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-[540px] w-full mx-auto cursor-pointer overflow-hidden border border-zinc-200 font-sans text-left hover:shadow-[0_8px_40px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300 relative z-50 group"
    >
      {/* Header */}
      <div className="flex items-start gap-3 p-4 pb-2">
        <img src="/STAR_Logo.png" alt="STAR" className="w-12 h-12 rounded-full object-cover border border-zinc-200" />
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 group-hover:text-blue-600 transition-colors">
              <span className="font-bold text-zinc-900 text-[15px] hover:underline">STAR</span>
              <span className="text-zinc-500 text-sm font-normal">• 1st</span>
            </div>
            <div className="text-zinc-500 hover:bg-zinc-100 p-1.5 rounded-full transition-colors cursor-pointer">
              <MoreHorizontal className="w-5 h-5" />
            </div>
          </div>
          <span className="text-zinc-500 text-xs leading-tight line-clamp-1">The Stellar Council • Transforming the cosmos</span>
          <span className="text-zinc-500 text-xs flex items-center gap-1 mt-0.5">
            Just now •
            <Globe2 className="w-3 h-3 text-zinc-500" />
          </span>
        </div>
      </div>

      {/* Post content */}
      <div className="px-4 py-2 text-zinc-900 text-[14px] sm:text-[15px] leading-normal break-words">
        <p>
          ⏳ The signal has already been transmitted.<br />
          🌐 <a href="https://countdownaiml.vercel.app/" target="_blank" rel="noreferrer" className="text-[#0a66c2] hover:underline" onClick={(e) => e.stopPropagation()}>https://countdownaiml.vercel.app/</a>
        </p>
        
        <p className="mt-4">
          Not every countdown ends with an explosion.<br />
          Some begin with the birth of a constellation.
        </p>

        <p className="mt-4">
          The universe has always spoken in riddles.<br />
          <span className="text-zinc-500">... more</span>
        </p>
      </div>

      {/* Post Image */}
      <div className="w-full mt-2 bg-zinc-50 border-y border-zinc-100">
        <img src="/council.jpeg" alt="The Stellar Council" className="w-full h-auto" />
      </div>

      {/* Engagement Stats */}
      <div className="px-4 py-3 flex items-center justify-between text-xs text-zinc-500 border-b border-zinc-200">
        <div className="flex items-center gap-1">
          <div className="flex items-center -space-x-1">
            <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#1b84ff] border border-white z-20">
              <ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
            </span>
            <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#f95959] border border-white z-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-2.5 h-2.5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
            </span>
          </div>
          <span className="ml-1 hover:text-blue-600 hover:underline cursor-pointer">1,245</span>
        </div>
        <div className="flex gap-2">
          <span className="hover:text-blue-600 hover:underline cursor-pointer">142 comments</span>
          <span>•</span>
          <span className="hover:text-blue-600 hover:underline cursor-pointer">89 reposts</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between px-2 py-1 text-zinc-600 font-semibold text-sm">
        <button className="flex items-center justify-center gap-1.5 hover:bg-zinc-100 py-3 px-2 rounded-md transition-colors flex-1 text-[#666666]">
          <ThumbsUp className="w-5 h-5 -scale-x-100" />
          <span className="hidden sm:inline">Like</span>
        </button>
        <button className="flex items-center justify-center gap-1.5 hover:bg-zinc-100 py-3 px-2 rounded-md transition-colors flex-1 text-[#666666]">
          <MessageSquare className="w-5 h-5 -scale-x-100" />
          <span className="hidden sm:inline">Comment</span>
        </button>
        <button className="flex items-center justify-center gap-1.5 hover:bg-zinc-100 py-3 px-2 rounded-md transition-colors flex-1 text-[#666666]">
          <Repeat2 className="w-5 h-5" />
          <span className="hidden sm:inline">Repost</span>
        </button>
        <button className="flex items-center justify-center gap-1.5 hover:bg-zinc-100 py-3 px-2 rounded-md transition-colors flex-1 text-[#666666]">
          <Send className="w-5 h-5" />
          <span className="hidden sm:inline">Send</span>
        </button>
      </div>
    </motion.div>
  );
}
