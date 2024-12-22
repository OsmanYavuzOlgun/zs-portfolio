import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/articles.css";

const Portfolio = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "portfolio");

	return (
		<React.Fragment>
			<Helmet>
				<title>Portfolio | </title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="portfolio" />
				<div className="content-wrapper">
					<div className="portfolio-logo-container">
						<div className="portfolio-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="portfolio-main-container">
						<div className="title portfolio-title">
						</div>

						<div className="subtitle portfolio-subtitle">
						</div>

						<div className="portfolio-container">
							<div className="portfolio-wrapper">

							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Portfolio;
