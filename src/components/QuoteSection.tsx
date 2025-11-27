type QuoteSectionProps = {
  quote: string;
};

export function QuoteSection({ quote }: QuoteSectionProps) {
  return (
    <div className="relative mt-4">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
      <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200/50 rounded-2xl p-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full animate-pulse"></div>
          <p className="text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
            今日の一言
          </p>
        </div>
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-text">
            <p className="text-xl sm:text-xl text-gray-800 leading-relaxed font-medium italic whitespace-nowrap px-4">
              "{quote}"
            </p>
            <p className="text-xl sm:text-xl text-gray-800 leading-relaxed font-medium italic whitespace-nowrap px-4">
              "{quote}"
            </p>
            <p className="text-xl sm:text-xl text-gray-800 leading-relaxed font-medium italic whitespace-nowrap px-4">
              "{quote}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

