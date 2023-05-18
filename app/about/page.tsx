import type { Metadata } from "next";
import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
  LinkedInIcon,
  PhoneIcon,
} from "components/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "VP of Developer Experience at Vercel.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hi, you can call me Josh. A little bit about me...
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm currently a <b> Full Stack Dev </b> at <b>WeDance </b>
          where I'm working on a platform for dancers to connect, learn and
          showcase their talent. You can view this project in the{" "}
          <Link href="/work">Work-Section</Link>
        </p>
        <p>
          I also contribute to an <b>Open-Source</b> project called{" "}
          <b>Ignitus</b>. Ignitus is a Machine Learning Community built for
          Students and Researchers. We are working on amazing ML projects
          including an intuitive and AI powered E-Learning Platform. Check us
          out on
          <a
            href="https://github.com/Ignitus"
            className="text-green-700 no-underline"
          >
            {" "}
            <b>IgnitusGithubPage</b>{" "}
          </a>
        </p>
        <hr />
        <p>
          I am passionate about unraveling the mysteries behind technology,
          music and art. This combination of interests is what ultimately led me
          to the world of software engineering.
        </p>
        <p>
          There's nothing quite like the feeling of building applications.
          Whether it's a basic HTML/XML file or a complex Next.js/Flutter
          application, I am an innovative problem solver by nature. It's amazing
          how accessible it is for anyone to become a developer, writer, or
          creator. There are no barriers to entry, no permissions required - all
          you need is an idea and the motivation to build. The world of
          developemnt is a limitless playground where imagination meets
          technology, and the possibilities are endless. It's an incredible
          feeling to be able to share your creations with the world and watch
          them come to life.
        </p>
        <p className="mb-8">
          Outside of coding, I am a member of a mental health orgnisation called{" "}
          <b>The Safe House</b>. We are a group of young people who are
          passionate about mental health and we are working day and night to
          create a safe space for people to talk about their mental health and
          seek help. We are also working on creating a platform where people can
          link with mental health professionals and find resources for self
          help. We also have a podcast called{" "}
          <a href="https://open.spotify.com/show/4NtWu30NuKCmEVj49hw3TW?si=07fa1ca6b9cc41b3">
            <b>Safe House_KE</b>
          </a>{" "}
          in which I am <b>cohost</b>. Our aim is a mentally healthy society.
        </p>

        <p>
          If you wish to{" "}
          <b className="text-green-500">Hire Me or Collaborate</b> you can call,
          whatsapp or email. If you are interested in contributing to
          TheSafeHouse or Ignitus you can reach out on any of my socials below.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="tel:+254742092240"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <PhoneIcon />
              <div className="ml-3">+254742092240</div>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="tel:+254742092240"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="">muuoyullu@gmail.com</div>
              <ArrowIcon />
            </div>
          </a>

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
