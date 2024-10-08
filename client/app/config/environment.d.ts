/**
 * Type declarations for
 *    import config from 'client/config/environment'
 */
declare const config: {
  environment: string;
  modulePrefix: string;
  podModulePrefix: string;
  locationType: 'history' | 'hash' | 'none';
  rootURL: string;
  APP: Record<string, unknown>;
  auth0: Record<string, unknown>;
};

export default config;
