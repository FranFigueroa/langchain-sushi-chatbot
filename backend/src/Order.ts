import { Schema, model, Document } from 'mongoose';

interface IOrder extends Document {
  products: {
    productId: string;  // O también podría ser un ObjectId referenciando a 'Product'
    quantity: number;
  }[];
  total: number;
  status: string;    // 'pending', 'completed', etc.
}

const orderSchema = new Schema<IOrder>(
  {
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, default: 1 }
      }
    ],
    total: { type: Number, required: true },
    status: { type: String, default: 'pending' }
  },
  {
    timestamps: true
  }
);

export default model<IOrder>('Order', orderSchema);

