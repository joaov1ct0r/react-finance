import GenerateId from "./GenerateId";

export default class Finance {
  public readonly id: number;
  public readonly description: string;
  public readonly value: number;
  public readonly date: string;
  public readonly type: string;

  constructor(description: string, value: number, date: string) {
    this.id = new GenerateId().execute();
    this.description = description;
    this.value = value;
    this.date = date;
    this.type = this.value >= 0 ? "positive" : "negative";
  }
}
