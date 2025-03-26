import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary/90 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary/90 transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary/90 transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary/90 transition-colors">
                  Facilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                <strong>Address:</strong><br />
                School of Medical Science and Technology<br />
                IIT Kharagpur, West Bengal<br />
                India - 721302
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <strong>Phone:</strong><br />
                <a href="tel:+913222282221" className="hover:text-primary dark:hover:text-primary/90 transition-colors">
                  +91 3222 282221
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <strong>Email:</strong><br />
                <a href="mailto:koel@smst.iitkgp.ac.in" className="hover:text-primary dark:hover:text-primary/90 transition-colors">
                  koel@smst.iitkgp.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Lab Members */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Lab Members</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/members#dr-koel-chaudhury" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary/90 transition-colors">
                  Dr. Koel Chaudhury
                </Link>
              </li>
              <li>
                <Link href="/members#research-team" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary/90 transition-colors">
                  Research Team
                </Link>
              </li>
              <li>
                <Link href="/members#lab-staff" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary/90 transition-colors">
                  Lab Staff
                </Link>
              </li>
              <li>
                <Link href="/members#alumni" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary/90 transition-colors">
                  Alumni
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Clinical Biomarkers Research Laboratory. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://scholar.google.com/citations?user=XXXXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                title="Google Scholar"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/koel-chaudhury"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 