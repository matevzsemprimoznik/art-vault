# ArtVault

ArtVault is an innovative web application dedicated to the dynamic world of art auctions. This platform bridges the gap between artists, collectors, and art enthusiasts, making it easier than ever to buy and sell unique pieces of art.

### Key Features

- Personalized Profiles: Users can create profiles to store and manage their artwork collections. This feature allows artists and collectors to showcase their favorite pieces in a visually appealing way.
- Easy Uploads: Add new artworks effortlessly with our user-friendly interface, ensuring that your collection is always up-to-date and easily accessible.
- Simple Setup: With just a few clicks, users can set up and publish their auctions. Specify details like start and end dates, starting prices, and descriptions to attract potential bidders.
- Customizable Listings: Tailor your auction listings to highlight the unique aspects of each artwork, ensuring that they stand out to bidders.
- Real-Time Bidding: Participate in live auctions and place bids on artworks that catch your eye. Our platform ensures a smooth and engaging bidding experience.
- Bid Notifications: Stay updated with real-time notifications about your bids and auction activity, so you never miss an opportunity.

### Setup

Requirements:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

Steps:

1. Clone this repository: `git clone`
2. Navigate to the client directory: `cd ArtVault/client`
3. Add the following environment variables to the `.env` file:
```bash
# Client Environment Variables
AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
URL=http://localhost:4200
API_URL=http://localhost:3000
```
4. Navigate to the server directory: `cd ArtVault/api`
5. Add the following environment variables to the `.env` file:
```bash
# API Environment Variables
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
AUTH0_CLIENT_SECRET=YOUR_AUTH0_CLIENT_SECRET
AUTH0_AUDIENCE=YOUR_AUTH0_AUDIENCE
RAILS_ENV=production
SECRET_KEY_BASE=YOUR_SECRET_KEY_BASE
POSTGRES_USER=YOUR_POSTGRES_USER
POSTGRES_PASSWORD=YOUR_POSTGRES_PASSWORD
```
6. Navigate to the project root directory: `cd ..`
7. Run the following command to start the application: `docker-compose up`
8. Access Web Application at: `http://localhost:4200` and API at: `http://localhost:3000`




