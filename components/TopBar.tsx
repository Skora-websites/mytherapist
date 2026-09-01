export default function TopBar() {
  return (
    <div className="bg-brand-blue text-white text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+917701833231"
              className="flex items-center gap-1.5 hover:text-pink-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 77018 33231</span>
            </a>
            <a
              href="mailto:mytherapists4@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-pink-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>mytherapists4@gmail.com</span>
            </a>
          </div>
          <div className="text-white/80 text-xs">
            Mon - Sat: 9:00 AM - 6:00 PM
          </div>
        </div>
      </div>
    </div>
  );
}
