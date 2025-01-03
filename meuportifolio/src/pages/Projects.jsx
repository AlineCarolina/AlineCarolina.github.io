import "../styles/Projects.css";

const Projects = () => {
  return (
    <>
        <section className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
        <div className="project-card">
            <img src="https://via.placeholder.com/300" alt="Imagem do Projeto" className="project-image" />
            <div className="project-content">
            <h3 className="project-title">Delivery App</h3>
            <p className="project-description">Complete system for online order management.</p>
            <p className="project-description">Features: User login, shopping cart, administrative panel to manage products.</p>
            <p className="project-description">Technologies: </p>
            <div className="project-links">
                <a href="#" className="project-link">Ver no GitHub</a>
                <a href="#" className="project-link">Demo Online</a>
            </div>
            </div>
        </div>
{/*         <!-- Clone este bloco para adicionar mais projetos --> */}
        </div>
    </section>
    </>
  );
};

export default Projects;

