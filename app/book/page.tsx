import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book an appointment at My Therapist Development Center. Choose from speech therapy, ABA therapy, occupational therapy, and more.",
};

export default function BookPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1 bg-surface-muted py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Book an <span className="text-brand-blue">Appointment</span>
            </h1>
            <p className="text-gray-600 max-w-lg mx-auto">
              Fill out the form below to schedule a therapy session for your child.
              Our team will contact you to confirm the appointment.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <BookingForm />
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Need help? Call us at{" "}
              <a href="tel:+917701833231" className="text-brand-blue font-medium hover:underline">
                +91 77018 33231
              </a>{" "}
              or email{" "}
              <a href="mailto:mytherapists4@gmail.com" className="text-brand-blue font-medium hover:underline">
                mytherapists4@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
