import React, { Iframe } from 'react';

function AmbulanceDemo() {
	return (
		<div className="contain">
			<div className="Ambulance-Demo">
				<div class="section-heading text-center">
					<h2>Ambulance Demo </h2>
				</div>
				<div className="custum-grid">
					<div className="grid-1">
						<iframe
							width={640}
							height={380}
							src="https://www.youtube.com/embed/T1xLtk6F27E"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AmbulanceDemo;
