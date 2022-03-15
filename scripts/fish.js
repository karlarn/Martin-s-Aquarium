export const Fish = (fishObj) => {
	return `<article class="fish-card">
				<h3 class="fish-name">${fishObj.name}</h3>
				<ul>
					<li class="fish-details">${fishObj.species}</li>
					<li class="fish-details">Length: ${fishObj.length} inches</li>
					<li class="fish-details">Diet: ${fishObj.food.toUpperCase()}</li>
				</ul>
        	</article>`
}
