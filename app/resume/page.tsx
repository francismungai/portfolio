import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <Button asChild>
          <Link href="/">Back to Portfolio</Link>
        </Button>
        <Button asChild>
          <a href="/Francis_Mungai_Resume.pdf" download>
            Download PDF
          </a>
        </Button>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Francis Mungai</h1>
        <p className="mb-2">
          frankmungai77@gmail.com | +1 (216) 418-9704 |{" "}
          <a href="https://www.linkedin.com/in/francismungai77/" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <p>
            Full-stack software developer with hands-on experience building and scaling web and mobile applications
            using modern technologies. Proven ability to lead projects from concept to deployment, focusing on
            performance, user experience, and cloud infrastructure optimization. Skilled in integrating secure and
            scalable solutions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <h3 className="text-xl font-medium">Case Western Reserve University</h3>
          <p>BS in Computer Science, Aug 2020 – Dec 2024</p>
          <p>
            <strong>Relevant Coursework:</strong> Data Structures, Databases, Machine Learning, Web Development,
            Software Craftsmanship
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium">Full-stack Developer, MedVic</h3>
            <p className="italic">Sep 2024 – Present</p>
            <ul className="list-disc pl-5">
              <li>
                Co-founded MedVic, a mobile platform enabling users to find hospital shifts and volunteer opportunities.
              </li>
              <li>
                Designed and developed the mobile app using Expo React Native for iOS and Android, integrating React for
                web-based features.
              </li>
              <li>
                Built a scalable backend with Supabase, leveraging PostgreSQL for table design, relationships, indexes,
                RLS policies, RPCs, and edge functions.
              </li>
              <li>Optimized database performance with efficient queries and robust security policies.</li>
              <li>
                Enabled flexible job discovery by connecting users with nearby hospital shifts and volunteer
                opportunities.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Full-stack Developer, Tu-Fund</h3>
            <p className="italic">May 2023 – Present</p>
            <ul className="list-disc pl-5">
              <li>
                Co-founded and led the development of Tu-fund, a platform supporting international students through
                fundraising and talent acquisition.
              </li>
              <li>
                Designed and implemented a responsive UI using React and Next.js, converting Figma prototypes into
                accessible components.
              </li>
              <li>
                Integrated Stripe for secure payment processing, managing real-time donations and automated payouts.
              </li>
              <li>
                Configured and deployed on AWS (EC2, S3, DynamoDB, Lambda) ensuring scalability and cost-efficiency.
              </li>
              <li>Developed a talent acquisition module (talent.tu-fund.com) connecting students with employers.</li>
              <li>
                Optimized application performance using PM2 and NGINX, ensuring stability and scalability during
                high-traffic events.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <h3 className="text-xl font-medium">Urban Discovery System (UDS)</h3>
          <p>
            <a href="https://github.com/mjk257/uds" className="text-blue-600 hover:underline">
              github.com/mjk257/uds
            </a>
          </p>
          <ul className="list-disc pl-5">
            <li>
              Developed an interactive map using Mapbox, allowing users to visualize and compare data across 50+ U.S.
              cities.
            </li>
            <li>Built dynamic frontend components integrated with backend APIs for real-time updates.</li>
            <li>Collaborated with backend teams to ensure efficient API integration and enhanced data flow.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <p>
            <strong>Languages:</strong> Java, TypeScript, SQL, Python
          </p>
          <p>
            <strong>Frontend:</strong> React.js, Next.js, Expo React Native, Tailwind
          </p>
          <p>
            <strong>Backend/Cloud:</strong> Node.js, MongoDB, AWS (EC2, S3, DynamoDB, Lambda), Docker, Supabase,
            PostgreSQL, Mapbox, Nginx
          </p>
        </section>
      </div>
    </div>
  )
}

