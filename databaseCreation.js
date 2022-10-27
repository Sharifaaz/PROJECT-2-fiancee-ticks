//  2 hairstylist 3 makeupartist 2 giveaways 2 spas 1 floweshop 1 jewls 2 Gowns Designers


// creation of services
const db = require('./models')
// create new pet
db.service.bulkCreate([
    {       
            // DataTypes.STRING
            name: 'Pace E Luce',
            // DataTypes.STRING
            category: 'Hairstylist',
            // DataTypes.TEXT
            description:  'Pace e Luce is a full- service beauty salon dedicated to consistently providing high customer satisfaction by rendering excellent service, quality products and furnishing an enjoyable atmosphere at an acceptable phone / value relationship. We also maintain a friendly, fair and creative work environment.',
            //  DataTypes.INTEGER,
            phone: '17533600',
            // DataTypes.STRING
            location: 'Golden Tulip Hotel , Diplomatic Area',
            img: "https://www.arabiaweddings.com/sites/default/files/companies/images/2017/07/pace_e_luce.jpg"
},
{
    // DataTypes.STRING
    name: 'Ricci E Capricci',
    // DataTypes.STRING
    category: 'Hairstylist',
    // DataTypes.TEXT
    description:  'A well known hairstylist in Bahrain specialized in the fashioning and treatment of hair.',
    //  DataTypes.INTEGER,
    phone:'77900333',
    // DataTypes.STRING
    location: 'Manama, Bahrain',
    img: "https://www.ricciecapriccioffida.it/images/jd_salon/bottom-logo.png"
},
    
{
    // DataTypes.STRING
    name: 'Ebtesam Kamal',
    // DataTypes.STRING
    category: 'Makeup Artists',
    // DataTypes.TEXT
    description:  'A well known makeup artist in Bahrain in which is specialized in glam bridal makeup.',
    //  DataTypes.INTEGER,
    phone: '39840050',
    // DataTypes.STRING
    location: 'Muharraq, Bahrain',
    img: "https://hips.hearstapps.com/hmg-prod/images/hbz-bride-beauty-10-1635189849.png"
},

{
    // DataTypes.STRING
    name: 'Fatema Jameel',
    // DataTypes.STRING
    category: 'Makeup Artists',
    // DataTypes.TEXT
    description:  'A well known makeup artist in Bahrain in which is specialized in glam bridal makeup.',
    //  DataTypes.INTEGER,
    phone: '39299005',
    // DataTypes.STRING
    location: 'Manama, Bahrain',
    img: "https://assets.vogue.com/photos/6138ce59cddb647267cb5958/master/w_800%2Cc_limit/11.jpg"
},
{
    // DataTypes.STRING
    name: 'Waad Alturki',
    // DataTypes.STRING
    category: 'Makeup Artists',
    // DataTypes.TEXT
    description:  'A well known makeup artist in Saudi Arabia and GCC in which masters the glam bridal makeup.',
    //  DataTypes.INTEGER,
    phone: '88848884',
    // DataTypes.STRING
    location: 'Manama, Bahrain',
    img: "https://www.arabiaweddings.com/sites/default/files/uploads/2016/01/13/waad_al_turki_makeup_artist.png"
},
{
  // DataTypes.STRING
  name: 'Lalabella',
  // DataTypes.STRING
  category: 'Flowers',
  // DataTypes.TEXT
  description:  'An authentic flower shop for your wedding setpup design.',
  //  DataTypes.INTEGER,
  phone: '39299005',
  // DataTypes.STRING
  location: 'Manama, Bahrain',
  img: "https://cdn.shopify.com/s/files/1/0088/1737/7342/products/IMG_2639_1024x1024.jpg?v=1628669586"   
},

{
    // DataTypes.STRING
    name: 'Lalabella',
    // DataTypes.STRING
    category: 'Wedding Giveaways',
    // DataTypes.TEXT
    description:'A delish givaways for your wedding, from the famous Lalabella flower and cafe shop.',
    //  DataTypes.INTEGER,
    phone: '39299005',
    // DataTypes.STRING
    location: 'Muharraq, Bahrain',
    img: "https://images.deliveryhero.io/image/talabat/Menuitems/AAF6DBDC-E5A3-4362-A_637253134322391874.jpeg"   
  },
  
  {
    // DataTypes.STRING
    name: 'Ivy',
    // DataTypes.STRING
    category: 'Wedding Giveaways',
    // DataTypes.TEXT
    description:  'IVY is a great option for your wedding giveaways.',
    //  DataTypes.INTEGER,
    phone: '39299005',
    // DataTypes.STRING
    location: 'Manama, Bahrain',
    img: "https://www.ivybahrain.com/image/cache/catalog/Graduation%20Collection/Graduatuion%2028%20Giveaways-800x800.jpg"   
  },
  {
    // DataTypes.STRING
    name: 'Wyndham Grand',
    // DataTypes.STRING
    category: 'Hotels and Spas',
    // DataTypes.TEXT
    description:  'Find a sauna, steam room, pool and hammam in the hotel spa. French skincare guru Thalgo is behind the skincare products that are used in massages',
    //  DataTypes.INTEGER,
    phone: '17116116',
    // DataTypes.STRING
    location: 'Manama, Bahrain Bay',
    img: "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2021/12/header-e1639393363125.jpg"   
  },
  {
    // DataTypes.STRING
    name:'The Domain Hotel and Spa',
    // DataTypes.STRING
    category: 'Hotels and Spas',
    // DataTypes.TEXT
    description:  'Ensuites with rain showers and Molton Brown amenities, the award-winning Vie Urban Wellness Spa in Bahrain comes with a Himalayan Salt Stone Sauna to revitalise you.',
    //  DataTypes.INTEGER,
    phone: '16000000',
    // DataTypes.STRING
    location: 'Manama, Bahrain Bay',
    img:"https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/12/the-domain-hotel-and-spa.jpg"   
  },
  
  {
    // DataTypes.STRING
    name: 'Asia Jewllers',
    // DataTypes.STRING
    category: 'Jewllries',
    // DataTypes.TEXT
    description:'Asia Jewellers is a Bahrain-based luxury jewellery retailer with a truly individual personality and a commitment to enticing customers with some of the worlds most prestigious watch and jewellery houses.',
    //  DataTypes.INTEGER,
    phone: '39299005',
    // DataTypes.STRING
    location: 'Moda Mall, Manama',
    img: "https://www1.pictures.stylebistro.com/gi/Natalie+Portman+Long+Hairstyles+Side+Sweep+DJ9TEpbYH3ml.jpg"   
  },
  {
    // DataTypes.STRING
    name: 'Seba Fashion Center',
    // DataTypes.STRING
    category: 'Bridal Gowns Designers',
    // DataTypes.TEXT
    description: 'Fashion Designer specialized on bridal and evening gowns.',
    //  DataTypes.INTEGER,
    phone: '33833480',
    // DataTypes.STRING
    location: 'Moda Mall, Manama',
    img: "https://assets.vogue.com/photos/6138ce6e55eee27f20c3a476/master/w_800%2Cc_limit/22-2.jpg"   
  },
  {
    // DataTypes.STRING
    name: 'The White Connection',
    // DataTypes.STRING
    category: 'Bridal Gowns Designers',
    // DataTypes.TEXT
   
    description: 'Fashion Designer specialized on bridal and evening gowns',
    //  DataTypes.INTEGER,
    phone: '37007337',
    // DataTypes.STRING
    location: 'Manama, Bahrain',
    img: "https://assets.vogue.com/photos/6138ce8157b59f6db193b65c/master/w_800%2Cc_limit/33.jpg"   
  }
]).then(() => console.log('success!'))


