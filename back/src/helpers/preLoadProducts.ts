import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 16 Pro 256GB",
    price: 799,
    description:
      "El iPhone 16 ofrece una experiencia avanzada con iOS 18, integrando Apple Intelligence para funciones de IA personalizadas y una cámara mejorada para capturar momentos inolvidables.",
    image:
      "https://ik.imagekit.io/1yfqjkehz/_5BMYND3BE-A_5D_20iPhone_2016_20Pro_20128_20GB_20-_20Titanio_20Negro_unique=a61137d?updatedAt=1749338074584",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air M3",
    price: 999,
    description:
      "La MacBook Air con chip M3 combina rendimiento excepcional y eficiencia energética en un diseño ultradelgado, ideal para profesionales y estudiantes.",
    image:
      "https://ik.imagekit.io/1yfqjkehz/_5BMRXW3LE-A_5D_20MacBook_20Air_2013_22_20M3_20de_208C_20CPU_2C_2010C_20GPU_2C_208GB_2C_20512GB_20-_20Medianoche_unique=49fa645?updatedAt=1749338132087",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro M4 256GB",
    price: 1000,
    description:
      "El iPad Pro M5 redefine la productividad móvil con su potente chip M5, pantalla OLED de alta resolución y compatibilidad con el Apple Pencil Pro.",
    image:
      "https://ik.imagekit.io/1yfqjkehz/_5BMVV83LE-A_5D_20iPad_20Pro_2011_22_20M4_20WiFi_20256GB_2C_20Vidrio_20Est_C3_A1ndar_20-_20Negro_20Espacial_unique=39a5f78?updatedAt=1749338166374",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 10",
    price: 399,
    description:
      "El Apple Watch Series 6 monitorea tu salud con sensores avanzados, incluyendo oxígeno en sangre y ECG, manteniéndote conectado y activo durante todo el día.",
    image:
      "https://ik.imagekit.io/1yfqjkehz/_5BMWWK3AM-A_5D_20Apple_20Watch_20S10_20GPS_2042mm_20-_20Caja_20de_20Aluminio_20Oro_20Rosado_20-_20Loop_20Deportivo_20Ciruela_unique=39a5f78?updatedAt=1749338616895x`",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods 4",
    price: 249,
    description:
      "Los AirPods Pro de segunda generación ofrecen cancelación activa de ruido, modo transparencia y audio espacial para una experiencia sonora inmersiva.",
    image:
      "https://ik.imagekit.io/1yfqjkehz/_5BMXP63BE-A_5D_20AirPods_204ta_20Gen_20USB-C_unique=8f0e170?updatedAt=1749338616202",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "Apple AirTag",
    price: 99,
    description:
      "¿Has perdido la cartera? No se acaba el mundo. Cada AirTag lleva un altavoz incorporado y puedes hacer que suene para localizarlo. ",
    image:
      "https://ik.imagekit.io/1yfqjkehz/_5BMX532BE-A_5D_20Apple_20AirTag_20_281_20Pack_29_unique=2b29ab1?updatedAt=1749338619410",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "Sony Xperia 1 V",
    price: 1099,
    description:
      "El Sony Xperia 1 V combina tecnología de cine con un diseño elegante. Con su pantalla 4K OLED de 6.5'' y capacidades fotográficas avanzadas, es ideal para creadores de contenido.",
    image: "https://ik.imagekit.io/1yfqjkehz/747_ProductPrimary_image_$categorypdpnav$&fmt=png-alpha?updatedAt=1749338618102",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Dell XPS 13 Plus",
    price: 1199,
    description:
      "Ultradelgada y potente, la Dell XPS 13 Plus ofrece una experiencia premium con pantalla infinita y procesadores Intel de última generación.",
    image:
      "https://ik.imagekit.io/1yfqjkehz/qPVnzr8umKIJxQy8z7Cc4C0Gg9jv5TXipHRZnxuyUsU96G8LvU91KS44Yn_eLF1sOspiO8QwScBsPb_fQboBUWefxE39vTwyFttpjaE8YithcCdhVBnQNSVAVz_aseo2hD1Sbbhy4gq8XbSsjVb7ZYY?updatedAt=1750380329129",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Samsung G.Tab S9",
    price: 849,
    description:
      "La Galaxy Tab S9 ofrece una pantalla AMOLED vibrante y un rendimiento fluido, perfecta para entretenimiento y productividad.",
    image:
      "https://ik.imagekit.io/1yfqjkehz/ar-galaxy-tab-s9-ultra-wifi-x910-sm-x910nzadaro-539476313_$684_547_PNG$?updatedAt=1749338621821",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Garmin Fenix 7 Pro",
    price: 749,
    description:
      "Reloj multideporte premium con GPS, mapas topográficos y sensores avanzados para seguimiento de salud y entrenamiento.",
    image:
      "https://ik.imagekit.io/1yfqjkehz/fenix7Pro_HR_4000.3_e3e3fc4c-706a-4800-850d-5732531bc077.png_v=1717056324?updatedAt=1750380330087",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "Sony WH-1000XM5",
    price: 399,
    description:
      "Auriculares inalámbricos con cancelación de ruido líder en la industria y audio de alta resolución para una experiencia envolvente.",
    image: "https://ik.imagekit.io/1yfqjkehz/wh-1000xm5b-7.png?updatedAt=1749338619977",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "Tile Mate 2024",
    price: 35,
    description:
      "Encuentra tus objetos perdidos fácilmente con Tile Mate. Compatible con iOS y Android, con alcance de hasta 76 metros.",
    image:
      "https://ik.imagekit.io/1yfqjkehz/7765b32f042fd899e8b44ae0efaef58a8a1ac729400a1f1903a3f1557982c6e5__28163.png?updatedAt=1749338618587",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "Pixel Ultra 5G",
    price: 799,
    description: " Con conectividad 5G y una cámara de alta resolución, el Pixel Ultra 5G captura cada momento con claridad..",
    image: "https://ik.imagekit.io/1yfqjkehz/20241113_170846_Untitled_20design_20(17).png?updatedAt=1749338621905",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "HP Spectre x360",
    price: 1299,
    description:
      "La HP Spectre x360 combina potencia y versatilidad con su diseño convertible, procesador Intel Core i7 y pantalla táctil 4K.",
    image: "https://ik.imagekit.io/1yfqjkehz/c07760988__59075.png?updatedAt=1750380328507",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Lenovo Tab P12 Pro",
    price: 799,
    description:
      "La Lenovo Tab P12 Pro cuenta con una pantalla AMOLED de 12.6 pulgadas, sonido Dolby Atmos y soporte para el Precision Pen 3, ideal para entretenimiento y productividad.",
    image: "https://ik.imagekit.io/1yfqjkehz/45yc9sdhxqjwagmxyt947vwzjocbag172179.png?updatedAt=1749338623096",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Garmin Venu 3",
    price: 449,
    description:
      "El Garmin Venu 3 es un smartwatch deportivo con GPS, sensor de oxígeno, ECG y hasta 14 días de batería. Ideal para fitness y vida saludable.",
    image: "https://ik.imagekit.io/1yfqjkehz/cf-lg.png?updatedAt=1749338623661",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "JBL Live Flex",
    price: 179,
    description:
      "Los JBL Live Flex ofrecen cancelación de ruido adaptativa, batería de larga duración y sonido envolvente JBL Signature.",
    image:
      "https://ik.imagekit.io/1yfqjkehz/04.JBL_Live_20Flex_Product_20Image_Case_20Open_Black.png_sw=535&sh=535?updatedAt=1749338624372",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "Chipolo ONE Spot",
    price: 35,
    description:
      "El Chipolo ONE Spot es un rastreador compatible con la red de Apple, ideal para encontrar objetos personales fácilmente.",
    image:
      "https://ik.imagekit.io/1yfqjkehz/Spot_1500x1500_LightBG-1_6c0c164bd2b597ee32b68b8b5755bd2e.png?updatedAt=1749338625033",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "OnePlus 12R",
    price: 649,
    description: "Potente rendimiento con Snapdragon 8 Gen 2, batería de larga duración y carga súper rápida de 100W.",
    image: "https://ik.imagekit.io/1yfqjkehz/aston_blue.png?updatedAt=1749338625653",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Lenovo Yoga Slim 7i",
    price: 1099,
    description: "Portátil delgado y ligero con pantalla 2.8K OLED, ideal para productividad y entretenimiento.",
    image: "https://ik.imagekit.io/1yfqjkehz/Lenovo-Yoga-Slim-7i-Pro-OLED_Front_Facing_Left.png?updatedAt=1749338628143",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Samsung Galaxy Tab S8",
    price: 699,
    description: "Tablet Android con pantalla AMOLED de 11 pulgadas, S Pen incluido y rendimiento fluido para trabajo y ocio.",
    image: "https://ik.imagekit.io/1yfqjkehz/M-839086-1.png_v=638162135312230000?updatedAt=1750380327654",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Fitbit Versa 4",
    price: 229,
    description: "Smartwatch fitness con seguimiento continuo de ritmo cardíaco, GPS integrado y monitoreo de sueño avanzado.",
    image:
      "https://ik.imagekit.io/1yfqjkehz/fitbit-versa-4-smartwatch-waterfall-blue-platinum-front-right-view.png?updatedAt=1750380331152",
    categoryId: 4,
    stock: 0,
  },
  {
    name: "Sony LinkBuds S",
    price: 199,
    description: "Auriculares inalámbricos con sonido de alta resolución, diseño abierto y cancelación activa de ruido.",
    image:
      "https://ik.imagekit.io/1yfqjkehz/5_Sony_LinkBuds_S_Truly_Wireless_Noise_Cancelling_Earbuds_480x480.png_v=1722720584?updatedAt=1750380327097",
    categoryId: 5,
    stock: 0,
  },
  {
    name: "Chipolo CARD Spot",
    price: 45,
    description: "Rastreador compatible con Apple Find My, con forma de tarjeta para billeteras y objetos delgados.",
    image: "https://ik.imagekit.io/1yfqjkehz/2_Chipolo_CARD_Spot.png_v=1710461319&width=1500?updatedAt=1750380330531",
    categoryId: 6,
    stock: 0,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length) await AppDataSource.createQueryBuilder().insert().into(Product).values(productsToPreLoad).execute();
  console.log("Products preloaded");
};
