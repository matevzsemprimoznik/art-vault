# Clear existing data (optional)
Item.destroy_all
Auction.destroy_all
AuctionItem.destroy_all

# Create Items
items_data = [
  {
    id: 1,
    name: "Reflections of Serenity",
    description: "Set in a quiet, secluded part of nature, this artwork transports the viewer to a tranquil evening by the lake, where time seems to stand still. A small, charming cottage, with its distinct chimney and triangular roof, sits comfortably against a backdrop of soft, rolling hills and dense forest. The warm, amber light from inside the house illuminates the scene, casting reflections onto the mirror-like surface of the water. Yet, what truly captivates is the enormous whale, floating within the home, as though it had made the cabin its sanctuary. The whale's form, both gentle and majestic, contrasts with the stillness of the surroundings. The scene feels like a moment suspended in time, a portal to another reality where the impossible is made possible. This juxtaposition of calm and the fantastical invites viewers to ponder the boundaries between dreams and reality, while the serene color palette creates a sense of peace and introspection. A profound meditation on solitude, tranquility, and the unexpected beauty that lies just beneath the surface of the ordinary.",
    created_at: Time.now,
    updated_at: Time.now,
    image: "https://static.vecteezy.com/system/resources/previews/029/622/237/large_2x/serenity-unveiled-enchanting-forest-lakeside-reflections-ai-generated-photo.jpg",
    user_id: "auth0|66ec29a61f4405eec63986b0"
  },
  {
    id: 2,
    name: "Whale in the Twilight",
    description: "This surreal masterpiece captures the essence of the extraordinary blending into the everyday. A cozy, lakeside cabin with large glass windows sits peacefully by the water’s edge, bathed in the warm glow of an inviting interior. The evening sky, transitioning from soft pinks to deep blues, creates a perfect backdrop for the stillness of the scene. What makes this artwork truly unique is the presence of a massive whale, its silhouette looming through the window as though it inhabits the home itself. The contrast between the solid, immovable structure of the house and the fluid, free nature of the whale evokes a sense of mystery and wonder. Is the whale a metaphor for something deeper, or merely a fantastical visitor from a dream world? The reflections in the water below mirror this intriguing duality, drawing viewers into a meditative exploration of the surreal, where nature, fantasy, and architecture collide in perfect harmony.",
    created_at: Time.now,
    updated_at: Time.now,
    image: "https://blog.tubikstudio.com/wp-content/uploads/2019/12/whale-at-home-illustration.png",
    user_id: "auth0|66ec29a61f4405eec63986b0"
  },
  {
    id: 3,
    name: "Dreaming of the Deep",
    description: "In this evocative artwork, the viewer is presented with a magical fusion of land and sea, dream and reality. A solitary house stands on the shores of a placid lake, its windows glowing warmly against the cool tones of the early evening. The house itself is a symbol of comfort and security, yet within its walls lies something unexpected—a massive whale, seemingly suspended in mid-air as it moves through the rooms with graceful ease. The surreal image suggests a connection between the natural world and the dream world, as if the boundaries between the two have dissolved. The whale, a creature of the deep sea, typically confined to the oceans, here finds itself at home within a human structure. The juxtaposition of the house, an emblem of human domesticity, and the whale, a symbol of vastness and freedom, evokes a sense of quiet wonder. The reflection of the house and the whale in the still waters below further blurs the line between what is real and what is imagined, inviting the viewer to dive deep into the realm of the subconscious, where the most profound connections are often the most unexpected.",
    created_at: Time.now,
    updated_at: Time.now,
    image: "https://images.nightcafe.studio/jobs/hwEwBxPuF2MddbvO816U/hwEwBxPuF2MddbvO816U--1--0rg4e_4x.jpg?tr=w-1600,c-at_max",
    user_id: "auth0|66ec29a61f4405eec63986b0"
  },
  {
    id: 4,
    name: "Coastal Dreamscape",
    description: "In this enchanting artwork, a picturesque scene unfolds along a tranquil coastline, where charming houses sit gracefully against the backdrop of a vast, shimmering sea. Each house, with its unique architectural style, is adorned with vibrant colors, creating a stunning contrast against the soft blues and greens of the ocean. The gentle waves lap rhythmically at the shore, their rhythmic dance mirroring the peaceful ambiance of the setting. As the sun begins to set, the sky transforms into a breathtaking palette of warm oranges, pinks, and purples, casting a golden glow over the scene. The homes, nestled among swaying palm trees and lush greenery, evoke a sense of warmth and nostalgia, inviting the viewer to imagine lazy summer afternoons spent lounging on the beach or sipping cool drinks on a sun-soaked porch. The surrounding landscape, dotted with wildflowers and rocky outcrops, enhances the serene beauty of the coastal setting, offering a glimpse of nature’s untouched splendor. This artwork captures the essence of seaside living, celebrating the harmonious blend of human ingenuity and natural beauty.",
    created_at: Time.now,
    updated_at: Time.now,
    image: "https://blog.tubikstudio.com/wp-content/uploads/2019/12/autumn-colors-illustration.png",
    user_id: "auth0|66ec29a61f4405eec63986b0"
  },
  {
    id: 5,
    name: "Pathway to Dusk",
    description: "In this captivating artwork, a quaint village emerges under the warm embrace of a setting sun, with a winding road that elegantly weaves through the heart of the scene. The road, lined with charming cottages, leads the eye toward the horizon, where the sun dips below the distant hills, painting the sky in vibrant hues of orange, pink, and purple. Each cottage, with its rustic charm and blooming gardens, seems to glow in the golden light, inviting passersby to pause and savor the beauty of the moment.",
    created_at: Time.now,
    updated_at: Time.now,
    image: "https://img.freepik.com/premium-photo/residential-view-with-houses-road-clouds-cartoon-style-generative-ai-illustration_275897-72.jpg",
    user_id: "auth0|66ec29a61f4405eec63986b0"
  },
  {
    id: 6,
    name: "Majestic Peaks",
    description: "In this breathtaking artwork, a grand mountain range rises majestically against a canvas of endless sky, capturing the awe-inspiring beauty of nature in its purest form. Towering peaks, cloaked in a shimmering blanket of snow, stand proud and resolute, their rugged faces reflecting the soft glow of the early morning sun. As the first light breaks over the horizon, it casts a warm, golden hue across the mountains, illuminating the valleys below and revealing a tapestry of lush forests and vibrant wildflowers that thrive in the cool, crisp air.",
    created_at: Time.now,
    updated_at: Time.now,
    image: "https://img.freepik.com/premium-photo/colorful-mountain-landscape-with-mountain-background_107062-1678.jpg",
    user_id: "auth0|66ec29a61f4405eec63986b0"
  },
  {
    id: 7,
    name: "Serenity by the Lake",
    description: "In this tranquil artwork, a serene lake lies nestled at the foot of majestic mountains, creating a breathtaking panorama that speaks to the heart of nature's beauty. The lake's glassy surface mirrors the towering peaks that surround it, their rugged outlines softened by the warm glow of the setting sun. Shades of deep blue and soft green intermingle in the water, capturing the essence of a perfect, peaceful day.",
    created_at: Time.now,
    updated_at: Time.now,
    image: "https://thumbs.dreamstime.com/b/cartoon-camping-whimsical-depiction-camping-cartoon-style-cartoon-camping-fun-whimsical-depiction-camping-274531501.jpg",
    user_id: "auth0|66ec29a61f4405eec63986b0"
  }
]

items_data.each do |item_data|
  Item.create!(item_data)
end

# Create Auctions
auctions_data = [
  {
    id: 1,
    name: "Nature's Embrace",
    description: "Step into a world of tranquility with our Nature's Embrace auction, featuring two captivating artworks that celebrate the serene beauty of the great outdoors. The first piece, Serenity by the Lake, captures the calm of a pristine lake framed by majestic mountains and a cozy tent, inviting you to experience the peacefulness of a lakeside retreat. The second piece, Majestic Peaks, offers a stunning view of towering snow-capped mountains that seem to touch the sky, reminding us of the awe-inspiring power of nature.",
    start_date: Time.now,
    end_date: Time.now + 1.day,
    start_price: 100,
    created_at: Time.now,
    updated_at: Time.now,
  },
  {
    id: 2,
    name: "Surreal Reflections",
    description: "Join us for the Surreal Reflections auction, showcasing mesmerizing artworks that blur the lines between reality and imagination. Experience the enchanting scene of Reflections of Serenity, where a whale swims through a cozy lakeside cabin, and be captivated by the tranquil beauty of Whale in the Twilight, where the ocean meets the warmth of home. Each piece invites you to ponder the extraordinary connections between nature and human life.",
    start_date: Time.now,
    end_date: Time.now + 1.day,
    start_price: 150,
    created_at: Time.now,
    updated_at: Time.now,
  },
  {
    id: 3,
    name: "Whimsical Views",
    description: "Explore the charm of everyday life with our Whimsical Views auction, featuring delightful artworks that celebrate the beauty found in familiar settings. From the inviting Pathway to Dusk, with its quaint cottages bathed in sunset hues, to Coastal Dreamscape, a vibrant depiction of seaside living, this auction is a tribute to the magic of the ordinary. Each piece captures the essence of warmth and nostalgia, inviting you to cherish the simple joys of life.",
    start_date: Time.now,
    end_date: Time.now + 1.day,
    start_price: 200,
    created_at: Time.now,
    updated_at: Time.now,
  }
]

auctions_data.each do |auction_data|
  auction = Auction.create!(auction_data)

  # Create AuctionItems for the corresponding items
  case auction.id
  when 1
    auction.items << Item.find(1)
    auction.items << Item.find(6)
  when 2
    auction.items << Item.find(2)
    auction.items << Item.find(1)
  when 3
    auction.items << Item.find(4)
    auction.items << Item.find(5)
  end
end

puts "Database seeded successfully!"
