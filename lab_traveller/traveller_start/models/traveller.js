class Traveller {
  constructor(journeys) {
    this.journeys = journeys;
  }

  getJourneyStartLocations() {
    return this.journeys.map((journey)=> journey.startLocation)
  }

  getJourneyEndLocations() {
    return this.journeys.map((journey)=> journey.endLocation)
  }

  getJourneysByTransport(transport) {
    return this.journeys.filter((journey)=>journey.transport == transport)
  }

  getJourneysByMinDistance(minDistance) {

  }

  calculateTotalDistanceTravelled() {

  }

  getUniqueModesOfTransport() {

  }
}


module.exports = Traveller;
