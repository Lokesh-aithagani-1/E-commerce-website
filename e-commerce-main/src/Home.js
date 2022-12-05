import React from 'react';
import './Home.css';
import Product from './Product';
import logo1 from './Assets/pic1.jpg';


function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src={logo1} alt="logo"/>
              

            <div className='home__row'>
              <Product 
                id='90829332'
                title='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones' 
                price={515} 
                image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.h_5pW0_HUUJX1LFbKz0vPgHaJK%26pid%3DApi&f=1'
                rating={5}
              />
              <Product
                id='90995943'
                title='Fitness Tracker with Heart Rate Monitor, Fitpolo Smart Watch 1.3 inches Color Touch Screen Step Calorie Counter Sleep Monitoring Pedometer Watches Activity Tracker'
                price={6031}
                image='https://m.media-amazon.com/images/I/61h8lcXTyeL._AC_UY327_FMwebp_QL65_.jpg'
                rating={4}
              />
              <Product
                id='90895945'
                title='Echo Dot (3rd Gen, 2018 release) - Music, audiobooks, and voice shopping hands-free with Prime + Alexa - Charcoal'
                price={4710}
                image='https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY327_FMwebp_QL65_.jpg'
                rating={5}
              />
              
              
            </div>

            <div className='home__row'>
              <Product
                  id='90397445'
                  title='SS Kashmir Willow Leather Ball Cricket Bat, Exclusive Cricket Bat for Adult Full Size with Full Protection Cover'
                  price={3780}
                  image='https://m.media-amazon.com/images/I/71f0YCwN3sL._AC_UY327_FMwebp_QL65_.jpg'
                  rating={4}
                />
              <Product
                  id='82388845'
                  title="TrainingGirl Women's Slim Fit Workout Tops Mesh Back Yoga Crop Tops Short Sleeve Athletic Gym Fitness Shirt"
                  price={1516}
                  image='https://m.media-amazon.com/images/I/71rUhLKvR8L._AC_UL480_FMwebp_QL65_.jpg'
                  rating={4}
                />
              <Product
                  id='82377835'
                  title="G Gradual Men's 7' Workout Running Shorts Quick Dry Lightweight Gym Shorts with Zip Pockets"
                  price={1176}
                  image='https://m.media-amazon.com/images/I/81nD4YmarCL._AC_UL480_QL65_.jpg'
                  rating={3}
                />
              <Product
                  id='42474845'
                  title="TOZO A1 Mini Wireless Earbuds Bluetooth 5.3 in Ear Light-Weight Headphones Built-in Microphone, IPX5 Waterproof, Black"
                  price={1326}
                  image='https://m.media-amazon.com/images/I/71PottnplPL._AC_UY327_FMwebp_QL65_.jpg'
                  rating={3}
                />
              
            </div>

            <div className='home__row'>
              <Product
                id='59403483'
                title='OnePlus Nord N200 | 5G Unlocked Android Smartphone U.S Version | 6.49" Full HD+LCD Screen | Large 5000mAh Battery | 64GB Storage | Triple Camera,Blue Quantum'
                price={27999}
                image='https://m.media-amazon.com/images/I/71DCZOdq92S._AC_SX522_.jpg'
                rating={4}
                />
              <Product
                id='8554909'
                title='2019 Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Space Gray'
                price={125990}
                image='https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg'
                rating={5}
              />
              <Product
                id='73257847'
                title="Nike Men's Gymnastic Shoes"
                price={5795}
                image='https://m.media-amazon.com/images/I/41xSzlPiR-L._AC_UL480_FMwebp_QL65_.jpg'
                rating={5}
              />

            </div>

            <div className='home__row'>
              <Product
                id='22403323'
                title='BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games'
                price={2394}
                image='https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY327_FMwebp_QL65_.jpg'
                rating={4}
                />
              <Product
                id='13544959'
                title='2021 Apple 10.2-inch iPad (Wi-Fi, 64GB) - Space Gray with AppleCare+ for iPad - 9th Generation'
                price={30177}
                image='https://m.media-amazon.com/images/I/51uaFUs3WBL._AC_UY327_FMwebp_QL65_.jpg'
                rating={5}
              />
            </div>

            <div className='home__row'>
              <Product
                  id='4657487'
                  title='VIZIO 50-Inch M-Series 4K QLED HDR Smart TV w/Voice Remote, Dolby Vision HDR10+, Alexa Compatibility, M50Q7-J01, 2021 Model'
                  price={49559}
                  image='https://images-na.ssl-images-amazon.com/images/I/81R88pMeyJL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
                  rating={5}
                />
            </div>

        </div>
    </div>
    
  )
}

export default Home