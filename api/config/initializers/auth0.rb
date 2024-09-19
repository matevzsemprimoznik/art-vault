Rails.application.config.auth0 = {
  domain: ENV['AUTH0_DOMAIN'],
  client_id: ENV['AUTH0_CLIENT_ID'],
  client_secret: ENV['AUTH0_CLIENT_SECRET'],
  audience: ENV['AUTH0_AUDIENCE']
}