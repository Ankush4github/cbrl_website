export default function Research() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Research Areas</h1>
        
        <div className="space-y-12">
          {/* Genomic Analysis */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-primary/90">Genomic Analysis</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our lab specializes in developing and applying computational methods for analyzing complex genomic data.
              We focus on understanding genetic variations and their impact on biological systems.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-medium dark:text-white">Current Projects:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Development of machine learning algorithms for variant calling</li>
                <li>Analysis of structural variations in cancer genomes</li>
                <li>Population-scale genomic studies</li>
              </ul>
            </div>
          </section>

          {/* Protein Structure Prediction */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-primary/90">Protein Structure Prediction</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We work on developing advanced computational methods for predicting protein structures
              and understanding protein-protein interactions using machine learning approaches.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-medium dark:text-white">Current Projects:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Deep learning models for protein structure prediction</li>
                <li>Protein-protein interaction network analysis</li>
                <li>Drug-target interaction prediction</li>
              </ul>
            </div>
          </section>

          {/* Systems Biology */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-primary/90">Systems Biology</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our systems biology research focuses on understanding complex biological systems
              through computational modeling and network analysis.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-medium dark:text-white">Current Projects:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Metabolic network modeling</li>
                <li>Gene regulatory network inference</li>
                <li>Multi-omics data integration</li>
              </ul>
            </div>
          </section>

          {/* Ongoing Projects */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Ongoing Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-2xl">🧬</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary dark:text-primary/90">Cancer Biomarker Discovery</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Identification and validation of novel biomarkers for early cancer detection using multi-omics approaches.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold mr-2">Duration:</span> 2023-2025
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold mr-2">Funding:</span> National Cancer Institute
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold mr-2">Status:</span> 
                    <span className="text-green-500">Active</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-2xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary dark:text-primary/90">AI-Driven Diagnostics</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Development of AI-powered diagnostic tools for rapid and accurate disease detection.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold mr-2">Duration:</span> 2024-2026
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold mr-2">Funding:</span> NIH Innovation Grant
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold mr-2">Status:</span> 
                    <span className="text-green-500">Active</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-2xl">🧪</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary dark:text-primary/90">Metabolic Profiling</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Comprehensive metabolic profiling for disease diagnosis and treatment monitoring.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold mr-2">Duration:</span> 2023-2024
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold mr-2">Funding:</span> Industry Partnership
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold mr-2">Status:</span> 
                    <span className="text-yellow-500">Phase 2</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary dark:text-primary/90">Biomarker Validation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Clinical validation of novel biomarkers for cardiovascular diseases.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold mr-2">Duration:</span> 2024-2025
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold mr-2">Funding:</span> American Heart Association
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold mr-2">Status:</span> 
                    <span className="text-blue-500">Starting</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sponsors Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Our Sponsors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32">
                <img 
                  src="/sponsors/icmr_logo.svg" 
                  alt="Indian Council of Medical Research"
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 dark:invert"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32">
                <img 
                  src="/sponsors/dbt_logo.jpg" 
                  alt="Department of Biotechnology"
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 dark:invert"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32">
                <img 
                  src="/sponsors/serb_logo.png" 
                  alt="Science and Engineering Research Board"
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 dark:invert"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32">
                <img 
                  src="/sponsors/dhr_logo.png" 
                  alt="Department of Health Research ICMR"
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 dark:invert"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 