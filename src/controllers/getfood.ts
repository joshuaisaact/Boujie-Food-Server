import db from '../models/db.js';
import { Request, Response } from 'express';
import { foodItems } from '../models/foodItems.js';
import {eq} from 'drizzle-orm';

export const getFood = async (req: Request, res: Response) => {
  const {name} = req.params;
  console.log('Request received:', req.params);
  try {
    const item = await db.select().from(foodItems).where(eq(foodItems.Name, name));
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Food item not found' });
    }
  } catch (e) {
    res.status(500).json({ error: 'Failed to retrieve food item' });
  }
};