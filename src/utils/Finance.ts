import GenerateId from "./GenerateId";

export default class Finance {
  id: string;
  description: string;
  value: number;
  date: string;
  type: string;

  constructor(description: string, value: number, date: string) {
    this.id = new GenerateId().execute();
    this.description = description;
    this.value = value;
    this.date = date;
    this.type = this.value >= 0 ? "positive" : "negative";
  }
}
