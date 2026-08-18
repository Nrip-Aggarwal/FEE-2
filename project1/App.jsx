import heroImg from './assets/hero.png'
import './App.css'
import About from './About'
import Navbar from './Navbar'
import Counter from './Counter'

function ProductCard(props) {
  return (
    <div
      style={{
        border: "3px solid red",
        borderRadius: "15px",
        padding: "20px",
        margin: "15px",
        backgroundColor: "lightblue",
        boxShadow: "5px 5px 10px gray",
        fontFamily: "Arial",
        width: "300px"
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "10px"
        }}
      />

      <p
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          color: "darkblue"
        }}
      >
        Product Name: {props.name}
      </p>

      <p style={{ fontSize: "18px" }}>
        Description: {props.description}
      </p>

      <p style={{ fontSize: "16px", color: "black" }}>
        Specs: {props.specs}
      </p>

      <p style={{ color: "red" }}>
        Stock: 5
      </p>

      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "green"
        }}
      >
        Price: ₹{props.price}
      </p>
    </div>
  )
}

function App() {

  const productDetails = [
    {
      name: "Lenovo Legion Pro 5",
      description: "Gaming Laptop",
      specs: "RTX 4060, Ryzen 7 7745HX, 16GB RAM, 165Hz Display",
      price: 139990,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAHbV-qgwmwJGb8SxtK1qyzj2B6C3xnhxPyAz9AQDXA&s"
    },
    {
      name: "iPhone 17 Pro Max",
      description: "Smartphone",
      specs: "A19 Pro Chip, 6.9 inch Display, 256GB Storage",
      price: 179900,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJvZiD889ozZEGQRCRbMGHK8TXoClluU45o_HzTZv5Q&s"
    },
    {
      name: "Sony Headphones",
      description: "Wireless Headphones",
      specs: "WH-1000XM5, Active Noise Cancellation, 30hr Battery",
      price: 29990,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHZyOM79knk6NZAQLSAeZI1m8iPZ3ACNs8RtVZ1KD1w&s=10"
    },
    {
      name: "Asus TUF F16",
      description: "Gaming Laptop",
      specs: "RTX 4070, i7-14650HX, 16GB RAM, 165Hz Display",
      price: 134990,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqz_IyBOwkyHV3-5OIOXItl85aAI1UlOMezsgpN_C8QA&s=10"
    },
    {
      name: "Sony Camera",
      description: "Mirrorless Camera",
      specs: "Alpha 7 IV, 33MP Full Frame, 4K 60fps Video",
      price: 219990,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTyfqZkbkAatDEISTpZFWpMPr9MusCfEFvyWt2mkNxg&s=10"
    },
    {
      name: "MSI OLED Monitor",
      description: "Gaming Monitor",
      specs: "27 inch OLED, 240Hz, 0.03ms Response Time",
      price: 74990,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMHIZhyaI6LGJif1Uzz_0k2esVoHrcz6gDchioeJ3_g&s=10"
    },
    {
      name: "PNY RTX 5080",
      description: "Graphics Card",
      specs: "16GB GDDR7, PCIe 5.0, Triple Fan Cooling",
      price: 199990,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAl70SvjoA42bvLQlNQnYSaZ9WXOGqWWYjeY-cWEcWFA&s=10"
    },
    {
      name: "Ryzen 7 9800X3D",
      description: "Processor",
      specs: "8 Core, 16 Thread, 3D V-Cache, AM5 Socket",
      price: 44990,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kkw4JjH_BijSEd8_g3Vtm8B_FNG0_u4AAVnM2LrAjg&s=10"
    },
    {
      name: "DDR5 RAM 32GB",
      description: "Memory Kit",
      specs: "32GB (2x16GB), 6000MHz, CL30",
      price: 65990,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1s0fBpmlYeLayVANqk0FFrS3xMsl8Sq25VQYMRUz2Q&s=10"
    },
    {
      name: "PSU 850W+ Gold",
      description: "Power Supply",
      specs: "850W, 80+ Gold Certified, Fully Modular",
      price: 8990,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoQzfl-4B9_syyN-5rS0NP-k5HS_5qh0NYs1hXTOi1Q&s=10"
    },
    {
      name: "RGB Case with Fans",
      description: "Cabinet",
      specs: "Mid Tower, Tempered Glass, 4x ARGB Fans",
      price: 5990,
      image: "https://sclgaming.in/wp-content/uploads/2026/07/Thermalright-TR-A70-Vision-ATX-Gaming-Case-8-CPU-Fan-Slots-01.webp"
    },
    {
      name: "Samsung S26 Ultra",
      description: "Smartphone",
      specs: "Snapdragon 8 Gen 5, 200MP Camera, 6.9 inch Display",
      price: 149999,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4J6EjSjHlS2-zd0uPNzj7K6Gz_xBkVapdhOKx-o2SjQ&s=10"
    }
  ]

  return (
    <>
      <About />

      <Counter/>

      <h1>Chitkara</h1>

      <p>G3 Students</p>

      <img src={heroImg} alt="hero" />

      <br />

      <a href="https://www.google.com">
        Google
      </a>

      {productDetails.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          description={product.description}
          specs={product.specs}
          price={product.price}
          image={product.image}
        />

      ))}
    </>
    
  )
}

export default App
