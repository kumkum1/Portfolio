import data from "../../data/index.json";

export default function Experience() {
    return (
        <section className="work--section" id="Experience">
          <div className="portfolio--container">
            <h2 className="work--section--heading">Experience</h2>
          </div>
          <div className="work--section--container">
            {data?.experience?.map((item, index) => (
              <div key={index} className="work--section--card">
                <div className="work--section--card--content">
                  <h3 className="work--section--title">{item.title}</h3>
                  <p className="work--section--description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
    );
}
