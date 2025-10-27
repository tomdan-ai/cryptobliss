import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  CheckCircle,
  Loader2,
  Calendar,
  Award,
  Users,
} from "lucide-react";

const BootcampPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    institution: "",
    stateCountry: "",
    skillTracks: [] as string[],
    amountPaid: "",
    proofOfPayment: null as File | null,
    referralSource: "",
    customReferral: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const skillTracks = [
    { id: "graphics", name: "Graphics Design", price: "$8 @N1,500" },
    { id: "motion", name: "Motion Design", price: "$12 @N1,500" },
    { id: "video", name: "Video Editing", price: "$15 @N1,500" },
  ];

  const referralOptions = [
    "CryptoBliss Community",
    "X (Twitter)",
    "Friend/Institution",
    "Instagram",
    "Other",
  ];

  const handleSkillTrackChange = (trackId: string) => {
    setFormData((prev) => ({
      ...prev,
      skillTracks: prev.skillTracks.includes(trackId)
        ? prev.skillTracks.filter((id) => id !== trackId)
        : [...prev.skillTracks, trackId],
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, proofOfPayment: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare form data for Google Sheets
      const submissionData = new URLSearchParams();
      submissionData.append("fullName", formData.fullName);
      submissionData.append("phoneNumber", formData.phoneNumber);
      submissionData.append("email", formData.email);
      submissionData.append("institution", formData.institution);
      submissionData.append("stateCountry", formData.stateCountry);
      submissionData.append("skillTracks", formData.skillTracks.join(", "));
      submissionData.append("amountPaid", formData.amountPaid);
      submissionData.append("referralSource", formData.referralSource);
      submissionData.append("customReferral", formData.customReferral);
      submissionData.append(
        "proofOfPayment",
        formData.proofOfPayment ? formData.proofOfPayment.name : ""
      );

      // Get Google Apps Script URL from environment variables
      const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: submissionData,
      });

      const result = await response.json();
      console.log(result);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        "There was an error submitting your form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-cryptobliss-dark to-green-900/90 border border-green-500/20 rounded-2xl p-12">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4 text-white">
              Enrollment Submitted Successfully ✅
            </h1>
            <p className="text-gray-300 mb-6 text-lg">
              Your payment will be reviewed within 12 hours. Once confirmed,
              you'll be added to the private bootcamp group.
            </p>
            <p className="text-cryptobliss-primary font-bold text-xl mb-8">
              Stay Bliss'd.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/")}
              className="bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary hover:from-cryptobliss-primary/80 hover:to-cryptobliss-secondary/80 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Back to Home
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary text-transparent bg-clip-text">
          Bliss Creative Bootcamp 1.0
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Welcome to Bliss Creative Bootcamp 1.0. Please fill in your details to
          enroll. Payment is required to secure your slot.
        </p>
      </motion.div>

      {/* Bootcamp Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
        >
          <Calendar className="w-12 h-12 text-cryptobliss-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Duration</h3>
          <p className="text-gray-300">Intensive creative training program</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
        >
          <Award className="w-12 h-12 text-cryptobliss-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Certification</h3>
          <p className="text-gray-300">
            Get certified in your chosen skill track
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
        >
          <Users className="w-12 h-12 text-cryptobliss-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Community</h3>
          <p className="text-gray-300">Join our exclusive creative community</p>
        </motion.div>
      </div>

      {/* Registration Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-cryptobliss-dark/80 to-blue-900/80 backdrop-blur-lg rounded-2xl border border-cryptobliss-primary/20 overflow-hidden">
          <div className="bg-gradient-to-r from-cryptobliss-primary/20 to-cryptobliss-secondary/20 p-6 border-b border-cryptobliss-primary/20">
            <h2 className="text-2xl font-bold text-center text-white">
              Registration Form
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Section 1: Personal Details */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-cryptobliss-primary">
                SECTION 1 — Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                  className="w-full p-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cryptobliss-primary focus:outline-none transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number (WhatsApp)"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value,
                    }))
                  }
                  className="w-full p-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cryptobliss-primary focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full p-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cryptobliss-primary focus:outline-none transition-colors"
                  required
                />
                <input
                  type="text"
                  placeholder="Institution (if in any)"
                  value={formData.institution}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      institution: e.target.value,
                    }))
                  }
                  className="w-full p-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cryptobliss-primary focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="State / Country"
                  value={formData.stateCountry}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      stateCountry: e.target.value,
                    }))
                  }
                  className="w-full p-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cryptobliss-primary focus:outline-none transition-colors md:col-span-2"
                  required
                />
              </div>
            </div>

            {/* Section 2: Skill Tracks */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-cryptobliss-primary">
                SECTION 2 — Choose Your Skill Track (Multiple Choice)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {skillTracks.map((track) => (
                  <label
                    key={track.id}
                    className="flex items-center space-x-3 cursor-pointer bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.skillTracks.includes(track.id)}
                      onChange={() => handleSkillTrackChange(track.id)}
                      className="w-5 h-5 text-cryptobliss-primary bg-white/10 border-gray-600 rounded focus:ring-cryptobliss-primary"
                    />
                    <div>
                      <div className="text-white font-semibold">
                        {track.name}
                      </div>
                      <div className="text-gray-400 text-sm">{track.price}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 3: Payment Instructions */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-cryptobliss-primary">
                SECTION 3 — Payment Instructions
              </h3>
              <div className="bg-white/10 rounded-xl p-6 space-y-4 text-gray-300">
                <p className="font-semibold text-white text-lg">
                  To complete your enrollment, please make your payment to:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-semibold text-white mb-2">
                      Bank Transfer:
                    </p>
                    <p>
                      <strong>Account Name:</strong> MARK ANTHONY UDEH
                    </p>
                    <p>
                      <strong>Bank:</strong> Moniepoint MFB
                    </p>
                    <p>
                      <strong>Account Number:</strong> 6444724963
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-semibold text-white mb-2">
                      Crypto Payment (USDT - APTOS):
                    </p>
                    <p className="break-all text-sm font-mono bg-black/20 p-2 rounded">
                      0x1ca7d01c0d09157c92ee5d89b39bfb15d70e79546b76b0499e62e7300b4acc52
                    </p>
                  </div>
                </div>

                <p className="text-sm italic text-cryptobliss-secondary">
                  After payment, upload your proof below.
                </p>
              </div>
            </div>

            {/* Section 4: Payment Confirmation */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-cryptobliss-primary">
                SECTION 4 — Payment Confirmation Fields
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Amount Paid"
                  value={formData.amountPaid}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      amountPaid: e.target.value,
                    }))
                  }
                  className="w-full p-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cryptobliss-primary focus:outline-none transition-colors"
                  required
                />
                <div>
                  <label className="block text-white mb-2 font-semibold">
                    Upload Proof of Payment (Image Required)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="proof-upload"
                      required
                    />
                    <label
                      htmlFor="proof-upload"
                      className="flex items-center justify-center w-full p-4 bg-white/10 border border-gray-600 rounded-lg text-white cursor-pointer hover:bg-white/20 transition-colors"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      {formData.proofOfPayment
                        ? formData.proofOfPayment.name
                        : "Choose file..."}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Referral Source */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-cryptobliss-primary">
                SECTION 5 — Referral Source
              </h3>
              <div className="space-y-4">
                <p className="text-white font-semibold">
                  How did you hear about this bootcamp?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {referralOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-3 cursor-pointer bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <input
                        type="radio"
                        name="referralSource"
                        value={option}
                        checked={formData.referralSource === option}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            referralSource: e.target.value,
                          }))
                        }
                        className="w-4 h-4 text-cryptobliss-primary bg-white/10 border-gray-600 focus:ring-cryptobliss-primary"
                        required
                      />
                      <span className="text-white">{option}</span>
                    </label>
                  ))}
                </div>
                {formData.referralSource === "Friend/Institution" && (
                  <input
                    type="text"
                    placeholder="Please specify..."
                    value={formData.customReferral}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        customReferral: e.target.value,
                      }))
                    }
                    className="w-full p-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cryptobliss-primary focus:outline-none transition-colors"
                  />
                )}
              </div>
            </div>

            {/* Error Message */}
            {submitError && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-200">
                {submitError}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary hover:from-cryptobliss-primary/80 hover:to-cryptobliss-secondary/80 disabled:opacity-50 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center text-lg"
                onClick={() => setSubmitError(null)} // Clear error on retry
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                    Submitting Enrollment...
                  </>
                ) : (
                  "Submit Enrollment"
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default BootcampPage;
