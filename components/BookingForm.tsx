"use client";

import { useState, type FormEvent } from "react";

const treatments = [
  "Speech Therapy",
  "Language Therapy",
  "Special Education",
  "ABA Therapy",
  "Occupational Therapy",
  "Sensory Integration",
  "Group Session",
  "Behaviour Modifications",
  "Early Intervention",
  "Parental Guidance",
  "Family Counseling",
];

interface FormData {
  patientName: string;
  patientAge: string;
  parentName: string;
  parentContact: string;
  email: string;
  treatment: string;
  date: string;
  time: string;
  message: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    patientName: "", patientAge: "", parentName: "", parentContact: "",
    email: "", treatment: "", date: "", time: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const validate = (): boolean => {
    const ne: Partial<Record<keyof FormData, string>> = {};
    if (!formData.patientName.trim()) ne.patientName = "Patient name is required";
    if (!formData.patientAge.trim()) ne.patientAge = "Patient age is required";
    if (!formData.parentName.trim()) ne.parentName = "Parent name is required";
    if (!formData.parentContact.trim()) ne.parentContact = "Contact number is required";
    if (!formData.treatment) ne.treatment = "Please select a treatment";
    if (!formData.date) ne.date = "Please select a date";
    if (!formData.time) ne.time = "Please select a time";
    setErrors(ne); return Object.keys(ne).length === 0;
  };
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); if (validate()) setSubmitted(true); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };
  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Appointment Booked!</h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6">Thank you! Your appointment request has been submitted. Our team will contact you shortly.</p>
        <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-pink font-medium">Book Another</button>
      </div>
    );
  }
  const errCls = (field: string) => errors[field as keyof FormData] ? "border-red-400" : "border-gray-200";
  const baseCls = "w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-colors text-sm";
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><span className="w-7 h-7 rounded-full bg-brand-pink text-white text-sm flex items-center justify-center font-bold">1</span>Patient Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Patient Name *</label><input type="text" name="patientName" value={formData.patientName} onChange={handleChange} placeholder="Enter patient name" className={baseCls + " " + errCls("patientName")} />{errors.patientName && <p className="text-red-500 text-xs mt-1">{errors.patientName}</p>}</div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Patient Age *</label><input type="number" name="patientAge" value={formData.patientAge} onChange={handleChange} placeholder="Enter age" min="1" max="18" className={baseCls + " " + errCls("patientAge")} />{errors.patientAge && <p className="text-red-500 text-xs mt-1">{errors.patientAge}</p>}</div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Parent Name *</label><input type="text" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Enter parent name" className={baseCls + " " + errCls("parentName")} />{errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>}</div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Parent Contact *</label><input type="tel" name="parentContact" value={formData.parentContact} onChange={handleChange} placeholder="10-digit mobile" className={baseCls + " " + errCls("parentContact")} />{errors.parentContact && <p className="text-red-500 text-xs mt-1">{errors.parentContact}</p>}</div>
          <div className="sm:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1.5">Email (Optional)</label><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" className={baseCls} /></div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><span className="w-7 h-7 rounded-full bg-brand-pink text-white text-sm flex items-center justify-center font-bold">2</span>Treatment</h3>
        <select name="treatment" value={formData.treatment} onChange={handleChange} className={baseCls + " bg-white appearance-none cursor-pointer " + errCls("treatment")}><option value="">Choose a treatment...</option>{treatments.map((t) => (<option key={t} value={t}>{t}</option>))}</select>{errors.treatment && <p className="text-red-500 text-xs mt-1">{errors.treatment}</p>}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><span className="w-7 h-7 rounded-full bg-brand-pink text-white text-sm flex items-center justify-center font-bold">3</span>Schedule</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Date *</label><input type="date" name="date" value={formData.date} onChange={handleChange} className={baseCls + " bg-white cursor-pointer " + errCls("date")} />{errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}</div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Time *</label><input type="time" name="time" value={formData.time} onChange={handleChange} min="09:00" max="18:00" className={baseCls + " bg-white cursor-pointer " + errCls("time")} />{errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}</div>
        </div>
      </div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Message (Optional)</label><textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Additional information..." className={baseCls + " resize-none"} /></div>
      <button type="submit" className="w-full sm:w-auto px-8 py-3.5 bg-brand-pink text-white font-semibold rounded-xl hover:bg-pink-500 transition-all duration-200 shadow-lg hover:shadow-xl text-base">Confirm Appointment</button>
    </form>
  );
}