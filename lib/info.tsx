import me from "../app/me2.jpg";

export const name = "Joshua Yullu";
export const avatar = me;
export const about = () => {
  return (
    <>
      <h3 className="text-xl">
        I'm a <b>Full-Stack Engineer</b> with experience in both{" "}
        <b>front-end & back-end</b> development. I specialize in developing{" "}
        <b>Web & Mobile</b> applications using modern web technologies such as{" "}
        <b>React, Flutter, Vue and NodeJs</b>
      </h3>
      <br />
      <h2 className="text-3xl font-bold">Services</h2>
      <ul className="font-semibold">
        <li> Custom Websites </li>
        <li> UI/UX Design </li>
        <li> Business Process Automation</li>
        <li> Mobile App Development</li>
        <li> E-Commerce Solutions </li>
        <li> Application Maintenance and Support</li>
        <li> Staff Technical Traning</li>
      </ul>
    </>
  );
};
export const bio = () => {
  return (
    <>
      <h1 className="text-2xl font-bold"> My Stack </h1>
      <h3 className="text-xl font-bold"> Languages </h3>
      <p>TypeScript | JavaScript (ES6) | Dart | Python | Rust | C++ </p>
      <br />
      <h3 className="text-xl font-bold">Front End </h3>
      <p> React | Vue | Flutter | NextJs | Nuxt | HTML5 | CSS </p>
      <br />
      <h3 className="text-xl font-bold"> Back End </h3>
      <p> NodeJS | Express | GraphQL | Docker | Express | GraphQl </p>
      <br />
      <h3 className="text-xl font-bold">Databases</h3>
      <p>
        DataBase Design | [SQL|NOSQL] | MongoDB | PostgreSQL | MySQL | FireStore{" "}
      </p>
      <br />
      <h3 className="text-xl font-bold"> DevOps </h3>
      <p> NodeJS | Express | GraphQL | Docker | </p>
      <br />
      <h3 className="text-xl font-bold">DevOps & Cloud Tech </h3>
      <p>
        Git & Github | Docker | AWS | GCP | Firebase | Docker | Supabase |
        Vercel | Netlify | Heroku
      </p>
    </>
  );
};
