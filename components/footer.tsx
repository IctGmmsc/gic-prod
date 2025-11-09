export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 glass-strong border-t border-accent/20 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">GMMSC ICT CLUB</h3>
            <p className="text-foreground/60 text-sm">Building tomorrow's tech leaders today.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="/#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#executives" className="hover:text-accent transition-colors">
                  Executives
                </a>
              </li>
              <li>
                <a href="/#events" className="hover:text-accent transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4 text-foreground/60">
              <a href="https://www.facebook.com/club.ict.gmmsc" className="hover:text-accent transition-colors">
                Facebook
              </a>
              <a href="https://www.instagram.com/gmmsc.ict.club" className="hover:text-accent transition-colors">
                Instagram
              </a>
              <a href="https://discord.com/invite/X66uGbJWXs" className="hover:text-accent transition-colors">
                Discord
              </a>
            </div>
          </div>
        </div>
        <div className="divider-glow mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; {currentYear} GMMSC ICT CLUB. All rights reserved.</p>
          <p className="text-foreground/50 italic">Made with love, Arian As Sami, General Secretary 2025-2026</p>
        </div>
      </div>
    </footer>
  )
}
