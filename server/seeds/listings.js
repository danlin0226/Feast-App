/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("listings").del();
  await knex("listings").insert([
    {
      id: "3573787d-cd73-4ef1-a547-afb3bf997337",
      user_id: "Iw8GyJsbyYO37Zty8lSitX8XWup2",
      name: "Dinner",
      image:
        "https://i.postimg.cc/DZy5SSZk/max-griss-Ypf-RCe5lda0-unsplash.jpg",
      location: "Sawadsee Thai Resturant",
      time: "Friday, Dec 30, 6:00pm",
      about: "This is text.  asflkjsalfkdj asdlfkjsa f",
      spots: 6,
      address: "604 Vancouver Street, Vancouver, British Columbia",
      meal: "Dinner",
      cuisine: "Thai",
      geo: '{"lat": 49.283764, "lng": -122.793205}',
    },
    {
      id: "54f7df26-ea5f-4415-bc64-ec54bf4c0bda",
      user_id: "3ZqPMpPw6KZ0P44wbbFYJZuG0DY2",
      name: "Pizza Party",
      image: "https://upcdn.io/W142hJk/raw/demo/4mnVBK9p9S.jpg",
      location: "Marios Pizza Plus",
      time: "Thursday, Dec 15, 2022, 9:55PM",
      about:
        "Join us for a delicious brunch at our beautiful outdoor patio on Sunday, September 12th from 10:00am to 1:00pm. Our talented chef has created a mouthwatering menu featuring classic breakfast dishes such as fluffy omelets and Belgian waffles, as well as savory lunch options like avocado toast and chicken salad. Wash it all down with bottomless mimosas or a refreshing smoothie. Don't miss out on this perfect opportunity to catch up with friends and loved ones over a leisurely meal in the sunshine. RSVP now to reserve your spot at the table!",
      spots: 4,
      address: "564 North Street, Dresden",
      meal: "Dinner",
      cuisine: "Italian",
      geo: '{"lat": 42.5893824, "lng": -82.1798209}',
    },
    {
      id: "5552db63-0e5a-4f9a-bdcd-7b13d690ecaf",
      user_id: "3ZqPMpPw6KZ0P44wbbFYJZuG0DY2",
      name: "Casual Drinks",
      image: "https://upcdn.io/W142hJk/raw/demo/4mnYhv4oA3.jpg",
      location: "Bar Chef",
      time: "Thursday, Dec 15, 10:49AM",
      about: "Test ",
      spots: 3,
      address: "4370 Lorimer Road Unit 130, Whistler",
      meal: "Lunch",
      cuisine: "Filipino",
      geo: '{"lat": 50.1198493, "lng": -122.9577539}',
    },
    {
      id: "687f9a00-a7d7-4ad7-bfc2-7d8fc0da24fa",
      user_id: "3ZqPMpPw6KZ0P44wbbFYJZuG0DY2",
      name: "Cheap Eats",
      image:
        "https://i.postimg.cc/hv89Mghb/niclas-illg-Y9p-Ff-A4-Z3g0-unsplash.jpg",
      location: "Sushi California",
      time: "Friday, Dec 30, 6:00pm",
      about:
        "We arehosting a dinner event where guests can enjoy a delicious meal in a stylish and welcoming atmosphere. The restaurant's menu features a wide range of dishes, from classic steak and seafood options to vegetarian and gluten-free options. The chefs at The Keg are known for their expertly crafted dishes and attention to detail, making this dinner event a culinary experience not to be missed. Whether you're a foodie looking to try something new or a regular at The Keg, this dinner event is sure to be a treat for the senses. So come join us at The Keg for a night of great food and good company.",
      spots: 8,
      address: "85 Wood Street, Toronto, Ontario",
      meal: "Dinner",
      cuisine: "American",
      geo: '{"lat": 49.283764, "lng": -122.793205}',
    },
    {
      id: "86704449-f3cb-41ff-bc1e-d4a7e0bdc56a",
      user_id: "Iw8GyJsbyYO37Zty8lSitX8XWup2",
      name: "Casual Lunch",
      image: "https://i.postimg.cc/RV7TPffk/lily-banse-YHSwy6uqvk-unsplash.jpg",
      location: "Little Saigon",
      time: "Sunday, Jan 16, 5:00pm",
      about:
        "We arehosting a dinner event where guests can enjoy a delicious meal in a stylish and welcoming atmosphere. The restaurant's menu features a wide range of dishes, from classic steak and seafood options to vegetarian and gluten-free options. The chefs at The Keg are known for their expertly crafted dishes and attention to detail, making this dinner event a culinary experience not to be missed. Whether you're a foodie looking to try something new or a regular at The Keg, this dinner event is sure to be a treat for the senses. So come join us at The Keg for a night of great food and good company.",
      spots: 4,
      address: "124 Toronto Drive, Toronto, Ontario",
      meal: "Appies",
      cuisine: "Japanese",
      geo: '{"lat": 49.283764, "lng": -122.793205}',
    },
    {
      id: "a238b5a2-1b1d-4273-89cf-0afc0bf5a511",
      user_id: "3ZqPMpPw6KZ0P44wbbFYJZuG0DY2",
      name: "Bougie Dinner",
      image:
        "https://i.postimg.cc/FH6Jy1DX/madie-hamilton-Q9yr-cv-Jr30-unsplash.jpg",
      location: "Gotham Steakhouse",
      time: "Thursday, Dec 16, 8:00pm",
      about:
        "We arehosting a dinner event where guests can enjoy a delicious meal in a stylish and welcoming atmosphere. The restaurant's menu features a wide range of dishes, from classic steak and seafood options to vegetarian and gluten-free options. The chefs at The Keg are known for their expertly crafted dishes and attention to detail, making this dinner event a culinary experience not to be missed. Whether you're a foodie looking to try something new or a regular at The Keg, this dinner event is sure to be a treat for the senses. So come join us at The Keg for a night of great food and good company.",
      spots: 2,
      address: "1602-60 Bremner Blvd, Toronto, Ontario",
      meal: "Dinner",
      cuisine: "Canadian",
      geo: '{"lat": 49.283764, "lng": -122.793205}',
    },
    {
      id: "cc475def-2f09-47c7-9200-8df84cc849cb",
      user_id: "3ZqPMpPw6KZ0P44wbbFYJZuG0DY2",
      name: "Brunch",
      image: "https://upcdn.io/W142hJk/raw/demo/4mnVCEM73Z.jpg",
      location: "Mildred's Temple Kitchen",
      time: "Friday, Dec 23, 2022, 10:00AM",
      about:
        "Join us for a delicious brunch at our beautiful outdoor patio on Sunday, September 12th from 10:00am to 1:00pm. Our talented chef has created a mouthwatering menu featuring classic breakfast dishes such as fluffy omelets and Belgian waffles, as well as savory lunch options like avocado toast and chicken salad. Wash it all down with bottomless mimosas or a refreshing smoothie. Don't miss out on this perfect opportunity to catch up with friends and loved ones over a leisurely meal in the sunshine. RSVP now to reserve your spot at the table!",
      spots: 4,
      address: "85 Hanna Avenue #104, Toronto",
      meal: "Brunch",
      cuisine: "Canadian",
      geo: '{"lat": 43.64017399999999, "lng": -79.4200493}',
    },
    {
      id: "e270aece-e502-49ff-bb8a-029c7e4143c5",
      user_id: "Iw8GyJsbyYO37Zty8lSitX8XWup2",
      name: "Casual Brunch",
      image:
        "https://i.postimg.cc/4yGcYMwK/davey-gravy-krs-Kf-CC1l-Yw-unsplash.jpg",
      location: "Cafe Medina",
      time: "Sunday, Jan 2, 7:00pm",
      about:
        "We arehosting a dinner event where guests can enjoy a delicious meal in a stylish and welcoming atmosphere. The restaurant's menu features a wide range of dishes, from classic steak and seafood options to vegetarian and gluten-free options. The chefs at The Keg are known for their expertly crafted dishes and attention to detail, making this dinner event a culinary experience not to be missed. Whether you're a foodie looking to try something new or a regular at The Keg, this dinner event is sure to be a treat for the senses. So come join us at The Keg for a night of great food and good company.",
      spots: 4,
      address: "123 Kumo Drive, Coquitlam, British Columbia",
      meal: "Brunch",
      cuisine: "Canadian",
      geo: '{"lat": 49.283764, "lng": -122.793205}',
    },
  ]);
};
