"use server";

import { sql } from "@/lib/db";

export async function submitContactForm(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "All fields are required" };
    }

    try {
        await sql`
      INSERT INTO messages (name, email, message, created_at)
      VALUES (${name}, ${email}, ${message}, NOW())
    `;

        return { success: true };
    } catch (error) {
        console.error("Database error:", error);
        return { error: "Failed to send message. Please try again later." };
    }
}
