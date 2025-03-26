import Link from 'next/link';
import Image from 'next/image';
import FacilityBooking from '@/components/FacilityBooking';

// Define facility types
type FacilityMember = {
  name: string;
  title: string;
  email: string;
  link: string;
};

type FacilityName = 
  | 'Waters Mass Spectrometry'
  | 'Agilent HPLC'
  | 'Malvern Zetasizer'
  | 'Agilent FTIR Imaging'
  | 'Agilent LDIR Imaging';

type FacilityCategory = 'CRF Facilities' | 'Lab Facilities';

type FacilityInCharge = {
  [K in FacilityName]: FacilityMember;
};

// Facility to member mapping
const facilityInCharge: FacilityInCharge = {
  'Waters Mass Spectrometry': {
    name: 'Dr. Michael Johnson',
    title: 'Postdoctoral Fellow',
    email: 'm.johnson@university.edu',
    link: '/members#dr-michael-johnson'
  },
  'Agilent HPLC': {
    name: 'Dr. Sarah Williams',
    title: 'Postdoctoral Fellow',
    email: 's.williams@university.edu',
    link: '/members#dr-sarah-williams'
  },
  'Malvern Zetasizer': {
    name: 'Robert Chen',
    title: 'Research Scholar',
    email: 'r.chen@university.edu',
    link: '/members#robert-chen'
  },
  'Agilent FTIR Imaging': {
    name: 'Emily Brown',
    title: 'Research Scholar',
    email: 'e.brown@university.edu',
    link: '/members#emily-brown'
  },
  'Agilent LDIR Imaging': {
    name: 'David Kim',
    title: 'Research Scholar',
    email: 'd.kim@university.edu',
    link: '/members#david-kim'
  }
};

type FacilityCardProps = {
  title: FacilityName;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  facilityInfo: FacilityMember;
};

// Facility Card Component for better reusability and performance
function FacilityCard({ 
  title, 
  subtitle = '', 
  imageSrc, 
  imageAlt, 
  features, 
  facilityInfo 
}: FacilityCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover-facility overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 relative">
          <div className="aspect-[4/3] relative hover-image">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={title === 'Waters Mass Spectrometry'}
              loading={title === 'Waters Mass Spectrometry' ? 'eager' : 'lazy'}
            />
          </div>
        </div>
        <div className="lg:w-2/3 p-4 sm:p-6 lg:p-8">
          <div className="border-l-4 border-primary pl-4 hover-section">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary dark:text-primary/90 hover-link inline-block">
              {title}
            </h2>
            {subtitle && (
              <h3 className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-1">{subtitle}</h3>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 mb-2 sm:mb-4 text-sm sm:text-base">
            {title.includes('Mass Spectrometry') ? 'State-of-the-art quadrupole time-of-flight mass spectrometer offering:' :
             title.includes('HPLC') ? 'High-Performance Liquid Chromatography system featuring:' :
             title.includes('Zetasizer') ? 'Advanced particle characterization system providing:' :
             title.includes('FTIR') ? 'Fourier Transform Infrared Imaging system offering:' :
             'Laser Direct Infrared Imaging system providing:'}
          </p>
          <ul className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside mb-4 sm:mb-6 text-sm sm:text-base">
            {features.map((feature, index) => (
              <li key={index} className="hover-section">{feature}</li>
            ))}
          </ul>
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover-section">
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2 text-sm sm:text-base">Facility In Charge:</h4>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <Link 
                  href={facilityInfo.link}
                  className="hover-link text-primary dark:text-primary/90 font-medium text-sm sm:text-base"
                >
                  {facilityInfo.name}
                </Link>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{facilityInfo.title}</p>
              </div>
              <a 
                href={`mailto:${facilityInfo.email}`}
                className="hover-link text-blue-600 dark:text-blue-400 text-sm sm:text-base"
                aria-label={`Contact ${facilityInfo.name}`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Facility = {
  title: FacilityName;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  category: FacilityCategory;
};

// Facility categories with descriptions
const categoryDescriptions = {
  'CRF Facilities': 'Core Research Facilities (CRF) provide advanced analytical capabilities and specialized equipment for cutting-edge research.',
  'Lab Facilities': 'Laboratory facilities support day-to-day research activities and routine analytical procedures.'
};

export default function Facilities() {
  const facilities: Facility[] = [
    {
      title: 'Waters Mass Spectrometry',
      subtitle: 'Model: Xevo G3 QTof',
      imageSrc: '/images/facilities/waters-ms.jpg',
      imageAlt: 'Waters Xevo G3 QTof Mass Spectrometer',
      category: 'CRF Facilities',
      features: [
        'High-resolution accurate mass measurements',
        'Superior sensitivity for complex sample analysis',
        'Advanced protein and metabolite identification capabilities',
        'Comprehensive biomarker discovery and validation',
        'QuanTof technology for precise quantification'
      ]
    },
    {
      title: 'Agilent HPLC',
      imageSrc: '/images/facilities/agilent-hplc.jpg',
      imageAlt: 'Agilent HPLC System',
      category: 'Lab Facilities',
      features: [
        'Advanced separation capabilities for complex biological samples',
        'High-precision solvent delivery system',
        'Multiple detection options (UV-Vis, fluorescence, DAD)',
        'Automated sample handling and injection',
        'Method development and optimization capabilities'
      ]
    },
    {
      title: 'Malvern Zetasizer',
      subtitle: 'Nano Series',
      imageSrc: '/images/facilities/zetasizer.jpg',
      imageAlt: 'Malvern Zetasizer Nano Series',
      category: 'Lab Facilities',
      features: [
        'Dynamic light scattering for size measurements',
        'Zeta potential analysis',
        'Molecular weight measurements',
        'Protein aggregation studies',
        'Nanoparticle characterization'
      ]
    },
    {
      title: 'Agilent FTIR Imaging',
      imageSrc: '/images/facilities/ftir.jpg',
      imageAlt: 'Agilent FTIR Imaging System',
      category: 'CRF Facilities',
      features: [
        'High-resolution chemical imaging',
        'Rapid sample analysis and visualization',
        'Non-destructive analysis capabilities',
        'Advanced spectral data processing',
        'Tissue section analysis and characterization'
      ]
    },
    {
      title: 'Agilent LDIR Imaging',
      imageSrc: '/images/facilities/ldir.jpg',
      imageAlt: 'Agilent LDIR Imaging System',
      category: 'CRF Facilities',
      features: [
        'Rapid, high-definition chemical imaging',
        'Automated particle analysis',
        'High spatial resolution capabilities',
        'Advanced material characterization',
        'Microplastic analysis capabilities'
      ]
    }
  ];

  // Group facilities by category
  const facilitiesByCategory = facilities.reduce((acc, facility) => {
    if (!acc[facility.category]) {
      acc[facility.category] = [];
    }
    acc[facility.category].push(facility);
    return acc;
  }, {} as Record<FacilityCategory, Facility[]>);

  return (
    <main className="min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center dark:text-white hover-section">
          Laboratory Facilities
        </h1>
        
        <div className="space-y-16">
          {(Object.keys(categoryDescriptions) as FacilityCategory[]).map((category) => (
            <div key={category} className="space-y-8">
              <div className="text-center hover-section">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white">
                  {category}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  {categoryDescriptions[category]}
                </p>
              </div>
              
              <div className="space-y-8">
                {facilitiesByCategory[category]?.map((facility) => (
                  <FacilityCard
                    key={facility.title}
                    {...facility}
                    facilityInfo={facilityInCharge[facility.title]}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Booking Section */}
          <section className="mt-12 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 dark:text-white">
              Book a Facility
            </h2>
            <div className="max-w-4xl mx-auto">
              <FacilityBooking />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 