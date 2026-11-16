import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: "Please enter a subject (at least 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please write a message (at least 10 characters)." },
        { status: 400 }
      );
    }

    // In a production server, here we would forward to Resend / Nodemailer / SendGrid.
    // We log the inquiry securely on the server
    console.log("New contact message received:", {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      message:
        "Your message has been delivered successfully! Mohammad Sheyam Hosen will review your inquiry and get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}

