import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const alerts = [
      { id: 11, text: 'Eathquake Alert Message', category: 'Eathquake' },
      { id: 12, text: 'EAS RWT Alert Message', category: 'EAS RWT' },
      { id: 13, text: 'Hospital Evacuation Alert Message', category: 'Hospital Evacuation' },
      { id: 14, text: 'Tsunami Warning Alert Message', category: 'Tsunami Warning' },
      { id: 15, text: 'Eathquake22 Alert Message', category: 'Eathquake2' },
      { id: 16, text: 'EAS RWT2 Alert Message', category: 'EAS RWT2' },
      { id: 17, text: 'Hospital Evacuation2 Alert Message', category: 'Hospital Evacuation2' },
      { id: 18, text: 'Tsunami Warning2 Alert Message', category: 'Tsunami Warning2' }
    ];

    return {alerts};
  }
  constructor() { }

}
