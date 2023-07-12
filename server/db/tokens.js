class TokensTable {
  constructor() {
    this._tokens = [];
  }
  getTokens() {
    return this._tokens;
  }
  findOne(nameProperty, property) {
    const candidate = this._tokens.find(
      (token) => token[nameProperty] === property
    );
    return candidate;
  }
  create(token) {
    this._tokens.push(token);
    return token;
  }
  deleteOne(token) {
    let tokenData;
    this._tokens = this._tokens.filter((write) => {
      console.log(write.refreshToken)
      console.log(token)
        if (write.refreshToken === token) {
            tokenData = write
        }
      return write.refreshToken !== token;
    });
    return tokenData
  }
}

module.exports = new TokensTable();
