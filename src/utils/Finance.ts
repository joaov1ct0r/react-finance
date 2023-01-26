import GenerateId from "./GenerateId";

export default class Finance {
  public id: number;
  public description: string;
  public value: number;
  public date: string;
  public type: string;

  constructor(description: string, value: number, date: string) {
    this.id = new GenerateId().execute();
    this.description = description;
    this.value = value;
    this.date = date;
    this.type = this.value >= 0 ? "positive" : "negative";
  }
}
