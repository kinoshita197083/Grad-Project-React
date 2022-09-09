import React from 'react'
import './dashboard.scss'

export function Dashboard() {

    return (
        <div className='dashboard-container'>
            <div className="phone">
                <header className="header">

                </header>
                <section className="dashboard-title">
                    <h1>Five Things You Need To Know Today</h1>
                    <p>Explore millions of music according to your taste</p>
                </section>

                {/* <section class="search">
		<div class="search-inner">
			<button class="search-button">
				<i class="ai-search"></i>
			</button>
			<input type="text" class="search-input" placeholder="Search Music" />

		</div>
	</section>  */}

                {/* <nav class="navigation">
		<a href="#" class="navigation-item active">Overview</a>
		<a href="#" class="navigation-item">Songs</a>
		<a href="#" class="navigation-item">Albums</a>
		<a href="#" class="navigation-item">Artists</a>
	</nav>  */}
                <section className="playlists">


                    <article className="dashboard-card">
                        <div className="card-inner">
                            <span className="card-pin"></span>
                            <div className="dashboard-card-image">
                                <img src="https://assets.codepen.io/285131/illustration-hand-with-cigarette-icon.jpg" />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-number">20 songs</span>

                                </div>
                                <h2 className="card-title">Alan Walker</h2>
                            </div>
                        </div>
                    </article>


                    <article className="dashboard-card">
                        <div className="card-inner">
                            <span className="card-pin"></span>
                            <div className="dashboard-card-image">
                                <img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-number">20 songs</span>

                                </div>
                                <h2 className="card-title">Tim Bergling</h2>
                            </div>
                        </div>
                    </article>
                </section>


                <section className="currently-playing">

                    <article className="dashboard-card horizontal">
                        <div className="card-inner">
                            <span className="card-pin simple"></span>
                            <div className="dashboard-card-image">
                                <img src="https://assets.codepen.io/285131/pink-pastel-juicy-banana.jpg" />
                            </div>
                            <div className="card-content">
                                <div class="card-meta">
                                    <span className="card-meta-artist">Marshmello</span>
                                </div>
                                <h2 className="card-title">Hate the Other Side
                                    <span className="card-time">3:40</span>
                                </h2>
                            </div>
                            <span className="card-pin simple"></span>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    )
}