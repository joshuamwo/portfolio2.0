import Link from "next/link";
import Image from "next/image";
import { getBlogViews, getTweetCount, getStarCount } from "lib/metrics";
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
  PhoneIcon,
} from "components/icons";
import { name, about, bio, avatar } from "lib/info";

export const revalidate = 60;

export default async function HomePage() {
  let starCount, views, tweetCount;

  try {
    [starCount, views, tweetCount] = await Promise.all([
      getStarCount(),
      getBlogViews(),
      getTweetCount(),
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <div className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </div>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full object-cover grayscale hover:grayscale-0"
          src={avatar}
          placeholder="blur"
          width={150}
          // height={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/yulluone"
            className="flex items-center gap-2 hover:text-black dark:hover:text-white	transition-all"
          >
            <TwitterIcon />
            {/* {`${tweetCount.toLocaleString()} tweets all time`} */}
            Yulluone
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/joshuamwo"
            className="flex items-center gap-2 hover:text-black dark:hover:text-white	transition-all"
          >
            <GitHubIcon />
            {/* {`${starCount.toLocaleString()} stars on this repo`} */}
            Joshuamwo
          </a>
          <a
            href="tel:+254742092240"
            className="flex items-center gap-2 hover:text-black dark:hover:text-white	transition-all"
          >
            <PhoneIcon />
            {/* {`${views.toLocaleString()} blog views all time`} */}
            +254 742 092 240
          </a>
        </div>
      </div>
      <div className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:muuoyullu@gmail.com"
          >
            <ArrowIcon />
            Email: muuoyullu@gmail.com
          </a>
        </li>
        {/* <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <ArrowIcon />
            <p className="h-7">get email updates</p>
          </a>
        </li> */}
      </ul>
    </section>
  );
}
