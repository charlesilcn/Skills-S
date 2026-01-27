import { pgTable, serial, varchar, integer, boolean, timestamp, text, jsonb } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar({ length: 255 }).primaryKey(), // clerk_id
  email: varchar({ length: 255 }).notNull().unique(),
  tier: varchar({ length: 20 }).notNull().default("go"), // go, pro, ultra
  creditsBalance: integer().notNull().default(0),
  isCreator: boolean().notNull().default(false),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});

export const skills = pgTable("skills", {
  id: serial().primaryKey(),
  authorId: varchar({ length: 255 }).notNull().references(() => users.id),
  title: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  priceCredits: integer().notNull(),
  contentUrl: varchar({ length: 500 }).notNull(),
  tags: jsonb().notNull().default([]),
  status: varchar({ length: 20 }).notNull().default("reviewing"), // reviewing, published
  version: varchar({ length: 20 }).notNull().default("1.0"),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});

export const transactions = pgTable("transactions", {
  id: serial().primaryKey(),
  userId: varchar({ length: 255 }).notNull().references(() => users.id),
  skillId: integer().notNull().references(() => skills.id),
  amount: integer().notNull(),
  type: varchar({ length: 20 }).notNull(), // purchase, refund, credit_add
  createdAt: timestamp().notNull().defaultNow(),
});

export const payouts = pgTable("payouts", {
  id: serial().primaryKey(),
  userId: varchar({ length: 255 }).notNull().references(() => users.id),
  amountUsd: integer().notNull(),
  status: varchar({ length: 20 }).notNull().default("pending"), // pending, paid
  createdAt: timestamp().notNull().defaultNow(),
  paidAt: timestamp(),
});

export const subscriptions = pgTable("subscriptions", {
  id: serial().primaryKey(),
  userId: varchar({ length: 255 }).notNull().references(() => users.id),
  stripeSubId: varchar({ length: 255 }).notNull().unique(),
  status: varchar({ length: 20 }).notNull(),
  currentPeriodEnd: timestamp().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});