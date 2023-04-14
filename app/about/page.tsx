import type { Metadata } from "next";
import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
  LinkedInIcon,
} from "components/icons";

export const metadata: Metadata = {
  title: "About",
  description: "VP of Developer Experience at Vercel.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hi, I'm Josh. I also go by <b>mwo.rld</b> | <b>yulluone</b> |{" "}
        <b>joshuamwo</b>.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm currently an <b>Intern </b> at <b>WeDance </b> and <b> Ignutus</b>
          . At <b>WeDance</b> I'm working on building a platform for dancers to
          connect, learn and showcase their talent and at <b>Ignutus</b> I'm
          working on machine learning projects while building a platform for
          students to connect with teachers and learn from them.
        </p>
        <hr />
        <p>
          I am passionate about unraveling the mystries behind technology, music
          and art. This combination of interests is what ultimately led me to
          the world of software development.
        </p>
        <p>
          There's nothing quite like the feeling of building for the web.
          Whether it's a basic HTML file or a complex Next.js application like
          this one, I love creating for the web. It's amazing how accessible it
          is for anyone to become a developer, writer, or creator. There are no
          barriers to entry, no permissions required - all you need is an idea
          and the motivation to build. The web is a limitless playground where
          imagination meets technology, and the possibilities are endless. It's
          an incredible feeling to be able to share your creations with the
          world and watch them come to life.
        </p>
        <p className="mb-8">
          Outside of coding, I am a member of a mental health orgnisation called{" "}
          <b>The Safe House</b>. We are a group of young people who are
          passionate about mental health and we are working to create a safe
          space for people to talk about their mental health and seek help. We
          are also working on creating a platform where people can find
          professionals who can help them with their mental health issues. We
          also have a podcast called <b>TheeSafeHouse</b> in which I am{" "}
          <b>cohost</b>. We aim at educating people about mental health and
          destigmatizing it.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/yulluone"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <TwitterIcon />
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/joshuamwo"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/joshua-yullu-068042192/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedInIcon />
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
