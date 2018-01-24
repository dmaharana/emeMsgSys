import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const alerts = [
      { id: 11, text: 'Eathquake Alert Message', category: 'Eathquake' },
      { id: 12, text: 'EAS RWT Alert Message', category: 'EAS RWT' },
      { id: 13, text: 'Hospital Evacuation Alert Message', category: 'Hospital Evacuation' },
      { id: 14, text: 'Tsunami Warning Alert Message', category: 'Tsunami Warning' }
    ];

    return {alerts};
  }
  constructor() { }

}
