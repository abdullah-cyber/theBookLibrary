class getID {
  static theID() {
    const id = new Date()
      .getTime()
      .toString(36)
      .concat(performance.now().toString(), Math.random().toString())
      .replace(/\./g, '');
    return id;
  }
}
export default getID;
