import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Zoo from './images/zoo.JPG'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const About = () => {
    return (
        <div className='container text-center mt-2'>
            <Navbar />
            <h1 className='fw-bold text-light'>About Us</h1>
            <div className="card text-center my-5" style={{ width: '100%', height: '50%' }}>
                <img src={Zoo} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text font-monospace" style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam praesentium, non asperiores quasi, dolor necessitatibus, harum blanditiis perferendis accusamus suscipit quo dolores? Nemo veniam molestiae totam illum? Hic suscipit, beatae delectus perferendis consequatur provident eos quidem vel repudiandae iste reprehenderit rem voluptas impedit non porro, consectetur voluptates illum exercitationem quae neque ad aliquid quas natus saepe. Totam quis nostrum, porro voluptate molestias saepe hic odit eius sed veritatis dignissimos officiis minus aut! Magnam accusantium voluptate veritatis, consequuntur aliquam alias temporibus deserunt. Suscipit quisquam inventore est, sapiente obcaecati voluptates veritatis velit quasi soluta deserunt neque, repellendus distinctio deleniti fuga nulla voluptas quos mollitia quas voluptatum, nisi ea quam quibusdam et? Deleniti, quibusdam amet. Fuga nam vero eaque numquam tempore soluta repellat magni nostrum nihil corporis at suscipit possimus praesentium est sit, tenetur sequi fugit deleniti nulla qui excepturi dicta voluptates laudantium dolor? Atque velit, sunt animi aperiam iusto quis voluptate ducimus fugit praesentium id modi dicta, alias cum recusandae. Commodi laudantium quibusdam beatae libero laboriosam quasi veritatis deleniti suscipit. Repudiandae tenetur minima, laudantium, nam assumenda molestiae quos maiores id distinctio atque laboriosam, molestias ex aliquam. Magni expedita odio maiores qui placeat, eaque libero unde. Blanditiis rem eos illum ex dicta laborum, repellendus perspiciatis officia, soluta facere aspernatur doloribus distinctio, nulla neque. Fuga provident nihil, repellat consectetur rerum velit laborum voluptates maiores explicabo quos saepe ratione, libero id voluptas. Velit placeat ab tenetur possimus sint, consequatur ratione corrupti vero repellat culpa eligendi libero, optio perspiciatis quidem, exercitationem fuga? Quibusdam est odit doloribus sint ad suscipit molestiae repudiandae labore, dolor inventore ut ipsam id non sed rem modi fugiat. Eum sequi tempore eius perspiciatis aliquid corporis vitae, sint nobis dolore, laboriosam maiores iste animi saepe numquam ad. Hic, iste repellendus! Earum, deleniti amet quos tempora ratione quod harum adipisci est quia? Impedit temporibus commodi at iusto vero mollitia dolor, eius excepturi alias ipsa, quisquam consectetur maiores maxime ullam quasi unde autem natus? Suscipit labore aut tempore dolorem dicta. Sint animi odit possimus quia suscipit eos deleniti enim et placeat velit aliquam, impedit nemo magni alias assumenda esse obcaecati dolor voluptates modi similique, facilis veniam beatae illo? Accusantium dolorem enim ducimus, cupiditate omnis consequatur culpa. Labore aspernatur odio dolorem accusantium unde obcaecati! Ab fugit architecto adipisci et minima facilis ex dolor reprehenderit porro, soluta vel, eum ea odio. Perspiciatis quisquam possimus harum, totam recusandae, quibusdam quae aperiam nobis dolorem placeat vel. Repellendus, optio! Voluptas incidunt officiis animi rerum expedita consequuntur, facere molestiae commodi eligendi eos quod in hic, alias magnam aspernatur unde id iure autem quidem rem repudiandae! Rerum ipsum magni et ipsa voluptates nam maxime, doloribus porro, illo saepe, nisi doloremque laborum voluptatum quasi officiis repudiandae! Aperiam tenetur sed quaerat nostrum minus quod ab veritatis molestias qui voluptas facere distinctio sit, modi reiciendis ad nam quisquam optio itaque et voluptatibus cum quibusdam debitis? Earum ducimus esse voluptates nihil consequatur hic est saepe natus, accusantium repudiandae voluptate facilis commodi reprehenderit quisquam dicta enim praesentium recusandae ab delectus! Voluptates dolores repudiandae illum quibusdam nihil voluptatibus!
                    </p>
                    <Link to='/contact' class="btn btn-primary">Talk to me</Link>
                </div>
            </div>
        </div>
    )
}

export default About