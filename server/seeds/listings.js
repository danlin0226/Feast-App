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
      cuisine: "Thai",
      meal: "Dinner",
      geo: { lat: 49.283764, lng: -122.793205 },
    },
    {
      id: "687f9a00-a7d7-4ad7-bfc2-7d8fc0da24fa",
      user_id: "Iw8GyJsbyYO37Zty8lSitX8XWup2",
      name: "Cheap Eats",
      image:
        "https://i.postimg.cc/hv89Mghb/niclas-illg-Y9p-Ff-A4-Z3g0-unsplash.jpg",
      location: "Sushi California",
      time: "Friday, Dec 30, 6:00pm",
      about:
        "Casual Come join for a casual brunch at Cafe Medina! If people are free afterwards, we can shop around Robson or check out a cafe around downown after. I’ll be closing the RSVPs a week prior to the event so I can make reservations!",
      spots: 8,
      address: "85 Wood Street, Toronto, Ontario",
      cuisine: "American",
      meal: "Dinner",
      geo: { lat: 49.283764, lng: -122.793205 },
    },
    {
      id: "86704449-f3cb-41ff-bc1e-d4a7e0bdc56a",
      user_id: "Iw8GyJsbyYO37Zty8lSitX8XWup2",
      name: "Casual Lunch",
      image: "https://i.postimg.cc/RV7TPffk/lily-banse-YHSwy6uqvk-unsplash.jpg",
      location: "Little Saigon",
      time: "Sunday, Jan 16, 5:00pm",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      spots: 4,
      address: "124 Toronto Drive, Toronto, Ontario",
      cuisine: "Japanese",
      meal: "Appies",
      geo: { lat: 49.283764, lng: -122.793205 },
    },
    {
      id: "a238b5a2-1b1d-4273-89cf-0afc0bf5a511",
      user_id: "Iw8GyJsbyYO37Zty8lSitX8XWup2",
      name: "Bougie Dinner",
      image:
        "https://i.postimg.cc/FH6Jy1DX/madie-hamilton-Q9yr-cv-Jr30-unsplash.jpg",
      location: "Gotham Steakhouse",
      time: "Thursday, Dec 16, 8:00pm",
      about:
        "Casual Come join for a casual brunch at Cafe Medina! If people are free afterwards, we can shop around Robson or check out a cafe around downown after. I’ll be closing the RSVPs a week prior to the event so I can make reservations!",
      spots: 2,
      address: "1602-60 Bremner Blvd, Toronto, Ontario",
      cuisine: "Canadian",
      meal: "Dinner",
      geo: { lat: 49.283764, lng: -122.793205 },
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
        "Casual Come join for a casual brunch at Cafe Medina! If people are free afterwards, we can shop around Robson or check out a cafe around downown after. I’ll be closing the RSVPs a week prior to the event so I can make reservations!",
      spots: 4,
      address: "123 Kumo Drive, Coquitlam, British Columbia",
      cuisine: "Canadian",
      meal: "Brunch",
      geo: { lat: 49.283764, lng: -122.793205 },
    },
  ]);
};
