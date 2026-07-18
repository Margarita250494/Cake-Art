import { v2 as cloudinary } from "cloudinary";

//"Вот настройки моего аккаунта."
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, //в какой аккаунт
  // загружать картинки;
  api_key: process.env.CLOUDINARY_API_KEY, //каким ключом пользоваться;
  api_secret: process.env.CLOUDINARY_API_SECRET, //каким секретом
  // подписывать запросы.
});

export default cloudinary;
