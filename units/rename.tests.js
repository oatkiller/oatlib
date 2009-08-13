test({
	name: 'rename',
	'works': function () {
		var key_map = {
			Name: 'name',
			Age: 'age',
			Id: 'id'
		},
		obj = {
			Name: 'robert',
			Age: 23,
			Id: 1
		};
		o.rename(obj,key_map);
		Assert.areSame('robert',obj.name);
		Assert.isUndefined(obj.Name,'Name');
		Assert.areSame(23,obj.age);
		Assert.isUndefined(obj.Age,'Age');
		Assert.areSame(1,obj.id);
		Assert.isUndefined(obj.Id,'Id');
	},
	'works on deep objs': function () {
		var key_map = {
			'Name': 'name',
			'Favorite': 'favorite',
			'Things': 'things'
		},
		obj = {
			Name: 'Robert',
			Things: {
				Favorite: ['peanut butter','maki','green tea']
			}
		};
		o.rename(obj,key_map);
		Assert.areSame('Robert',obj.name,'name');
		Assert.isUndefined(obj.Name,'Name');
		Assert.isNotUndefined(obj.things,'things');
		Assert.isUndefined(obj.Things,'Things');
		Assert.isNotUndefined(obj.things.favorite,'favorite');
		Assert.isUndefined(obj.things.Favorite,'Favorite');
	},
	'dont_trash_leftovers work': function () {
		var key_map = {
			'Name': 'name',
			'Favorite': 'favorite'
		},
		obj = {
			Name: 'Robert',
			Things: {
				Favorite: ['peanut butter','maki','green tea']
			}
		};
		o.rename(obj,key_map,true);
		Assert.areSame('Robert',obj.name,'name');
		Assert.isUndefined(obj.Name,'Name');
		Assert.isUndefined(obj.things,'things');
		Assert.isNotUndefined(obj.Things,'Things');
		Assert.isNotUndefined(obj.Things.favorite,'favorite');
		Assert.isUndefined(obj.Things.Favorite,'Favorite');
	},
	'works on really deep objs': function () {
		var key_map = {
			'Name': 'name',
			'Favorite': 'favorite',
			'epic': 'badass'
		},
		obj = {
			Name: 'Robert',
			Things: {
				Favorite: {
					movies: {
						action: 'Kiss of the Dragon',
						romance: 'Brokeback Mountain',
						epic: 'Hero',
						adventure: 'Crouching Tiger, Hidden Dragon',
						death_metal_band: 'Atheist'
					}
				}
			}
		};
		o.rename(obj,key_map,true);
		Assert.areSame('Robert',obj.name,'name');
		Assert.isUndefined(obj.Name,'Name');
		Assert.isUndefined(obj.things,'things');
		Assert.isNotUndefined(obj.Things,'Things');
		Assert.isNotUndefined(obj.Things.favorite,'favorite');
		Assert.isUndefined(obj.Things.Favorite,'Favorite');
		Assert.isNotUndefined(obj.Things.favorite.movies.badass);
		Assert.isUndefined(obj.Things.favorite.movies.epic);
	}
});
