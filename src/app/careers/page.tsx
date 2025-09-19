import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Careers | Pascalcase',
  description: "We're a fast-growing startup seeking top talent to join our team.",
};

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      {/* Header Section */}
      <header className="mb-16 text-center">
        <h1
          className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Careers
        </h1>
        <p
          className="mx-auto max-w-4xl text-lg leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          We&apos;re a fast-growing startup seeking top talent to join our team. We&apos;re looking
          for passionate individuals who want to work in a dynamic, fast-paced environment and
          contribute to our mission. We offer competitive salaries, comprehensive benefits, and
          opportunities for growth and development in a fun and supportive work environment.
        </p>
      </header>

      {/* Job Openings Section */}
      <section className="mb-16">
        <h2
          className="mb-8 text-center text-2xl font-bold"
          style={{ color: 'var(--text-primary)' }}
        >
          Open Positions
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Job
            title="Microsoft Dynamics 365 Developers"
            skills="Strong knowledge on Dynamics 365, Plugins, Custom Workflows, Web API, C#, Web API, and SQL & Excellent communication skills."
            experience="1-5 years"
            location="Hyderabad, India"
          />

          <Job
            title="Microsoft Dynamics 365 Interns"
            skills="Good knowledge on any object oriented language, JavaScript, HTML, CSS and SQL & Excellent communication skills."
            experience="0 years"
            location="Hyderabad, India"
          />

          <Job
            title="Microsoft .Net Developers"
            skills="Strong knowledge on C#, Web API, SQL, etc. & Excellent communication skills."
            experience="0-2 years"
            location="Hyderabad, India"
          />
        </div>
      </section>

      {/* Apply Section */}
      <section className="text-center">
        <div
          className="rounded-2xl p-8 backdrop-blur-sm"
          style={{
            backgroundColor: 'var(--surface-card)',
            borderColor: 'var(--border-default)',
            border: '1px solid',
          }}
        >
          <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Ready to Join Our Team?
          </h2>
          <p className="mb-6 text-lg" style={{ color: 'var(--text-secondary)' }}>
            Send us your resume and let&apos;s discuss how you can contribute to our mission.
          </p>
          <a
            href="mailto:hr@pascalcase.com?subject=Job Application - [Position Title]"
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            Apply Now
          </a>
        </div>
      </section>
    </main>
  );
}

type JobProps = {
  title: string;
  skills: string;
  experience: string;
  location: string;
};

function Job({ title, skills, experience, location }: JobProps) {
  return (
    <article
      className="flex h-full flex-col rounded-2xl p-6 backdrop-blur-sm"
      style={{
        backgroundColor: 'var(--surface-card)',
        borderColor: 'var(--border-default)',
        border: '1px solid',
      }}
    >
      {/* Fixed-height header so following content aligns across cards */}
      <div className="mb-4 min-h-14">
        <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
      </div>

      {/* Middle: Skills block (content area) */}
      <div className="space-y-3">
        <div>
          <h4 className="mb-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            Skills Required
          </h4>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {skills}
          </p>
        </div>
      </div>

      {/* Meta row pinned near the bottom for consistent alignment */}
      <div className="mt-auto flex flex-wrap gap-6 pt-4">
        <div className="flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ backgroundColor: 'var(--accent-2)' }}
          >
            <ClockIcon className="h-4 w-4 text-white" />
          </div>
          <div>
            <h4 className="mb-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              Experience
            </h4>
            <p className="text-sm font-medium" style={{ color: 'var(--accent-2)' }}>
              {experience}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ backgroundColor: 'var(--accent-2)' }}
          >
            <MapPinIcon className="h-4 w-4 text-white" />
          </div>
          <div>
            <h4 className="mb-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              Location
            </h4>
            <p className="text-sm font-medium" style={{ color: 'var(--accent-2)' }}>
              {location}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
        <a
          href={`mailto:hr@pascalcase.com?subject=Job Application - ${encodeURIComponent(title)}`}
          className="inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors"
          style={{ backgroundColor: 'var(--primary)' }}
        >
          Apply for this Position
        </a>
      </div>
    </article>
  );
}
