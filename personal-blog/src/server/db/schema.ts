
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title", { length: 256 }).notNull(),
  content: text("content").notNull(),
  createdAt: integer("created_at").default(sql`(unixepoch())`).notNull(),
  updatedAt: integer("updated_at").default(sql`(unixepoch())`).notNull(),
}, (table) => ({
  titleIndex: index("title_idx").on(table.title),
}));


