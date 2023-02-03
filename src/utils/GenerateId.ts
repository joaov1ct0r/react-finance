export default class GenerateId {
  execute(): string {
    return Math.random().toString(26).substring(2, 9);
  }
}
