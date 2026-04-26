export default function Footer() {
  return (
    <footer className="bg-[#FDFBF7] text-stone-600 py-16 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 border-b border-stone-200/60 pb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-2xl text-stone-900 tracking-tight">accredian</span>
            </div>
            <p className="text-sm font-light leading-relaxed max-w-sm">
              Cultivate high-performance teams through expert learning and tailored enterprise solutions built for the future.
            </p>
          </div>
          <div>
            <h4 className="text-stone-900 font-medium mb-6 uppercase tracking-wider text-sm">Platform</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-stone-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Developers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-900 font-medium mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>enterprise@accredian.com</li>
              <li className="leading-relaxed">4th Floor, 250, Phase IV, Udyog Vihar,<br /> Sector 18, Gurugram, Haryana</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light text-stone-400">
          <p>© 2026 Accredian. All Rights Reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}