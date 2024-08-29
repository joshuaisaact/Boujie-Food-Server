import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const foodItems = pgTable('food items', {
  id: serial('id').primaryKey(),
  Name: text('Name').notNull(),
  Boujie: integer('Boujie').notNull(),
  notBoujie:integer('Not Boujie').notNull()
});