const suburbProfiles = [
  {
    suburb: 'Logan Reserve',
    state: 'QLD',
    priceBand: 'Mid-market',
    tags: ['queensland', 'brisbane', 'family', 'infrastructure', 'under 900k', 'under 1m'],
    reason: 'Rapid population growth and transport upgrades are drawing owner-occupiers and first-home buyers.',
    drivers: 'Affordable new housing supply, Brisbane spillover demand, and long-term infrastructure investment.'
  },
  {
    suburb: 'Mango Hill',
    state: 'QLD',
    priceBand: 'Upper-mid',
    tags: ['queensland', 'brisbane', 'family', 'train', 'infrastructure'],
    reason: 'Schooling, rail access, and retail amenity support resilient buyer demand.',
    drivers: 'Strong family appeal, transport links, and a tight owner-occupier market.'
  },
  {
    suburb: 'Ripley',
    state: 'QLD',
    priceBand: 'Mid-market',
    tags: ['queensland', 'family', 'growth corridor', 'under 900k', 'infrastructure'],
    reason: 'Master-planned growth corridor with ongoing amenity expansion.',
    drivers: 'New schools, retail rollout, and affordability relative to inner Brisbane.'
  },
  {
    suburb: 'Alkimos',
    state: 'WA',
    priceBand: 'Mid-market',
    tags: ['wa', 'perth', 'coastal', 'family', 'under 900k'],
    reason: 'A coastal suburb benefiting from Perth’s housing undersupply and northern corridor expansion.',
    drivers: 'Beach lifestyle appeal, affordability, and infrastructure-led population growth.'
  },
  {
    suburb: 'Baldivis',
    state: 'WA',
    priceBand: 'Affordable',
    tags: ['wa', 'perth', 'family', 'yield', 'under 700k'],
    reason: 'Well-established family market with both rental demand and value pricing.',
    drivers: 'Land scarcity nearer Perth, consistent household formation, and attractive rental returns.'
  },
  {
    suburb: 'Morphett Vale',
    state: 'SA',
    priceBand: 'Affordable',
    tags: ['sa', 'adelaide', 'yield', 'under 700k', 'family'],
    reason: 'Large buyer pool seeking affordability within metro Adelaide.',
    drivers: 'South Adelaide infrastructure, rental pressure, and upgrade-renovation potential.'
  },
  {
    suburb: 'Seaford Meadows',
    state: 'SA',
    priceBand: 'Mid-market',
    tags: ['sa', 'adelaide', 'coastal', 'family', 'train'],
    reason: 'Coastal positioning and rail access underpin broad demand.',
    drivers: 'Lifestyle appeal, relative affordability, and transport convenience.'
  },
  {
    suburb: 'Werribee',
    state: 'VIC',
    priceBand: 'Mid-market',
    tags: ['victoria', 'vic', 'melbourne', 'family', 'under 900k', 'infrastructure'],
    reason: 'Western Melbourne growth remains supported by infrastructure and employment hubs.',
    drivers: 'Population growth, transport upgrades, and value relative to inner suburbs.'
  },
  {
    suburb: 'Clyde North',
    state: 'VIC',
    priceBand: 'Upper-mid',
    tags: ['victoria', 'vic', 'melbourne', 'family', 'growth corridor', 'under 1m'],
    reason: 'Strong household formation and persistent demand for modern family homes.',
    drivers: 'Expanding schools, retail, health precincts, and road improvements.'
  },
  {
    suburb: 'Marsden Park',
    state: 'NSW',
    priceBand: 'Upper-mid',
    tags: ['nsw', 'sydney', 'family', 'infrastructure', 'under 1.2m'],
    reason: 'North-west Sydney growth corridor with substantial retail and logistics employment.',
    drivers: 'Infrastructure pipeline, jobs growth, and demand from upgraders.'
  },
  {
    suburb: 'Box Hill',
    state: 'NSW',
    priceBand: 'Upper-mid',
    tags: ['nsw', 'sydney', 'family', 'growth corridor', 'infrastructure'],
    reason: 'Emerging Hills District location with future town centre development.',
    drivers: 'Road upgrades, new housing supply, and long-term land value uplift potential.'
  },
  {
    suburb: 'Whitlam',
    state: 'ACT',
    priceBand: 'Upper-mid',
    tags: ['act', 'canberra', 'family', 'new', 'under 1m'],
    reason: 'Newer Canberra suburb with limited detached housing supply.',
    drivers: 'Government employment stability, planned amenity, and owner-occupier demand.'
  },
  {
    suburb: 'Bellbird Park',
    state: 'QLD',
    priceBand: 'Mid-market',
    tags: ['queensland', 'brisbane', 'family', 'yield', 'under 800k'],
    reason: 'Affordable house market with improving amenities and tenant demand.',
    drivers: 'Ipswich growth, renovation upside, and strong rent-to-income value.'
  },
  {
    suburb: 'Elizabeth North',
    state: 'SA',
    priceBand: 'Affordable',
    tags: ['sa', 'adelaide', 'yield', 'under 600k', 'value'],
    reason: 'Investor attention continues due to low entry prices and improving fundamentals.',
    drivers: 'Tight rental supply, affordability, and manufacturing/logistics employment.'
  },
  {
    suburb: 'Caboolture South',
    state: 'QLD',
    priceBand: 'Affordable',
    tags: ['queensland', 'brisbane', 'yield', 'under 700k', 'value'],
    reason: 'Moreton Bay corridor demand is supporting both rents and owner-occupier interest.',
    drivers: 'Relative affordability, transport connectivity, and regional migration.'
  }
];

const chatForm = document.querySelector('#chatForm');
const userPrompt = document.querySelector('#userPrompt');
const chatMessages = document.querySelector('#chatMessages');

const keywordBoosts = [
  { match: /queensland|brisbane|qld/i, boostTags: ['queensland', 'brisbane'] },
  { match: /new south wales|sydney|nsw/i, boostTags: ['nsw', 'sydney'] },
  { match: /victoria|melbourne|vic/i, boostTags: ['victoria', 'vic', 'melbourne'] },
  { match: /western australia|perth|wa/i, boostTags: ['wa', 'perth'] },
  { match: /south australia|adelaide|sa/i, boostTags: ['sa', 'adelaide'] },
  { match: /canberra|act/i, boostTags: ['act', 'canberra'] },
  { match: /coastal|beach/i, boostTags: ['coastal'] },
  { match: /family|school/i, boostTags: ['family'] },
  { match: /yield|rental|cash ?flow/i, boostTags: ['yield'] },
  { match: /infrastructure|train|transport/i, boostTags: ['infrastructure', 'train'] },
  { match: /budget|affordable|cheap|under\s*700/i, boostTags: ['under 700k', 'under 600k', 'affordable'] },
  { match: /under\s*800|under\s*900|under\s*1m|under\s*1\.0m|under\s*1000000/i, boostTags: ['under 800k', 'under 900k', 'under 1m'] }
];

function scoreSuburb(profile, prompt) {
  const normalizedPrompt = prompt.toLowerCase();
  let score = 0;

  profile.tags.forEach((tag) => {
    if (normalizedPrompt.includes(tag)) score += 4;
  });

  keywordBoosts.forEach(({ match, boostTags }) => {
    if (match.test(prompt) && boostTags.some((tag) => profile.tags.includes(tag))) {
      score += 3;
    }
  });

  if (/capital growth|growth/i.test(prompt)) score += 2;
  if (/top\s*10|ten/i.test(prompt)) score += 1;

  score += Math.max(0, 3 - Math.abs(profile.tags.length - 5));

  return score;
}

function getRecommendations(prompt) {
  return suburbProfiles
    .map((profile) => ({ ...profile, score: scoreSuburb(profile, prompt) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

function createMessage(role, html) {
  const article = document.createElement('article');
  article.className = `message ${role}`;

  const label = document.createElement('p');
  label.className = 'message-label';
  label.textContent = role === 'assistant' ? 'Suburb Scout' : 'You';

  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  bubble.innerHTML = html;

  article.append(label, bubble);
  return article;
}

function renderRecommendations(prompt, recommendations) {
  const intro = `<p>Here are 10 suburbs that best match: <strong>${prompt}</strong>.</p>`;
  const listItems = recommendations
    .map(
      (item, index) => `
        <li>
          <strong>${index + 1}. ${item.suburb}, ${item.state}</strong> <em>(${item.priceBand})</em><br />
          <span>${item.reason}</span><br />
          <span><strong>Growth drivers:</strong> ${item.drivers}</span>
        </li>`
    )
    .join('');

  const outro =
    '<p class="follow-up">These suggestions are educational only, so double-check local supply, vacancy rates, zoning, and recent sales before buying.</p>';

  return `${intro}<ol>${listItems}</ol>${outro}`;
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const prompt = userPrompt.value.trim();
  if (!prompt) return;

  chatMessages.append(createMessage('user', `<p>${prompt}</p>`));

  const recommendations = getRecommendations(prompt);
  chatMessages.append(createMessage('assistant', renderRecommendations(prompt, recommendations)));

  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatForm.reset();
  userPrompt.focus();
});
