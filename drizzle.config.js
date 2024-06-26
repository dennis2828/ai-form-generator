import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.ts",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai_form_generator-db_owner:S2CzynTPds6o@ep-round-recipe-a2p4224y.eu-central-1.aws.neon.tech/ai_form_generator-db?sslmode=require',
  }
});
