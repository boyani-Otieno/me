import React, { Fragment, useState } from 'react'
import "./portfolio.css"
import Menu from './portdata'

const Portfolio = () => {


	const [items, setItems] = useState(Menu)

	const filterItem = (categItem) => {
		const updatedItems = Menu.filter((cureElem) => {
			return cureElem.category === categItem;
		})
		setItems(updatedItems);
	}

	return (
		<Fragment>

			<section className="portfolio" id='portfolio'>

				<div className='port-tittle'>
					<h2>my <span>works</span></h2>
					<p>Here are some my projects. They are my recently 
						done projects and projects I had done in school.</p>
					<div className="port-line"></div>
				</div>

				<div class="nav">
					<ul class="nav-list">
						<li onClick={() => setItems(Menu)}>
							<a class="img-filter active">All</a>
						</li>
						<li onClick={() => filterItem('Designing')}>
							<a class="img-filter">Designing</a>
						</li>
						<li onClick={() => filterItem('frontend')}>
							<a class="img-filter">frontend</a>
						</li>
						<li onClick={() => filterItem('Backend')}>
							<a class="img-filter" >Backend</a>
						</li>

					</ul>
				</div>

				<div className="port-row">

					{
						items.map((elem) => {

							return (

								<div className="port-col" key={elem.id}>
									<div class="project-item">
										<a class="zoom1" href={elem.link} target="_blank" rel='noopener noreferrer'>
											<img alt="" src={elem.image} />
											<div class="overlay">
												<div class="overlay-inner">
													<h4>{elem.heading}</h4>
													<p>{elem.paragrapgh}</p>
													{/* <a href={elem.sourceCode} className='btn primary' target="_blank" rel='noopener noreferrer'>Source Code</a> */}
												</div>
											</div>
										</a>
									</div>
								</div>

							)

						})
					}



				</div>

			</section>

		</Fragment>
	)
}

export default Portfolio