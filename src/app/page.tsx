export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Clinical Biomarkers Research Laboratory
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Advancing healthcare through innovative biomarker research and clinical diagnostics
          </p>
          <a
            href="/research"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Explore Our Research
          </a>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary dark:text-primary/90">Our Mission</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              To advance human health through innovative biomarker research, cutting-edge diagnostics, 
              and translational medicine. We strive to bridge the gap between laboratory discoveries 
              and clinical applications, ultimately improving patient care and treatment outcomes.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <a
                href="/research"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Our Research
              </a>
              <a
                href="/publications"
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              >
                Publications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Featured Research Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-white dark:hover:bg-gray-600 cursor-pointer group">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary dark:text-gray-100 transition-colors duration-300">Biomarker Discovery</h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                Identifying and validating novel biomarkers for early disease detection and treatment monitoring.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-white dark:hover:bg-gray-600 cursor-pointer group">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary dark:text-gray-100 transition-colors duration-300">Clinical Diagnostics</h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                Developing innovative diagnostic tools and methodologies for improved patient care.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-white dark:hover:bg-gray-600 cursor-pointer group">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary dark:text-gray-100 transition-colors duration-300">Translational Research</h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                Bridging laboratory discoveries with clinical applications for better healthcare outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-primary dark:text-primary/90 mb-4">50+</div>
              <div className="text-lg font-semibold dark:text-white mb-2">Publications</div>
              <p className="text-gray-600 dark:text-gray-300">High-impact research papers in leading journals</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-primary dark:text-primary/90 mb-4">15+</div>
              <div className="text-lg font-semibold dark:text-white mb-2">Patents</div>
              <p className="text-gray-600 dark:text-gray-300">Novel biomarker detection methods</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-primary dark:text-primary/90 mb-4">25+</div>
              <div className="text-lg font-semibold dark:text-white mb-2">Clinical Trials</div>
              <p className="text-gray-600 dark:text-gray-300">Successful validation studies</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-primary dark:text-primary/90 mb-4">10M+</div>
              <div className="text-lg font-semibold dark:text-white mb-2">Research Funding</div>
              <p className="text-gray-600 dark:text-gray-300">In competitive grants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Latest News</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary dark:text-gray-100 transition-colors duration-300">New Clinical Trial Launched</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                Our lab has initiated a major clinical trial to validate novel biomarkers for early cancer detection.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors duration-300">March 15, 2024</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary dark:text-gray-100 transition-colors duration-300">Publication in Clinical Chemistry</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                Our recent work on innovative diagnostic biomarkers has been published in Clinical Chemistry journal.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors duration-300">March 1, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Research Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary/90 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-primary/90">Healthcare Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our biomarker research has led to the development of novel diagnostic tools, 
                enabling earlier disease detection and more effective treatment monitoring.
              </p>
            </div>
            <div className="relative p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary/90 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-primary/90">Clinical Practice</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Implementation of our research findings has improved clinical decision-making 
                and patient outcomes across multiple medical specialties.
              </p>
            </div>
            <div className="relative p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary/90 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-primary/90">Global Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our international partnerships have accelerated the translation of research 
                findings into practical clinical applications worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Our Collaborators</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-primary/90">Academic Partners</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Stanford University Medical Center</li>
                <li>• Harvard Medical School</li>
                <li>• Oxford University Hospitals</li>
                <li>• Tokyo Medical University</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-primary/90">Industry Partners</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Roche Diagnostics</li>
                <li>• Thermo Fisher Scientific</li>
                <li>• Waters Corporation</li>
                <li>• Agilent Technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us / Contact */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Research Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented researchers and students who are passionate 
            about advancing healthcare through biomarker research.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="/members"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 