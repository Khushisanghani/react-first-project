import React from 'react';
import "./Services.css"
function Services(){
    return(
        <div className='services-conteiner'>
            <div className='box-1'>
            <h3>Nesciunt Mete</h3>
            <p>React was invented by Facebook developers who found the traditional DOM slow. By implementing a virtual DOM, React addressed this issue and gained popularity rapidly.
            The current stable version of ReactJS is 18.2.0, released on June 14, 2022. The library continues to evolve, introducing new features with each update.</p>
            </div>
            <div className='box-1'><h3>Ledo Markt</h3>
            <p>Ut excepturi voluptatem nisi sed.Quidem fuga consequatur.inus ea aut.Vel qui id voluptas adipisci eos erum corrupti.React is one of the most demanding JavaScript librarys because it is equipped with a ton of features which makes it faster and production-ready. Below are the few features of React.</p></div>
            <div  className='box-1'>
            <h3>Velit Doloremque.</h3>
                    <p>Cumque et suscipit saepe.Est maiores autem enim facilis ut autipsam corporis aut. Sed animi at autem alias eius labore.the name itself says that it is a one-direction flow. The data in react flows only in one direction i.e. the data is transferred from top to bottom i.e. from parent components to child components. The properties(props) in the child component cannot return the data to its parent component but it can have communication with the parent components to modify the states according to the provided inputs.</p>
            </div>
        </div>
    )
}
export default Services;