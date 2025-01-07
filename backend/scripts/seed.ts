// scripts/seed.ts
import { connectDB } from '../src/db';  // Ajusta la ruta a tu archivo de conexión
import Product from '../src/models/Product';

const seedData = async () => {
  try {
    // Conexión a la base de datos
    await connectDB();

    // Elimina todos los datos existentes en la colección de productos (opcional)
    await Product.deleteMany({});

    // Inserta datos de ejemplo
    await Product.insertMany([
      {
        name: 'Nigiri Salmón',
        description: 'Arroz con salmón fresco encima',
        price: 10.5,
        category: 'Nigiri',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Maki Atún',
        description: 'Roll de arroz con atún y alga nori',
        price: 12.0,
        category: 'Maki',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'California Roll',
        description: 'Roll con cangrejo, palta y pepino',
        price: 9.0,
        category: 'Roll',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ]);

    console.log('Datos de ejemplo insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos de ejemplo:', error);
  } finally {
    process.exit(0); // Cierra el proceso
  }
};

seedData();

