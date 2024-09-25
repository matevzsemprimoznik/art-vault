require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Api
  class Application < Rails::Application
    config.load_defaults 7.2

    config.autoload_lib(ignore: %w[assets tasks])

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        # Dovoli zahteve iz localhost:4200 (Ember aplikacija)
        origins 'http://localhost:4200' 

        resource '*', # Dovoli vse poti
          headers: :any, # Dovoli vse HTTP glave
          methods: [:get, :post, :put, :patch, :delete, :options, :head], # Dovoli te metode
          credentials: true # Dovoli pošiljanje piškotkov in credentialov
      end
    end

    config.api_only = true
    Dotenv::Railtie.load
  end
end
