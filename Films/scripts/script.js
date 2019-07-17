function AverageAge(){
	let actorsCount = 0,
		actorsAge = 0;

    const noOscar = films.filter(function(item, i, films) {
		return item.director.oscarsCount == 0;
	});

	noOscar.forEach(function(item, i, noOscar) {
	    const actors = item.actors;
	    actorsCount += actors.length;
	    actors.forEach(function(actor, i, actors) {
	    	actorsAge += parseFloat(actor.age);
	    });
	});

	const averageAge = Math.round(actorsAge / actorsCount);
	console.log('Средний возраст актёров, снимавшихся в фильмах режисёров, у которых нет Оскара: ' + averageAge);
}

function isHanks(actor) {
	return actor.name == 'Tom Hanks';
}

function ActorsWithHanks(){
	let actorsWithHanks = [];

	const filmsNewWithHanks = films.filter(function(item, i, films) {
		return (item.creationYear > 1995 && (item.actors.some(isHanks)));
	});

	filmsNewWithHanks.forEach(function(item, i, filmsNewWithHanks) {
		const actors = item.actors;
		actors.forEach(function(actor,i,actors) {
			if(!isHanks(actor)){
				actorsWithHanks.push(actor.name);
			}
		});
	});

	const str = actorsWithHanks.join(', ');
	console.log('Актёры, игравшией с Томом Хенксом в фильмах, вышедших после 1995 года: ' + str);
}

function TotalBudget(){
	const filmsYoungDirectorWithoutHanks = films.filter(function(item, i, films) {
		return (item.director.age < 70 && (!item.actors.some(isHanks)));
	});

	const totalBudget = filmsYoungDirectorWithoutHanks.reduce(function(sum, current) {
		return sum + parseInt(current.budget.replace(/[^0-9]/g,""));
	}, 0);

	console.log('Общий бюджет фильмов, с режиссерами младше 70 лет и в которых не играл Том Хэнкс: $'  + totalBudget);
}

AverageAge();
ActorsWithHanks();
TotalBudget();