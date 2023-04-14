import siteMetadata from "../../data/siteMetaData";
import projectsData from "../../data/projectsData";
import Card from "../../components/Card";
import { PageSEO } from "../../components/SEO";

export default function Work() {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="">
        <h1 className="font-bold text-3xl font-serif mb-5">Work Showcase</h1>
        <div className="container py-4">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
