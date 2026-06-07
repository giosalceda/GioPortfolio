import Card from "../components/Card";
import { games } from "../data/games";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
      <h1 className="text-2xl lg:text-4xl font-bold mb-5 text-yellow">PROJECTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <Card 
            key={index}
            image={game.image}
            title={game.title}
            details={game.details}
            people={game.people}
            time={game.time}
            link={game.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
