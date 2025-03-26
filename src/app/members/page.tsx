import Image from 'next/image';

const members = {
  faculty: [
    {
      name: "Dr. Koel Chaudhury, Ph.D.",
      title: "Principal Investigator",
      image: "/images/tec.jpg",
      bio: "Prof. Chaudhury's Clinical Biomarkers Research Laboratory is at the forefront of using metabolomics to identify disease biomarkers and understand the pathogenic mechanisms underlying complex human diseases.",
      research: "Metabolomics, Nanomedicine, Women's health, Respiratory disorders, Non-invasive biomarkers and sensors",
      Teliphone: "+91 03222 282221",
      email: "koel@smst.iitkgp.ac.in",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
        orcid: "https://orcid.org/XXXX-XXXX-XXXX-XXXX",
        linkedin: "https://www.linkedin.com/in/koel-chaudhury"
      }
    }
  ],
  staff: [
    {
      name: "John Smith",
      title: "Lab Manager",
      image: "/images/tec.jpg",
      bio: "Responsible for overall laboratory operations, equipment maintenance, and safety protocols.",
      responsibilities: "Lab management, Equipment maintenance, Safety compliance, Inventory management",
      email: "j.smith@university.edu",
      joinedDate: "2020-06"
    },
    {
      name: "Mary Johnson",
      title: "Lab Technician",
      image: "/images/tec.jpg",
      bio: "Provides technical support for research activities and maintains laboratory equipment.",
      responsibilities: "Sample preparation, Equipment operation, Data collection, Technical support",
      email: "m.johnson@university.edu",
      joinedDate: "2021-03"
    }
  ],
  postdocs: [
    {
      name: "Dr. Michael Johnson",
      title: "Postdoctoral Fellow",
      image: "/images/tec.jpg",
      research: "Biomarker validation, Mass spectrometry",
      email: "m.johnson@university.edu",
      joinedDate: "2022-01",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
        orcid: "https://orcid.org/XXXX-XXXX-XXXX-XXXX",
        linkedin: "https://www.linkedin.com/in/michael-johnson"
      }
    },
    {
      name: "Dr. Sarah Williams",
      title: "Postdoctoral Fellow",
      image: "/images/tec.jpg",
      research: "Clinical proteomics, Biomarker analysis",
      email: "s.williams@university.edu",
      joinedDate: "2022-06",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
        orcid: "https://orcid.org/XXXX-XXXX-XXXX-XXXX",
        linkedin: "https://www.linkedin.com/in/sarah-williams"
      }
    }
  ],
  students: [
    {
      name: "Robert Chen",
      title: "Research Scholar",
      image: "/images/tec.jpg",
      research: "Clinical biomarker discovery",
      email: "r.chen@university.edu",
      joinedDate: "2021-08",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
        orcid: "https://orcid.org/XXXX-XXXX-XXXX-XXXX",
        linkedin: "https://www.linkedin.com/in/robert-chen"
      }
    },
    {
      name: "Emily Brown",
      title: "Research Scholar",
      image: "/images/tec.jpg",
      research: "Metabolomics analysis",
      email: "e.brown@university.edu",
      joinedDate: "2021-08",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
        orcid: "https://orcid.org/XXXX-XXXX-XXXX-XXXX",
        linkedin: "https://www.linkedin.com/in/emily-brown"
      }
    },
    {
      name: "David Kim",
      title: "Research Scholar",
      image: "/images/tec.jpg",
      research: "Biomarker validation",
      email: "d.kim@university.edu",
      joinedDate: "2022-01",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
        orcid: "https://orcid.org/XXXX-XXXX-XXXX-XXXX",
        linkedin: "https://www.linkedin.com/in/david-kim"
      }
    }
  ],
  alumni: [
    {
      name: "Dr. Lisa Zhang",
      title: "Postdoctoral Fellow (2019-2022)",
      currentPosition: "Assistant Professor, Stanford University",
      research: "Metabolomics and biomarker discovery",
      email: "l.zhang@stanford.edu"
    },
    {
      name: "Dr. James Wilson",
      title: "Research Scholar (2018-2022)",
      currentPosition: "Research Scientist, Pfizer",
      research: "Clinical diagnostics and biomarker validation",
      email: "j.wilson@pfizer.com"
    },
    {
      name: "Dr. Maria Garcia",
      title: "Research Scholar (2017-2021)",
      currentPosition: "Senior Researcher, Mayo Clinic",
      research: "Mass spectrometry-based metabolomics",
      email: "m.garcia@mayo.edu"
    }
  ]
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
}

function getAnchorId(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-'); // Replace spaces with hyphens
}

// Add social media icons component
function SocialMediaLinks({ profiles }: { profiles?: { googleScholar?: string; orcid?: string; linkedin?: string } }) {
  if (!profiles) return null;

  return (
    <div className="flex gap-3 mt-2">
      {profiles.googleScholar && (
        <a
          href={profiles.googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          title="Google Scholar"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
          </svg>
        </a>
      )}
      {profiles.orcid && (
        <a
          href={profiles.orcid}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
          title="ORCID"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm.1 19.8c-4.159 0-7.5-3.341-7.5-7.5s3.341-7.5 7.5-7.5 7.5 3.341 7.5 7.5-3.341 7.5-7.5 7.5zm1.5-12.5h-3v8h3v-8zm0-3h-3v2h3v-2z"/>
          </svg>
        </a>
      )}
      {profiles.linkedin && (
        <a
          href={profiles.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          title="LinkedIn"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      )}
    </div>
  );
}

export default function Members() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 dark:text-white hover-section">Lab Members</h1>

        {/* Faculty */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-primary dark:text-primary/90 hover-section">Faculty</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {members.faculty.map((member, index) => (
              <div 
                key={index} 
                id={getAnchorId(member.name)}
                className="hover-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm flex flex-col md:flex-row gap-6"
              >
                <div className="w-full md:w-1/4">
                  <div className="aspect-square relative rounded-lg overflow-hidden hover-image">
                    <Image
                      src={member.image}
                      alt={`${member.name}'s photo`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white hover-link inline-block">{member.name}</h3>
                  <p className="text-primary dark:text-primary/90 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <strong className="dark:text-white">Research Areas:</strong> {member.research}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong className="dark:text-white">Email:</strong>{" "}
                    <a href={`mailto:${member.email}`} className="hover-link text-blue-600 dark:text-blue-400">
                      {member.email}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong className="dark:text-white">Phone:</strong>{" "}
                    <a href={`tel:${member.Teliphone}`} className="hover-link text-blue-600 dark:text-blue-400">
                      {member.Teliphone}
                    </a>
                  </p>
                  <SocialMediaLinks profiles={member.profiles} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-primary dark:text-primary/90 hover-section">Research Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Postdoctoral Fellows */}
            {members.postdocs.map((member, index) => (
              <div 
                key={`postdoc-${index}`} 
                id={getAnchorId(member.name)}
                className="hover-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <div className="aspect-square relative rounded-lg overflow-hidden mb-4 hover-image">
                  <Image
                    src={member.image}
                    alt={`${member.name}'s photo`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white hover-link inline-block">{member.name}</h3>
                <p className="text-primary dark:text-primary/90 font-medium mb-1">{member.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Joined {formatDate(member.joinedDate)}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong className="dark:text-white">Research:</strong> {member.research}
                </p>
                <a 
                  href={`mailto:${member.email}`} 
                  className="hover-link text-blue-600 dark:text-blue-400"
                >
                  {member.email}
                </a>
                <SocialMediaLinks profiles={member.profiles} />
              </div>
            ))}

            {/* Research Scholars */}
            {members.students.map((member, index) => (
              <div 
                key={`student-${index}`} 
                id={getAnchorId(member.name)}
                className="hover-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <div className="aspect-square relative rounded-lg overflow-hidden mb-4 hover-image">
                  <Image
                    src={member.image}
                    alt={`${member.name}'s photo`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white hover-link inline-block">{member.name}</h3>
                <p className="text-primary dark:text-primary/90 font-medium mb-1">{member.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Joined {formatDate(member.joinedDate)}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong className="dark:text-white">Research:</strong> {member.research}
                </p>
                <a 
                  href={`mailto:${member.email}`} 
                  className="hover-link text-blue-600 dark:text-blue-400"
                >
                  {member.email}
                </a>
                <SocialMediaLinks profiles={member.profiles} />
              </div>
            ))}
          </div>
        </section>

        {/* Lab Staff */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-primary dark:text-primary/90 hover-section">Lab Staff</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {members.staff.map((member, index) => (
              <div 
                key={`staff-${index}`} 
                id={getAnchorId(member.name)}
                className="hover-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/3">
                    <div className="aspect-square relative rounded-lg overflow-hidden hover-image">
                      <Image
                        src={member.image}
                        alt={`${member.name}'s photo`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white hover-link inline-block">{member.name}</h3>
                    <p className="text-primary dark:text-primary/90 font-medium mb-1">{member.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Joined {formatDate(member.joinedDate)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong className="dark:text-white">Responsibilities:</strong> {member.responsibilities}
                    </p>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="hover-link text-blue-600 dark:text-blue-400"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alumni */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-primary dark:text-primary/90 hover-section">Alumni</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {members.alumni.map((member, index) => (
              <div 
                key={`alumni-${index}`} 
                id={getAnchorId(member.name)}
                className="hover-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2 dark:text-white hover-link inline-block">{member.name}</h3>
                <p className="text-primary dark:text-primary/90 font-medium mb-2">{member.title}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-medium">
                  Currently: {member.currentPosition}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong className="dark:text-white">Research:</strong> {member.research}
                </p>
                <a 
                  href={`mailto:${member.email}`} 
                  className="hover-link text-blue-600 dark:text-blue-400"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 