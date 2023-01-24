export default class GenerateId {
  execute() {
    return Math.random().toString(26).substring(2, 9);
  }
}
