export class AppareilService {
	appareils = [
  	{
  		name: 'Machine à laver',
  		status: 'éteint'
  	},
  	{
  		name: 'Télévision',
  		status: 'allumé'
  	},
  	{
  		name: 'Frigot',
  		status: 'éteint'
  	}
  ];

  switchOnAll() {
  	for(let appareil of this.appareils) {
  		appareil.status = 'allumé'
  	}
  }

  switchOffAll() {
  	for(let appareil of this.appareils) {
  		appareil.status = 'éteint'
  	}
  }
}