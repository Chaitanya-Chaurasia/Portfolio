import { FC } from "react";

const Work: FC = () => {
  return (
    <div className="min-h-screen dark:text-white text-black px-6 md:px-20 py-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-1">
          <h1 className="text-7xl font-bold tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            Chaitanya Chaurasia
          </h1>
          <p className="text-md py-6 tracking-tight font-semibold space-x-4 text-center">
            <a href="mailto:cchauras@asu.edu" className="hover:underline">
              cchauras@asu.edu
            </a>{" "}
            <span>•</span>
            <a
              href="https://thechai.fyi"
              target="_blank"
              className="ml-2 hover:underline"
            >
              thechai.fyi
            </a>{" "}
            <span>•</span>
            <a
              href="https://linkedin.com/in/chai-t"
              target="_blank"
              className="ml-2 hover:underline"
            >
              linkedin/chai-t
            </a>{" "}
            <span>•</span>
            <a
              href="https://github.com/Chaitanya-Chaurasia"
              target="_blank"
              className="ml-2 hover:underline"
            >
              github/Chaitanya-Chaurasia
            </a>
          </p>
          <hr />
        </header>

        <Section title="Education">
          <Entry
            title="Arizona State University"
            subtitle="B.Sc. Computer Science (Dean's List, GPA 3.74/4)"
            location="Tempe, Arizona"
            date="May 2025"
          />
        </Section>

        <Section title="Work Experience">
          <Entry
            title="B:Side Capital | Full-Stack Software Engineering Intern"
            date="Denver, CO   |   Sept 2024 - Present"
            bullets={[
              "Shipped an AI-powered CRM using Next.js, Flask & Plaid for financial insights into $100+ million, increasing lender-client interactions by 33%.",
              "Employed Ansible for automated CI/CD & resource provisioning, enabling seamless version roll-outs.",
              "Adding AES, OAuth2 and scaled APIs to handle 100,000 req/sec using AWS Auto-Scale & Firebase.",
              "Utilized Llama 3.3 & Delphi to deploy custom RAG-based chat agents for sequential reasoning.",
            ]}
          />
          <Entry
            title="IDEXX | Embedded Systems Engineering Intern"
            date="Portland, ME | June - Aug 2024"
            bullets={[
              "Deployed a REST API for Linux-based veterinary instruments to execute 5 key operations including remote control via WLAN/VPN.",
              "Migrated codebase to ASP.NET Core MVC & Lua for lightweight scripting with C-based microservices.",
              "Implemented a multithreaded SQL-based Priority Queuing algorithm for concurrent HTTP & TCP/IP protocols.",
            ]}
          />
          <Entry
            title="Arizona State University | Undergraduate Teaching Assistant"
            date="Tempe, AZ | Jan - May 2024"
            bullets={[
              "Mentored 150+ students in CSE 360, covering Data Structures, Algorithms, Agile development, and software design.",
            ]}
          />
          <Entry
            title="Indian Institute of Technology | Machine Learning Engineering Intern"
            date="Delhi, India | May - July 2023"
            bullets={[
              "Capitalized on open-source tools—PyPSA, Altite to optimize power systems networks in the UK by 25%, based on 10+ socio-economic factors and predictive data analytics.",
              "Achieved 37% efficiency gains by linearly optimizing dispatch & annual costs with GLPK, Spark, and Prim&apos;s algorithm.",
              "Built Random Forest Classifiers for severity classification of parameters like capacity, emissions, and coupling.",
            ]}
          />
        </Section>

        <Section title="Skills">
          <ul className="list-disc list-inside text-md tracking-wide leading-relaxed">
            <li>
              <strong>Languages:</strong> C++, C#, Java, Python, JavaScript
              (ES5/6), TypeScript, HTML, SQL, Swift, MIPS
            </li>
            <li>
              <strong>Frameworks:</strong> ASP.NET, CSS, Express, Node, Next.js,
              React, Spark
            </li>
            <li>
              <strong>Libraries:</strong> Flask, NetworkX, OpenCV, PyTorch,
              Scikit-Learn, Tailwind
            </li>
            <li>
              <strong>Tools:</strong> AWS, Ansible, Docker, Figma, Git, Jenkins,
              JUnit, Linux, Maven, Prisma, Vertex AI
            </li>
            <li>
              <strong>Coursework:</strong> Distributed Systems, Machine
              Learning, Network Security, 3D Visualizations, Computer
              Architecture
            </li>
          </ul>
        </Section>

        <Section title="Projects">
          <Entry
            title="StockSage | Next.js, Python, Social Media Mining"
            bullets={[
              "Built a stock prediction platform using sentiment analysis (Reddit, X) and market data, achieving ~70% accuracy.",
              "Integrated a back-tested investment framework with XGBoost, user-defined thresholds, and real-time Alpha Vantage data.",
            ]}
          />
          <Entry
            title="Legal AId | MLH Google Cloud Track Winner, HackHarvard"
            bullets={[
              "Developed an AI-powered webapp for legal guidance using Google Cloud and custom-trained PaLM models.",
              "Implemented secure, scalable infra using Kubernetes and Firestore for vector searches and document management.",
              "Built recommendation engines with Google Maps API to connect users with attorneys based on location and query.",
            ]}
          />
        </Section>
        <hr />
      </div>
    </div>
  );
};

export default Work;

const Section: FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section>
    <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 font-bold tracking-tighter mb-2">
      {title}
    </h2>
    <div className="space-y-4">{children}</div>
  </section>
);

type EntryProps = {
  title: string;
  subtitle?: string;
  location?: string;
  date?: string;
  bullets?: string[];
};

const Entry: FC<EntryProps> = ({
  title,
  subtitle,
  location,
  date,
  bullets,
}) => (
  <div className="space-y-1">
    <div className="flex flex-col md:flex-row md:justify-between">
      <h3 className="font-medium">{title}</h3>

      {date && (
        <span className="text-md font-normal tracking-wide text-gray-500">
          {date}
        </span>
      )}
    </div>
    {subtitle && (
      <p
        className="text-md font-normal tracking-wide"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    )}
    {location && (
      <p className="text-md font-normal tracking-wide text-gray-500  ">
        {location}
      </p>
    )}
    {bullets && (
      <ul className="list-disc list-inside text-md font-normal tracking-wide space-y-1">
        {bullets.map((b, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
        ))}
      </ul>
    )}
  </div>
);
