/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('user').del();
    await knex('user').insert([
      {
        id: 1,
        user_name: 'Adam Applegate',
        city: 'Toronto',
        password: "Applegate1",
        email: 'AdamApplegate@hotmail.com',
        gender: 'male',
        bio: "Hey there! I'm Adam Applegate, I bring innovation and creativity to the table. Let's redefine how we connect in this digital age!",
        age: 30,
      },
      {
        id: 2,
        user_name: "EmmaExplorer",
        city: "Toronto",
        password: "Explorer456",
        email: "EmmaExplorer@gmail.com",
        gender: "female",
        bio: "Hi, I'm Emma Explorer, a 28-year-old adventurer from Toronto. Join me in discovering the city's hidden gems and creating lasting memories!",
        age: 28
      },
      {
        id: 3,
        user_name: "JacksonJovial",
        city: "Toronto",
        password: "Jovial789",
        email: "JacksonJovial@hotmail.com",
        gender: "male",
        bio: "Hey, I'm Jackson Jovial, a 31-year-old Torontonian spreading joy and positivity. Let's connect and share laughter and good vibes!",
        age: 31
      },
      {
        id: 4,
        user_name: "SophiaSunflower",
        city: "Toronto",
        password: "Sunflower101",
        email: "SophiaSunflower@yahoo.com",
        gender: "female",
        bio: "Hola! I'm Sophia Sunflower, a 29-year-old Torontonian exploring the arts scene and cultural richness. Let's connect and create together!",
        age: 29
      },
      {
        id: 5,
        user_name: "LiamLoyal",
        city: "Toronto",
        password: "Loyal2022",
        email: "LiamLoyal@gmail.com",
        gender: "male",
        bio: "Greetings! I'm Liam Loyal, a 33-year-old Torontonian. Loyalty is my mantra; let's build lasting connections and share meaningful experiences!",
        age: 33
      },
      {
        id: 6,
        user_name: "AvaAdventurer",
        city: "Toronto",
        password: "Adventurer3030",
        email: "AvaAdventurer@hotmail.com",
        gender: "female",
        bio: "Hello! I'm Ava Adventurer, a 30-year-old Torontonian exploring new adventures, whether hiking, coding, or trying cafes. Let's embark on a friendship journey together!",
        age: 30
      },
      {
        id: 7,
        user_name: "OscarOptimist",
        city: "Winnipeg",
        password: "Optimist123",
        email: "OscarOptimist@gmail.com",
        gender: "male",
        bio: "Hey, I'm Oscar Optimist, a 27-year-old spreading positivity in Winnipeg. Let's connect and share uplifting stories and experiences!",
        age: 27
      },
      {
        id: 8,
        user_name: "IsabellaInnovator",
        city: "Winnipeg",
        password: "Innovator456",
        email: "IsabellaInnovator@yahoo.com",
        gender: "female",
        bio: "Hi, I'm Isabella Innovator, a 32-year-old from Winnipeg passionate about pushing boundaries. Let's explore the city's innovative spirit together!",
        age: 32
      },
      {
        id: 9,
        user_name: "HenryHarmony",
        city: "Winnipeg",
        password: "Harmony789",
        email: "HenryHarmony@hotmail.com",
        gender: "male",
        bio: "Greetings! I'm Henry Harmony, a 29-year-old Winnipeg resident spreading harmony and good vibes. Let's connect and create a symphony of friendship!",
        age: 29
      },
      {
        id: 10,
        user_name: "MiaMingle",
        city: "Winnipeg",
        password: "Mingle2022",
        email: "MiaMingle@gmail.com",
        gender: "female",
        bio: "Hola! I'm Mia Mingle, a 28-year-old from Winnipeg ready to explore the city's social scene. Let's connect and create vibrant memories together!",
        age: 28
      }
    ]);
  };

