const nov_20 = document.querySelector('.nov20');
const nov_21 = document.querySelector('.nov21');
const nov_22 = document.querySelector('.nov22');
const nov_23 = document.querySelector('.nov23');
const nov_24 = document.querySelector('.nov24');
const nov_25 = document.querySelector('.nov25');
const nov_26 = document.querySelector('.nov26');
const nov_27 = document.querySelector('.nov27');
const nov_28 = document.querySelector('.nov28');
const nov_29 = document.querySelector('.nov29');
const nov_30 = document.querySelector('.nov30');
const dec_1 = document.querySelector('.dec1');
const dec_2 = document.querySelector('.dec2');
const dec_3 = document.querySelector('.dec3');
const dec_4 = document.querySelector('.dec4');
const dec_5 = document.querySelector('.dec5');
const dec_6 = document.querySelector('.dec6');
const dec_9 = document.querySelector('.dec9');
const dec_10 = document.querySelector('.dec10');

const nov20 = [
	{
		team1: 'Qatar',
		team1_gools: 0,
		team2: 'Ecuador',
		team2_gools: 2,
		date: 'Nov 20',
		time: '7:00 PM',
		group: 'Group A',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400128082',
	},
];

const nov21 = [
	{
		team1: 'England',
		team1_gools: 6,
		team2: 'Iran',
		team2_gools: 2,
		date: 'Nov 21',
		time: '4:00 PM',
		group: 'Group B',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235458',
	},
	{
		team1: 'Senegal',
		team1_gools: 0,
		team2: 'Netherlands',
		team2_gools: 2,
		date: 'Nov 21',
		time: '7:00 PM',
		group: 'Group A',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235449',
	},
	{
		team1: 'USA',
		team1_gools: 1,
		team2: 'Wales',
		team2_gools: 1,
		date: 'Nov 21',
		time: '10:00 PM',
		group: 'Group B',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235455',
	},
];

const nov22 = [
	{
		team1: 'Argentina',
		team1_gools: 1,
		team2: 'Saudi Arabia',
		team2_gools: 2,
		date: 'Nov 22',
		time: '1:00 PM',
		group: 'Group C',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235461',
	},
	{
		team1: 'Denmark',
		team1_gools: 0,
		team2: 'Tunisia',
		team2_gools: 0,
		date: 'Nov 22',
		time: '4:00 PM',
		group: 'Group D',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235466',
	},
	{
		team1: 'Mexico',
		team1_gools: 0,
		team2: 'Poland',
		team2_gools: 0,
		date: 'Nov 22',
		time: '7:00 PM',
		group: 'Group C',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235463',
	},
	{
		team1: 'France',
		team1_gools: 4,
		team2: 'Australia',
		team2_gools: 1,
		date: 'Nov 22',
		time: '10:00 PM',
		group: 'Group D',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235470',
	},
];

const nov23 = [
	{
		team1: 'Morocco',
		team1_gools: 0,
		team2: 'Croatia',
		team2_gools: 0,
		date: 'Nov 23',
		time: '1:00 PM',
		group: 'Group F',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235481',
	},
	{
		team1: 'Germany',
		team1_gools: 1,
		team2: 'Japan',
		team2_gools: 2,
		date: 'Nov 23',
		time: '4:00 PM',
		group: 'Group E',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235476',
	},
	{
		team1: 'Spain',
		team1_gools: 7,
		team2: 'Costa Rica',
		team2_gools: 0,
		date: 'Nov 23',
		time: '7:00 PM',
		group: 'Group E',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235472',
	},
	{
		team1: 'Belgium',
		team1_gools: 1,
		team2: 'Canada',
		team2_gools: 0,
		date: 'Nov 23',
		time: '10:00 PM',
		group: 'Group F',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235477',
	},
];

const nov24 = [
	{
		team1: 'Switzerland',
		team1_gools: 1,
		team2: 'Cameroon',
		team2_gools: 0,
		date: 'Nov 24',
		time: '1:00 PM',
		group: 'Group G',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235488',
	},
	{
		team1: 'Uruguay',
		team1_gools: 0,
		team2: 'South Korea',
		team2_gools: 0,
		date: 'Nov 24',
		time: '4:00 PM',
		group: 'Group H',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235491',
	},
	{
		team1: 'Portugal',
		team1_gools: 3,
		team2: 'Ghana',
		team2_gools: 2,
		date: 'Nov 24',
		time: '7:00 PM',
		group: 'Group H',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235493',
	},
	{
		team1: 'Brazil',
		team1_gools: 2,
		team2: 'Serbia',
		team2_gools: 0,
		date: 'Nov 24',
		time: '10:00 PM',
		group: 'Group G',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235484',
	},
];

const nov25 = [
	{
		team1: 'Wales',
		team1_gools: 0,
		team2: 'Iran',
		team2_gools: 2,
		date: 'Nov 25',
		time: '1:00 PM',
		group: 'Group B',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235453',
	},
	{
		team1: 'Qatar',
		team1_gools: 1,
		team2: 'Senegal',
		team2_gools: 3,
		date: 'Nov 25',
		time: '4:00 PM',
		group: 'Group A',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235448',
	},
	{
		team1: 'Netherlands',
		team1_gools: 1,
		team2: 'Ecuador',
		team2_gools: 1,
		date: 'Nov 25',
		time: '7:00 PM',
		group: 'Group A',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235452',
	},
	{
		team1: 'England',
		team1_gools: 0,
		team2: 'USA',
		team2_gools: 0,
		date: 'Nov 25',
		time: '10:00 PM',
		group: 'Group B',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235457',
	},
];

const nov26 = [
	{
		team1: 'Tunisia',
		team1_gools: 0,
		team2: 'Australia',
		team2_gools: 1,
		date: 'Nov 26',
		time: '1:00 PM',
		group: 'Group D',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235469',
	},
	{
		team1: 'Poland',
		team1_gools: 2,
		team2: 'Saudi Arabia',
		team2_gools: 0,
		date: 'Nov 26',
		time: '4:00 PM',
		group: 'Group C',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235459',
	},
	{
		team1: 'France',
		team1_gools: 2,
		team2: 'Denmark',
		team2_gools: 1,
		date: 'Nov 26',
		time: '7:00 PM',
		group: 'Group D',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235467',
	},
	{
		team1: 'Argentina',
		team1_gools: 2,
		team2: 'Mexico',
		team2_gools: 0,
		date: 'Nov 26',
		time: '10:00 PM',
		group: 'Group C',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235462',
	},
];

const nov27 = [
	{
		team1: 'Japan',
		team1_gools: 0,
		team2: 'Costa Rica',
		team2_gools: 1,
		date: 'Nov 27',
		time: '1:00 PM',
		group: 'Group E',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235471',
	},
	{
		team1: 'Belgium',
		team1_gools: 0,
		team2: 'Morocco',
		team2_gools: 2,
		date: 'Nov 27',
		time: '4:00 PM',
		group: 'Group F',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235480',
	},
	{
		team1: 'Croatia',
		team1_gools: 4,
		team2: 'Canada',
		team2_gools: 1,
		date: 'Nov 27',
		time: '7:00 PM',
		group: 'Group F',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235482',
	},
	{
		team1: 'Spain',
		team1_gools: 1,
		team2: 'Germany',
		team2_gools: 1,
		date: 'Nov 27',
		time: '10:00 PM',
		group: 'Group E',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235474',
	},
];

const nov28 = [
	{
		team1: 'Cameroon',
		team1_gools: 3,
		team2: 'Serbia',
		team2_gools: 3,
		date: 'Nov 28',
		time: '1:00 PM',
		group: 'Group G',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235487',
	},
	{
		team1: 'South Korea',
		team1_gools: 2,
		team2: 'Ghana',
		team2_gools: 3,
		date: 'Nov 28',
		time: '4:00 PM',
		group: 'Group H',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235489',
	},
	{
		team1: 'Brazil',
		team1_gools: 1,
		team2: 'Switzerland',
		team2_gools: 0,
		date: 'Nov 28',
		time: '7:00 PM',
		group: 'Group G',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235485',
	},
	{
		team1: 'Portugal',
		team1_gools: 2,
		team2: 'Uruguay',
		team2_gools: 0,
		date: 'Nov 28',
		time: '10:00 PM',
		group: 'Group H',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235492',
	},
];

const nov29 = [
	{
		team1: 'Netherlands',
		team1_gools: 2,
		team2: 'Qatar',
		team2_gools: 0,
		date: 'Nov 29',
		time: '6:00 PM',
		group: 'Group A',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235450',
	},
	{
		team1: 'Ecuador',
		team1_gools: 1,
		team2: 'Senegal',
		team2_gools: 2,
		date: 'Nov 29',
		time: '6:00 PM',
		group: 'Group A',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235451',
	},
	{
		team1: 'Wales',
		team1_gools: 0,
		team2: 'England',
		team2_gools: 3,
		date: 'Nov 29',
		time: '10:00 PM',
		group: 'Group B',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235454',
	},
	{
		team1: 'Iran',
		team1_gools: 0,
		team2: 'USA',
		team2_gools: 1,
		date: 'Nov 29',
		time: '10:00 PM',
		group: 'Group B',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235456',
	},
];

const nov30 = [
	{
		team1: 'Australia',
		team1_gools: 1,
		team2: 'Denmark',
		team2_gools: 0,
		date: 'Nov 30',
		time: '6:00 PM',
		group: 'Group D',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235468',
	},
	{
		team1: 'Tunisia',
		team1_gools: 1,
		team2: 'France',
		team2_gools: 0,
		date: 'Nov 30',
		time: '6:00 PM',
		group: 'Group D',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235465',
	},
	{
		team1: 'Poland',
		team1_gools: 0,
		team2: 'Argentina',
		team2_gools: 2,
		date: 'Nov 30',
		time: '10:00 PM',
		group: 'Group C',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235464',
	},
	{
		team1: 'Saudi Arabia',
		team1_gools: 1,
		team2: 'Mexico',
		team2_gools: 2,
		date: 'Nov 30',
		time: '10:00 PM',
		group: 'Group C',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235460',
	},
];

const dec1 = [
	{
		team1: 'Croatia',
		team1_gools: 0,
		team2: 'Belgium',
		team2_gools: 0,
		date: 'Dec 1',
		time: '6:00 PM',
		group: 'Group F',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235478',
	},
	{
		team1: 'Canada',
		team1_gools: 1,
		team2: 'Morocco',
		team2_gools: 2,
		date: 'Dec 1',
		time: '6:00 PM',
		group: 'Group F',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235479',
	},
	{
		team1: 'Japan',
		team1_gools: 2,
		team2: 'Spain',
		team2_gools: 1,
		date: 'Dec 1',
		time: '10:00 PM',
		group: 'Group E',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235475',
	},
	{
		team1: 'Costa Rica',
		team1_gools: 2,
		team2: 'Germany',
		team2_gools: 4,
		date: 'Dec 1',
		time: '10:00 PM',
		group: 'Group E',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235473',
	},
];

const dec2 = [
	{
		team1: 'Ghana',
		team1_gools: 0,
		team2: 'Uruguay',
		team2_gools: 2,
		date: 'Dec 2',
		time: '6:00 PM',
		group: 'Group H',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235494',
	},
	{
		team1: 'South Korea',
		team1_gools: 2,
		team2: 'Portugal',
		team2_gools: 1,
		date: 'Dec 2',
		time: '6:00 PM',
		group: 'Group H',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235490',
	},
	{
		team1: 'Serbia',
		team1_gools: 2,
		team2: 'Switzerland',
		team2_gools: 3,
		date: 'Dec 2',
		time: '10:00 PM',
		group: 'Group G',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235486',
	},
	{
		team1: 'Cameroon',
		team1_gools: 1,
		team2: 'Brazil',
		team2_gools: 0,
		date: 'Dec 2',
		time: '10:00 PM',
		group: 'Group G',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285063/400235483',
	},
];

const dec3 = [
	{
		team1: 'Netherlands',
		team1_gools: 3,
		team2: 'USA',
		team2_gools: 1,
		date: 'Dec 3',
		time: '6:00 PM',
		group: 'Round of 16',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285073/400128136',
	},
	{
		team1: 'Argentina',
		team1_gools: 2,
		team2: 'Australia',
		team2_gools: 1,
		date: 'Dec 3',
		time: '10:00 PM',
		group: 'Round of 16',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285073/400128131',
	},
];

const dec4 = [
	{
		team1: 'France',
		team1_gools: 3,
		team2: 'Poland',
		team2_gools: 1,
		date: 'Dec 4',
		time: '6:00 PM',
		group: 'Round of 16',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285073/400128135',
	},
	{
		team1: 'England',
		team1_gools: 3,
		team2: 'Senegal',
		team2_gools: 0,
		date: 'Dec 4',
		time: '10:00 PM',
		group: 'Round of 16',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285073/400128134',
	},
];

const dec5 = [
	{
		team1: 'Japan',
		team1_gools: 1,
		team2: 'Croatia',
		team2_gools: 1,
		date: 'Dec 5',
		time: '6:00 PM',
		group: 'Round of 16',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285073/400128132',
	},
	{
		team1: 'Brazil',
		team1_gools: 4,
		team2: 'South Korea',
		team2_gools: 1,
		date: 'Dec 5',
		time: '10:00 PM',
		group: 'Round of 16',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285073/400128133',
	},
];

const dec6 = [
	{
		team1: 'Morocco',
		team1_gools: 0,
		team2: 'Spain',
		team2_gools: 0,
		date: 'Dec 6',
		time: '6:00 PM',
		group: 'Round of 16',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285073/400128137',
	},
	{
		team1: 'Portugal',
		team1_gools: 6,
		team2: 'Switzerland',
		team2_gools: 1,
		date: 'Dec 6',
		time: '10:00 PM',
		group: 'Round of 16',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285073/400128130',
	},
];

const dec9 = [
	{
		team1: 'Brazil',
		team1_gools: null,
		team2: 'Japan',
		team2_gools: null,
		date: 'Dec 9',
		time: '6:00 PM',
		group: 'Quarter-final',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285074/400128141',
	},
	{
		team1: 'Netherlands',
		team1_gools: null,
		team2: 'Argentina',
		team2_gools: null,
		date: 'Dec 9',
		time: '10:00 PM',
		group: 'Quarter-final',
		link: 'https://www.fifa.com/fifaplus/en/match-centre/match/17/255711/285074/400128139',
	},
];

const dec10 = [
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
		team1: 'England',
		team1_gools: null,
		team2: 'France',
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

appendCard(nov_20, nov20);
appendCard(nov_21, nov21);
appendCard(nov_22, nov22);
appendCard(nov_23, nov23);
appendCard(nov_24, nov24);
appendCard(nov_25, nov25);
appendCard(nov_26, nov26);
appendCard(nov_27, nov27);
appendCard(nov_28, nov28);
appendCard(nov_29, nov29);
appendCard(nov_30, nov30);
appendCard(dec_1, dec1);
appendCard(dec_2, dec2);
appendCard(dec_3, dec3);
appendCard(dec_4, dec4);
appendCard(dec_5, dec5);
appendCard(dec_6, dec6);
appendCard(dec_9, dec9);
appendCard(dec_10, dec10);
