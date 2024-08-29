import db from '../models/db.js';
import { Request, Response } from 'express';
import { foodItems } from '../models/foodItems.js';

export const listFoods = async (req: Request, res: Response) => {
  try {
    const sqlQuery = db.select().from(foodItems);
    console.log('Generated SQL:', sqlQuery.toSQL());  // Log the generated SQL
    const items = await sqlQuery.execute();
    res.json(items);
  } catch (e) {
    res.status(500).json({error: 'Failed to retrieve food items'});
  }
};