import { Request, Response } from 'express';
import Order from '../models/Order';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { products, total } = req.body;
    const newOrder = await Order.create({ products, total });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el pedido' });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el pedido' });
  }
};
