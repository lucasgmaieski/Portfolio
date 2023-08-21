import { Link } from "react-router-dom";


export const Projects = () => {
    return (
        <section className="" id="projects">
            <div>
                <h2>Projetos</h2>
            </div>
            <div>
                <div>
                    <div className="max-w-xs">
                        <img src="./src/assets/amper-foods-preview.png" alt="Preview projeto Amper Foods" />
                    </div>
                    <div>
                        <h3>Amper Foods</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores natus velit, debitis accusantium ipsam excepturi eos nihil ullam laboriosam, perferendis inventore enim. Vero, eius inventore ab quis nihil voluptates consequuntur.</p>
                        <div>
                            <Link to={''}>Demo</Link>
                            <Link to={''}>Código</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="max-w-xs">
                        <img src="./src/assets/amper-foods-preview.png" alt="Preview projeto Amper Foods" />
                    </div>
                    <div>
                        <h3>Amper Foods</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores natus velit, debitis accusantium ipsam excepturi eos nihil ullam laboriosam, perferendis inventore enim. Vero, eius inventore ab quis nihil voluptates consequuntur.</p>
                        <div>
                            <Link to={''}>Demo</Link>
                            <Link to={''}>Código</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="max-w-xs">
                        <img src="./src/assets/amper-foods-preview.png" alt="Preview projeto Amper Foods" />
                    </div>
                    <div>
                        <h3>Amper Foods</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores natus velit, debitis accusantium ipsam excepturi eos nihil ullam laboriosam, perferendis inventore enim. Vero, eius inventore ab quis nihil voluptates consequuntur.</p>
                        <div>
                            <Link to={''}>Demo</Link>
                            <Link to={''}>Código</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}