"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleDocumentsClick = () => {
    document.getElementById("main-content")?.scrollIntoView({ behavior: "smooth" })
    window.dispatchEvent(new Event("documents-highlight"))
  }

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <nav>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1">
                  Projects
                </a>
              </li>
              <li>
                <a href="#internship" className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1">
                  Internship
                </a>
              </li>
              <li>
                {/* Scrolls to top + tells the header to glow its Documents button */}
                <button
                  onClick={handleDocumentsClick}
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1 text-left"
                  title="Scroll to top — opens Documents from the navigation bar"
                >
                  Documents
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <nav>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:basabrajbiswas04122001@gmail.com"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/basabraj-biswas-544590332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  aria-label="LinkedIn (opens in new window)"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/basabraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  aria-label="GitHub (opens in new window)"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="font-bold mb-4">Skills</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Python</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Image Processing</li>
              <li>Computer Vision</li>
              <li>LLM</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Location</h3>
            <p className="text-sm text-muted-foreground">Kolkata, India</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Basabraj Biswas. All rights reserved.</p>
          <p>Crafted with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}