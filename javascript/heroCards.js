const hero = document.querySelector('.hero-cards');

const heroData = [
	{
		team1: 'Brazil',
		team1_gools: null,
		team2: 'Croatia',
		team2_gools: null,
		date: 'Dec 9',
		time: '6:00 PM',
		group: 'Quarter-final',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285074/400128141',
	},
	{
		team1: 'Argentina',
		team1_gools: null,
		team2: 'Netherlands',
		team2_gools: null,
		date: 'Dec 9',
		time: '10:00 PM',
		group: 'Quarter-final',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285074/400128139',
	},
	{
		team1: 'Portugal',
		team1_gools: null,
		team2: 'Morocco',
		team2_gools: null,
		date: 'Dec 10',
		time: '6:00 PM',
		group: 'Quarter-final',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285074/400128140',
	},
	{
		team1: 'France',
		team1_gools: null,
		team2: 'England',
		team2_gools: null,
		date: 'Dec 10',
		time: '10:00 PM',
		group: 'Quarter-final',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285074/400128138',
	},
];

function appendCard(parent, arrayTeams) {
	arrayTeams.map(team => {
		parent.innerHTML += `
    <a href="${team.link}" class="card">
							<p class="group">${team.group}</p>
							<div class="card-main">
								<div class="card-team">
									<img
										src="./img/flags/${team.team1.toLowerCase()}.png"
										alt=""
										class="team-img"
									/>
									<h3 class="team-name">${team.team1}</h3>
								</div>
								<div class="card-vs">
									<h2>${
										team.team1_gools !== null || team.team2_gools !== null
											? `${team.team1_gools} - ${team.team2_gools}`
											: 'VS'
									}</h2>
								</div>
								<div class="card-team">
									<img
										src="./img/flags/${team.team2.toLowerCase()}.png"
										alt=""
										class="team-img"
									/>
									<h3 class="team-name">${team.team2}</h3>
								</div>
							</div>
							<div class="card-date">
								<p class="match-date">${team.date}</p>
								<p class="match-time">${team.time}</p>
							</div>
						</a>
    `;
	});
}

appendCard(hero, heroData);
