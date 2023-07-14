const jwt = require("jsonwebtoken");
const tokensTable = require("../db/tokens");

class TokenService {
  generateTokens(payload) {
    // payload - данные, которые мы будем прятать в токен
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "15m",
    }); // 15m - время жизни токена
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }
  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }
  async saveToken(userId, refreshToken) {
    const tokenData = tokensTable.findOne("user", userId); // сначала по userId найдем такой токен в таблице tokens
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      // перезаписываем refresh token
      return;
    }
    const token = tokensTable.create({ user: userId, refreshToken }); // если пользователь логинится первый раз
    return token;
    //
  }
  async removeToken(refreshToken) {
    const tokenData = tokensTable.deleteOne(refreshToken);
    return tokenData;
  }
  async findToken(refreshToken) {
    const tokenData = await tokensTable.findOne("refreshToken", refreshToken);
    return tokenData;
  }
}

module.exports = new TokenService();
