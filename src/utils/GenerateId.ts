export default class GenerateId {
  execute() {
    return Number(Math.random().toString(26).substring(2, 9));
  }
}
