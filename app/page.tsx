export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For YouTube Creators
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Generate Viral YouTube Shorts Ideas from{" "}
          <span className="text-[#58a6ff]">Trending Topics</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze trends, study competitor content, and get AI-powered Shorts ideas with ready-to-use scripts — all in one dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Start for $9/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-semibold text-white mb-1">Trend Analysis</h3>
            <p className="text-sm text-[#8b949e]">Pulls live trending data from YouTube to surface what's blowing up right now.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-white mb-1">AI Script Generator</h3>
            <p className="text-sm text-[#8b949e]">OpenAI turns each idea into a punchy, hook-first script optimized for Shorts.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-white mb-1">Competitor Insights</h3>
            <p className="text-sm text-[#8b949e]">See what's working in your niche and replicate viral patterns with a twist.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$9</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited idea generation</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI script creation for every idea</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Daily trend monitoring dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Competitor content analysis</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Export ideas to CSV or Notion</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the idea generator work?</h3>
            <p className="text-sm text-[#8b949e]">We pull trending topics from the YouTube Data API, analyze viral patterns, and use OpenAI to generate tailored Shorts ideas and scripts for your niche.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need a YouTube channel to use this?</h3>
            <p className="text-sm text-[#8b949e]">No channel required. You can use it to research trends and generate ideas before you even publish your first Short.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your billing portal. No questions asked, no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} YouTube Shorts Idea Generator. All rights reserved.
      </footer>
    </main>
  );
}
