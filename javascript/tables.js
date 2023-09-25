const groupA = document.querySelector('.groupA');
const groupB = document.querySelector('.groupB');
const groupC = document.querySelector('.groupC');
const groupD = document.querySelector('.groupD');
const groupE = document.querySelector('.groupE');
const groupF = document.querySelector('.groupF');
const groupG = document.querySelector('.groupG');
const groupH = document.querySelector('.groupH');

const TeamsA = [
	{
		team_name: 'Netherlands',
		w: 2,
		d: 1,
		l: 0,
		def: '+4',
		on: 1,
		for: 5,
	},
	{
		team_name: 'Senegal',
		w: 1,
		d: 0,
		l: 2,
		def: '+1',
		on: 4,
		for: 5,
	},
	{
		team_name: 'Ecuador',
		w: 1,
		d: 1,
		l: 1,
		def: '+1',
		on: 3,
		for: 4,
	},
	{
		team_name: 'Qatar',
		w: 0,
		d: 0,
		l: 3,
		def: '-6',
		on: 7,
		for: 1,
	},
];

const TeamsB = [
	{
		team_name: 'England',
		w: 2,
		d: 1,
		l: 0,
		def: '+4',
		on: 1,
		for: 5,
	},
	{
		team_name: 'USA',
		w: 1,
		d: 2,
		l: 0,
		def: '+1',
		on: 1,
		for: 2,
	},
	{
		team_name: 'Iran',
		w: 1,
		d: 0,
		l: 2,
		def: '-3',
		on: 2,
		for: 5,
	},
	{
		team_name: 'Wales',
		w: 0,
		d: 1,
		l: 2,
		def: '-5',
		on: 6,
		for: 1,
	},
];

const TeamsC = [
	{
		team_name: 'Argentina',
		w: 2,
		d: 0,
		l: 1,
		def: '+3',
		on: 2,
		for: 5,
	},
	{
		team_name: 'Poland',
		w: 1,
		d: 1,
		l: 1,
		def: '0',
		on: 2,
		for: 2,
	},
	{
		team_name: 'Mexico',
		w: 1,
		d: 1,
		l: 1,
		def: '-1',
		on: 3,
		for: 2,
	},
	{
		team_name: 'Saudi Arabia',
		w: 1,
		d: 0,
		l: 2,
		def: '-2',
		on: 5,
		for: 3,
	},
];

const TeamsD = [
	{
		team_name: 'France',
		w: 2,
		d: 0,
		l: 1,
		def: '+3',
		on: 3,
		for: 6,
	},
	{
		team_name: 'Australia',
		w: 2,
		d: 0,
		l: 1,
		def: '-1',
		on: 4,
		for: 3,
	},
	{
		team_name: 'Tunisia',
		w: 1,
		d: 1,
		l: 1,
		def: '0',
		on: 1,
		for: 1,
	},
	{
		team_name: 'Denmark',
		w: 0,
		d: 1,
		l: 2,
		def: '-2',
		on: 3,
		for: 1,
	},
];

const TeamsE = [
	{
		team_name: 'Japan',
		w: 2,
		d: 0,
		l: 1,
		def: '+1',
		on: 3,
		for: 4,
	},
	{
		team_name: 'Spain',
		w: 1,
		d: 1,
		l: 1,
		def: '+6',
		on: 3,
		for: 9,
	},
	{
		team_name: 'Germany',
		w: 1,
		d: 1,
		l: 1,
		def: '+1',
		on: 5,
		for: 6,
	},
	{
		team_name: 'Costa Rica',
		w: 1,
		d: 0,
		l: 2,
		def: '-8',
		on: 11,
		for: 3,
	},
];

const TeamsF = [
	{
		team_name: 'Morocco',
		w: 2,
		d: 1,
		l: 0,
		def: '+3',
		on: 1,
		for: 4,
	},
	{
		team_name: 'Croatia',
		w: 1,
		d: 2,
		l: 0,
		def: '+3',
		on: 1,
		for: 4,
	},
	{
		team_name: 'Belgium',
		w: 1,
		d: 1,
		l: 1,
		def: '-1',
		on: 2,
		for: 1,
	},
	{
		team_name: 'Canada',
		w: 0,
		d: 0,
		l: 3,
		def: '-5',
		on: 7,
		for: 2,
	},
];

const TeamsG = [
	{
		team_name: 'Brazil',
		w: 2,
		d: 0,
		l: 1,
		def: '+2',
		on: 1,
		for: 3,
	},
	{
		team_name: 'Switzerland',
		w: 1,
		d: 0,
		l: 2,
		def: '+1',
		on: 3,
		for: 4,
	},
	{
		team_name: 'Cameroon',
		w: 1,
		d: 1,
		l: 1,
		def: '0',
		on: 4,
		for: 4,
	},
	{
		team_name: 'Serbia',
		w: 0,
		d: 1,
		l: 2,
		def: '-3',
		on: 8,
		for: 3,
	},
];

const TeamsH = [
	{
		team_name: 'Portugal',
		w: 2,
		d: 0,
		l: 1,
		def: '+2',
		on: 4,
		for: 6,
	},
	{
		team_name: 'South Korea',
		w: 1,
		d: 1,
		l: 1,
		def: '0',
		on: 4,
		for: 4,
	},
	{
		team_name: 'Uruguay',
		w: 1,
		d: 1,
		l: 1,
		def: '0',
		on: 2,
		for: 2,
	},
	{
		team_name: 'Ghana',
		w: 1,
		d: 0,
		l: 2,
		def: '-2',
		on: 7,
		for: 5,
	},
];

function appendCard(parent, arrayTeams) {
	arrayTeams.map(team => {
		parent.innerHTML += `
          <tr>
						<td class="team-name">
							<img src="./img/flags/${team.team_name.toLowerCase()}.png" alt="" /> 
              ${team.team_name}
						</td>
						<td>${team.w * 3 + team.d * 1}</td>
						<td>${team.def}</td>
						<td>${team.for}/${team.on}</td>
						<td>${team.w}</td>
						<td>${team.d}</td>
						<td>${team.l}</td>
					</tr>
    `;
	});
}

appendCard(groupA, TeamsA);
appendCard(groupB, TeamsB);
appendCard(groupC, TeamsC);
appendCard(groupD, TeamsD);
appendCard(groupE, TeamsE);
appendCard(groupF, TeamsF);
appendCard(groupG, TeamsG);
appendCard(groupH, TeamsH);
