class Scooter {
  constructor(
    id,
    modelId,
    latCoord,
    lonCoord,
    electricityMax,
    electricityCurrent,
    added,
    modelName
  ) {
    this.id = id;
    this.model = { id: modelId, name: modelName };
    this.position = { lat: latCoord, lon: lonCoord };
    this.electricity = { max: electricityMax, current: electricityCurrent };
    this.added = added;
  }
}

module.exports = Scooter;
