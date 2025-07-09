import React, { useState } from 'react'
import './Home.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallMadeIcon from '@mui/icons-material/CallMade';
import header from '../../../image/header.png';
import icon from '../../../image/Icon Container.png';
import vector from '../../../image/Vector.png';
import vector2 from '../../../image/Icon.png';
import vector3 from '../../../image/Vector (2).png';
import vector4 from '../../../image/vector-4.png';
import vector5 from '../../../image/Vector-5.png';
import vector6 from '../../../image/Icon (2).png';
import clip from '../../../image/Clip path group.png';
import collection from '../../../image/Abstract Design.png';
import image from '../../../image/Image (1).png'
import image1 from '../../../image/Image (2).png';
import capa from '../../../image/Capa 2.png';
import abstract from '../../../image/Abstract Design (1).png';
import question from '../../../image/qu.png';
import slider from '../../../image/slider.png'
import logo from '../../../image/Logo.png';
import insta from '../../../image/insta.png';
import dribbble from '../../../image/dribble.png';
import twitter from '../../../image/twitter.png';
import be from '../../../image/be.png';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextField from '@mui/material/TextField';


const Homedata = [
    {
        "name": "Sarah Thompson",
        "location": "New York, USA",
        "rating": 5,
        "testimonial": "StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
        "avatar": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        "name": "Rajesh Patel",
        "location": "Mumbai, India",
        "rating": 5,
        "testimonial": "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
        "avatar": "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        "name": "Emily Walker",
        "location": "London, UK",
        "rating": 2,
        "testimonial": "Adorable and comfortable! My daughter loves her new outfit. Thank you, StyleLoom, for dressing our little fashionista.",
        "avatar": "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        "name": "Alejandro Martinez",
        "location": "Barcelona, Spain",
        "rating": 5,
        "testimonial": "Impressed by the quality and style. These shoes turned heads at every event. StyleLoom, you've gained a loyal customer!",
        "avatar": "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        "name": "Priya Sharma",
        "location": "Delhi, India",
        "rating": 2.5,
        "testimonial": "Perfect fit and exceptional quality. These jeans have become my go-to for casual and chic outings.",
        "avatar": "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        "name": "Maria Rodriguez",
        "location": "Mexico City, Mexico",
        "rating": 5,
        "testimonial": "Stylish sneakers that don’t compromise on comfort. StyleLoom knows how to balance fashion and functionality.",
        "avatar": "https://randomuser.me/api/portraits/women/6.jpg"
    }
]

const Question = [
    {
        "question": "How can I place an order on StyleLoom?",
        "answer": "Ordering is easy! Simply browse our website, add items to your cart, and proceed to <br> checkout. Follow the prompts to enter your details and complete your purchase."
    },
    {
        "question": "Can I modify or cancel my order after placing it?",
        "answer": "Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase."
    },
    {
        "question": "What payment methods do you accept?",
        "answer": "We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout."
    },
    {
        "question": "How do I initiate a return?",
        "answer": "Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process."
    },
    {
        "question": "How can I track my order?",
        "answer": "Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website."
    },
    {
        "question": "Do you offer exchanges for products?",
        "answer": "At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order."
    }
]



export default function Home() {
    const [value, setValue] = React.useState(question[0].rating);

    const [data, setData] = useState(Homedata);
    // console.log(data);
    const [questionData, setQuestionData] = useState(Question);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };


    return (

        <div className='container'>
            <nav className='navbar' >
                <div>
                    <ul className="nav-list">
                        <li className="home-list">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="product-list">
                            <NavLink to="/product" className="nav-link">Product</NavLink>
                        </li>
                        <li className="list-data">
                            <NavLink to="/styleloom" className="nav-link">Stly.loom</NavLink>
                        </li>
                        <li className="cart-list">
                            <NavLink to="/cart" className="nav-link">
                                <ShoppingCartIcon />
                            </NavLink>
                        </li>
                        <li className="contact-list">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>

            <header>
                <section className='section'>
                    <div className='section-content'>
                        <div className='section-img'>
                            <img src={header} alt='section-img' />
                        </div>
                        <div className='section-btn'>
                            <botton className='btn'>shop now <span className='span-arrow'><CallMadeIcon /></span></botton>
                        </div>

                        <div className='section-text'>
                            <div className='all'>

                                <div className='all-text'>
                                    <ul>

                                        <NavLink to="/" className="nav-link">All</NavLink>
                                        <NavLink to="/" className="nav-link">Means</NavLink>
                                        <NavLink to="/" className="nav-link">Womans</NavLink>
                                        <NavLink to="/" className="nav-link">Kids</NavLink>
                                    </ul>

                                    <div className='heading-one'>
                                        <h1>Elevate Your Style with<br></br> <span className='heading-span'>StyleLoom</span></h1>
                                    </div>

                                    <dev className="heading-p">
                                        <p>Explore a world of fashion at StyleLoom, where trends meet affordability.<br></br>
                                            <span className='pera-span'>Immerse yourself in the latest styles and seize exclusive promotions.</span></p>
                                    </dev>
                                </div>
                            </div>


                            <div className='rate'>
                                <div className='rate-text'>
                                    <div className='rate-box'>
                                        <h6>1,500 +</h6>

                                        <p>Fashion Products</p>
                                    </div>

                                    <div className='rate-box'>
                                        <h6>50 +</h6>

                                        <p className='new-pera'>New arrivals every month.</p>
                                    </div>

                                </div>

                                <div className='rate-text'>
                                    <div className='rate-box-one'>
                                        <h6>50 +</h6>

                                        <p className='new-pera'>New arrivals every </p>
                                    </div>

                                    <div className='rate-box-two'>
                                        <h6>50 +</h6>

                                        <p className='new-pera'>New arrivals every month.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id='crafting'>
                    <div className='crafting-data'>
                        <h6>
                            Crafting Trends, Inspiring Confidence
                        </h6>

                        <p>
                            Explore a world of fashion at StyleLoom, where trends meet affordability.
                        </p>
                    </div>

                    <div className='crafting-box'>
                        <div className='crafting-box-one'>
                            <div className='carat-image'>
                                <div className='crafting-img'>
                                    <img src={icon} alt='crafting-img' />
                                </div>
                                <div className='vector-img'>
                                    <img src={vector} />
                                </div>

                                <div className='img-data'>
                                    <h6>Passionate Craftsmanship</h6>

                                    <p>Every garment at StyleLoom is crafted with <br></br>passion, reflecting our commitment to quality and<br></br> innovation.</p>
                                </div>
                            </div>
                        </div>

                        <div className='crafting-box-one'>
                            <div className='carat-image'>
                                <div className='crafting-img'>
                                    <img src={icon} alt='crafting-img' />
                                </div>
                                <div className='vector-img'>
                                    <img src={vector2} />
                                </div>

                                <div className='img-data'>
                                    <h6>Passionate Craftsmanship</h6>

                                    <p>Every garment at StyleLoom is crafted with <br></br>passion, reflecting our commitment to quality and<br></br> innovation.</p>
                                </div>
                            </div>
                        </div>

                        <div className='crafting-box-one'>
                            <div className='carat-image'>
                                <div className='crafting-img'>
                                    <img src={icon} alt='crafting-img' />
                                </div>
                                <div className='vector-img'>
                                    <img src={vector3} />
                                </div>

                                <div className='img-data'>
                                    <h6>Passionate Craftsmanship</h6>

                                    <p>Every garment at StyleLoom is crafted with <br></br>passion, reflecting our commitment to quality and<br></br> innovation.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='crafting-box'>
                        <div className='crafting-box-one'>
                            <div className='carat-image'>
                                <div className='crafting-img'>
                                    <img src={icon} alt='crafting-img' />
                                </div>
                                <div className='vector-img'>
                                    <img src={vector4} />
                                </div>

                                <div className='img-data'>
                                    <h6>Passionate Craftsmanship</h6>

                                    <p>Every garment at StyleLoom is crafted with <br></br>passion, reflecting our commitment to quality and<br></br> innovation.</p>
                                </div>
                            </div>
                        </div>

                        <div className='crafting-box-one'>
                            <div className='carat-image'>
                                <div className='crafting-img'>
                                    <img src={icon} alt='crafting-img' />
                                </div>
                                <div className='vector-img'>
                                    <img src={vector5} />
                                </div>

                                <div className='img-data'>
                                    <h6>Passionate Craftsmanship</h6>

                                    <p>Every garment at StyleLoom is crafted with <br></br>passion, reflecting our commitment to quality and<br></br> innovation.</p>
                                </div>
                            </div>
                        </div>

                        <div className='crafting-box-one'>
                            <div className='carat-image'>
                                <div className='crafting-img'>
                                    <img src={icon} alt='crafting-img' />
                                </div>
                                <div className='vector-img'>
                                    <img src={vector6} />
                                </div>

                                <div className='img-data'>
                                    <h6>Passionate Craftsmanship</h6>

                                    <p>Every garment at StyleLoom is crafted with <br></br>passion, reflecting our commitment to quality and<br></br> innovation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='navigeting'>
                    <div className='navigeting-data'>
                        <h6>Navigating the StyleLoom Fashion Journey.</h6>

                        <p>At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.</p>


                    </div>

                    <div className='nav-img'>
                        <img src={clip} />
                    </div>


                </section>

                <div className='nav-data'>
                    <div className='nav-box'>
                        <p>step 01</p>

                        <h6>Discover Trends</h6>

                        <span>Explore our curated collection of over 1000 styles, spanning global fashion trends.</span>
                    </div>

                    <div className='nav-box'>
                        <p>step 02</p>

                        <h6>Effortless Navigation</h6>

                        <span>Intuitive filters and categories help you find the perfect pieces tailored to your style..</span>
                    </div>


                    <div className='nav-box'>
                        <p>step 03</p>

                        <h6>Secure Checkout</h6>

                        <span>Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase.</span>
                    </div>


                    <div className='nav-box'>
                        <p>step 04</p>

                        <h6>Unbox Happiness</h6>

                        <span>Unbox a fashion-forward experience delivered right to your door, ready to elevate your style.</span>
                    </div>

                </div>

                <section id='collection'>
                    <div className='collection-data'>
                        <h6>Elevate Your Style with Our Latest Collection</h6>

                        <p>Each piece is crafted to enhance your fashion statement.</p>

                        <div className='all-text'>
                            <ul>
                                <li className='all-li-data'>All</li>
                                <li>Means</li>
                                <li>Womans</li>
                                <li>Kids</li>
                            </ul>
                        </div>

                        <div className='collection-img'>
                            <img src={collection} />
                        </div>
                    </div>

                    <div className='collection-main-box'>
                        <div className='collection-box'>
                            <div className='coll-img'>
                                <img src={image} />
                            </div>
                            <div className='btn-group'>
                                <div className='coll-text'>
                                    <button>Womenswear</button>
                                </div>
                                <div className='coll-text-btn'>
                                    <button className='shop'>
                                        shop now <span className='span-arrow'><CallMadeIcon /></span>
                                    </button>
                                </div>                            </div>
                            <div className='coll-hea'>
                                <h5>Timeless A-line Evening Dress</h5>
                                <p>Fit . <span>Ankle-length </span> <p>Price . <span>$109.99</span></p></p>
                            </div>
                        </div>

                        <div className='collection-box'>
                            <div className='coll-img'>
                                <img src={image} />
                            </div>
                            <div className='btn-group'>
                                <div className='coll-text'>
                                    <button>Womenswear</button>
                                </div>
                                <div className='coll-text-btn'>
                                    <button className='shop'>
                                        shop now <span className='span-arrow'><CallMadeIcon /></span>
                                    </button>
                                </div>
                            </div>
                            <div className='coll-hea'>
                                <h5>Timeless A-line Evening Dress</h5>
                                <p>Fit . <span>Ankle-length </span> <p>Price . <span>$109.99</span></p></p>
                            </div>
                        </div>

                        <div className='collection-box'>
                            <div className='coll-img'>
                                <img src={image} />
                            </div>
                            <div className='btn-group'>
                                <div className='coll-text'>
                                    <button>Womenswear</button>
                                </div>
                                <div className='coll-text-btn'>
                                    <button className='shop'>
                                        shop now <span className='span-arrow'><CallMadeIcon /></span>
                                    </button>
                                </div>
                            </div>
                            <div className='coll-hea'>
                                <h5>Timeless A-line Evening Dress</h5>
                                <p>Fit . <span>Ankle-length </span> <p>Price . <span>$109.99</span></p></p>
                            </div>
                        </div>
                    </div>

                    <div className='collection-main-box'>
                        <div className='collection-box'>
                            <div className='coll-img'>
                                <img src={image} />
                            </div>
                            <div className='btn-group'>
                                <div className='coll-text'>
                                    <button>Womenswear</button>
                                </div>
                                <div className='coll-text-btn'>
                                    <button className='shop'>
                                        shop now <span className='span-arrow'><CallMadeIcon /></span>
                                    </button>
                                </div>
                            </div>
                            <div className='coll-hea'>
                                <h5>Timeless A-line Evening Dress</h5>
                                <p>Fit . <span>Ankle-length </span> <p>Price . <span>$109.99</span></p></p>
                            </div>
                        </div>

                        <div className='collection-box'>
                            <div className='coll-img'>
                                <img src={image} />
                            </div>
                            <div className='btn-group'>
                                <div className='coll-text'>
                                    <button>Womenswear</button>
                                </div>
                                <div className='coll-text-btn'>
                                    <button className='shop'>
                                        shop now <span className='span-arrow'><CallMadeIcon /></span>
                                    </button>
                                </div>
                            </div>
                            <div className='coll-hea'>
                                <h5>Timeless A-line Evening Dress</h5>
                                <p>Fit . <span>Ankle-length </span> <p>Price . <span>$109.99</span></p></p>
                            </div>
                        </div>

                        <div className='collection-box'>
                            <div className='coll-img'>
                                <img src={image} />
                            </div>
                            <div className='btn-group'>
                                <div className='coll-text'>
                                    <button>Womenswear</button>
                                </div>
                                <div className='coll-text-btn'>
                                    <button className='shop'>
                                        shop now <span className='span-arrow'><CallMadeIcon /></span>
                                    </button>
                                </div>
                            </div>
                            <div className='coll-hea'>
                                <h5>Timeless A-line Evening Dress</h5>
                                <p>Fit . <span>Ankle-length </span> <p>Price . <span>$109.99</span></p></p>
                            </div>
                        </div>
                    </div>

                </section>

                <section id='styleloom'>
                    <div className='crafting-data'>
                        <h6>
                            Crafting Trends, Inspiring Confidence
                        </h6>

                        <p>
                            Explore a world of fashion at StyleLoom, where trends meet affordability.
                        </p>

                        <div className='abstract-img'>
                            <img src={abstract} />
                        </div>
                    </div>

                    <div className='map-box'>
                        {
                            data.map((item) => {
                                return (
                                    <>
                                        <div className='crafting-box'>
                                            <div className='crafting-box-one'>
                                                <div className='carat-image'>
                                                    <div className='crafting-img-one'>
                                                        <div className='crafting-img'>
                                                            <img src={item.avatar} alt='crafting-img' />
                                                        </div>
                                                        <div className='text-craft'>
                                                            <h4>{item.name}</h4>
                                                            <p>{item.location}</p>
                                                        </div>
                                                    </div>
                                                    <div className='vector-img'>
                                                        <img src={capa} />
                                                    </div>

                                                    <div className='img-data'>
                                                        <div className='rating-box'>
                                                            <Box sx={{ '& > legend': { mt: value } }}>
                                                                <Rating
                                                                    name="simple-controlled"
                                                                    value={item.rating}
                                                                    defaultValue={2.5} precision={0.5}
                                                                    onChange={(event, newValue) => {
                                                                        setValue(item.rating);
                                                                    }}
                                                                />
                                                            </Box>

                                                        </div>

                                                        <p>StyleLoom exceeded my expectations. The gown's <br></br>quality and design made me feel like a queen. Fast<br></br> shipping, too!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                </section>

                <section id='question'>

                    <div className='navigeting-data'>
                        <h6>Navigating the StyleLoom Fashion Journey.</h6>

                        <p>At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.</p>


                        <div className='all-text'>
                            <ul>
                                <NavLink to="/" className="nav-link">All</NavLink>
                                <NavLink to="/" className="nav-link">Ordering</NavLink>
                                <NavLink to="/" className="nav-link">Shipping</NavLink>
                                <NavLink to="/" className="nav-link">Returns</NavLink>
                                <NavLink to="/" className="nav-link">Support</NavLink>
                            </ul>
                        </div>

                    </div>

                    <div className='nav-img'>
                        <img src={question} />
                    </div>

                </section>
                <div className='question-box'>
                    {
                        questionData.map((item) => {
                            return (
                                <div className='question-data'>
                                    <div className='question-img'>
                                        <h6>{item.question}</h6>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <section id='slider'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='slider-box'>
                                <h6>T-Shirt</h6>
                                <img src={slider} alt="T-Shirt" />
                            </div>
                            <div className='slider-box'>
                                <h6>T-Shirt</h6>
                                <img src={slider} alt="T-Shirt" />
                            </div>
                            <div className='slider-box'>
                                <h6>T-Shirt</h6>
                                <img src={slider} alt="T-Shirt" />
                            </div>
                            <div className='slider-box'>
                                <h6>T-Shirt</h6>
                                <img src={slider} alt="T-Shirt" />
                            </div>
                            <div className='slider-box'>
                                <h6>T-Shirt</h6>
                                <img src={slider} alt="T-Shirt" />
                            </div>
                            <div className='slider-box'>
                                <h6>T-Shirt</h6>
                                <img src={slider} alt="T-Shirt" />
                            </div>
                        </Slider>
                    </div>
                </section>

            </header>

            <footer>
                <section id='footer'>
                    <div className='footer-data'>
                        <div className='footer-logo'>
                            <img src={logo} alt='footer-logo' />

                        </div>
                        <div>
                            <div className='footer-info'>
                                <div className='icon-footer'>
                                    <NavLink to="/" className="nav-link"><img src={insta} /></NavLink>
                                </div>

                                <div className='icon-footer'>
                                    <NavLink to="/" className="nav-link"><img src={dribbble} /></NavLink>
                                </div>

                                <div className='icon-footer'>
                                    <NavLink to="/" className="nav-link"><img src={twitter} /></NavLink>
                                </div>

                                <div className='icon-footer'>
                                    <NavLink to="/" className="nav-link"><img src={be} /></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id='footer-data'>
                    <div className='footer-data-one'>
                        <div className='footer-home'>
                            <p>Home</p>
                            <div>
                                <ul>
                                    <li>why Us</li>
                                    <li>About Us</li>
                                    <li>Testimonials</li>
                                    <li>FAQ’s</li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer-product'>
                            <p>Product</p>
                            <div>
                                <ul>
                                    <li>Menswear</li>
                                    <li>Womenswear</li>
                                    <li>Kidswear</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p>Subscribe to Newsletter</p>
                            <div>
                                <TextField className='text-field'placeholder='Your email' />
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}
