interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'x49ajIpUrMDu7UiekSzht9bpfvA6ZaHb',
  domain: 'weichien711.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
