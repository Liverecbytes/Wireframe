"use client";

import { useState } from "react";

export default function WireframeCandidateOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loginMethod, setLoginMethod] = useState<"email" | "google" | null>(null);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const steps = [
    "Sign Up",
    "Phone Number",
    "OTP Verification",
    "Email Verification",
    "Account Created",
    "Basic Info",
    "Professional Summary",
    "Work Experience",
    "Education",
    "Skills",
    "Resume Upload",
    "Job Preferences",
    "Membership Plan",
    "Complete"
  ];

  const totalSteps = steps.length;

  // Determine next step based on login method and verification status
  const getNextStep = () => {
    if (currentStep === 0) {
      // Safety fallback in case handleContinue is triggered from sign up
      return loginMethod === "google" ? 1 : 2;
    }
    if (currentStep === 1) {
      // After collecting phone number for Google auth users, go to OTP
      return 2;
    }
    if (currentStep === 2) {
      // After OTP, check if Google login (skip email verification) or email login
      return loginMethod === "google" ? 4 : 3;
    }
    if (currentStep === 3) {
      // After email verification (or skip), go to account created
      return 4;
    }
    if (currentStep === 4) {
      // After account created, start profile setup
      return 5;
    }
    // For profile steps, just increment
    return Math.min(totalSteps - 1, currentStep + 1);
  };

  const handleContinue = () => {
    setCurrentStep(getNextStep());
  };

  const handleSkip = () => {
    // Skip to membership plan selection
    setCurrentStep(12); // Membership Plan step
  };

  const handleSkipToEnd = () => {
    // Skip entire profile setup and go to membership
    setCurrentStep(12);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <SignUpStep onGoogleLogin={() => { setLoginMethod("google"); setCurrentStep(1); }} onEmailSignup={() => { setLoginMethod("email"); setCurrentStep(2); }} />;
      case 1:
        return <PhoneNumberStep onContinue={() => setCurrentStep(2)} />;
      case 2:
        return <OTPVerificationStep onVerify={() => { setPhoneVerified(true); handleContinue(); }} />;
      case 3:
        return <EmailVerificationStep onSkip={() => handleContinue()} onVerify={() => { setEmailVerified(true); handleContinue(); }} />;
      case 4:
        return <AccountCreatedStep onContinue={() => handleContinue()} />;
      case 5:
        return <BasicInfoStep onSkip={handleSkip} />;
      case 6:
        return <ProfessionalSummaryStep onSkip={handleSkip} />;
      case 7:
        return <WorkExperienceStep onSkip={handleSkip} />;
      case 8:
        return <EducationStep onSkip={handleSkip} />;
      case 9:
        return <SkillsStep onSkip={handleSkip} />;
      case 10:
        return <ResumeUploadStep onSkip={handleSkip} />;
      case 11:
        return <JobPreferencesStep onSkip={handleSkip} />;
      case 12:
        return <MembershipPlanStep onSelectPlan={() => setCurrentStep(13)} />;
      case 13:
        return <CompleteStep />;
      default:
        return <SignUpStep onGoogleLogin={() => { setLoginMethod("google"); setCurrentStep(1); }} onEmailSignup={() => { setLoginMethod("email"); setCurrentStep(2); }} />;
    }
  };

  // Profile setup steps (for progress calculation)
  const profileSteps = [5, 6, 7, 8, 9, 10, 11];
  const isProfileStep = profileSteps.includes(currentStep);
  const currentProfileStepIndex = profileSteps.indexOf(currentStep);
  const totalProfileSteps = profileSteps.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b-2 border-gray-300 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-black border-2 border-gray-400 px-4 py-2">
              LiveRec
            </div>
            <nav className="hidden md:flex space-x-6">
              {["Find Jobs", "Companies", "Salary", "Resources"].map((item) => (
                <div key={item} className="px-3 py-1 border border-gray-400 text-black">
                  {item}
                </div>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button
                onClick={handleSkipToEnd}
                className="px-4 py-2 border-2 border-gray-400 text-black hover:bg-gray-100 text-sm"
              >
                Skip Setup
              </button>
              <div className="px-4 py-2 border-2 border-gray-400 text-black">Sign In</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar - Only show for profile setup steps */}
        {isProfileStep && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Profile Setup: Step {currentProfileStepIndex + 1} of {totalProfileSteps}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(((currentProfileStepIndex + 1) / totalProfileSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gray-800 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${((currentProfileStepIndex + 1) / totalProfileSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-sm">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        {isProfileStep && (
          <div className="mt-6 flex justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className="px-6 py-2 border-2 border-gray-400 text-black hover:bg-gray-100"
            >
              ← Previous
            </button>
            <div className="flex gap-3">
              <button
                onClick={handleSkip}
                className="px-6 py-2 border-2 border-gray-400 text-black hover:bg-gray-100"
              >
                Skip Step
              </button>
              <button
                onClick={handleContinue}
                className="px-6 py-2 bg-gray-800 text-white border-2 border-gray-900 hover:bg-gray-700"
              >
                Continue →
              </button>
            </div>
          </div>
        )}


        {/* Step Indicator Dots - Only for profile steps */}
        {isProfileStep && (
          <div className="mt-8 flex justify-center gap-2">
            {profileSteps.map((stepIndex, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentProfileStepIndex
                    ? "bg-gray-800"
                    : index < currentProfileStepIndex
                    ? "bg-gray-600"
                    : "bg-gray-300"
                }`}
                title={steps[stepIndex]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Step 1: Sign Up
function SignUpStep({ onGoogleLogin, onEmailSignup }: { onGoogleLogin: () => void; onEmailSignup: () => void }) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2 inline-block">
          Create Your Account
        </h1>
        <p className="text-gray-600 mt-4">Join thousands of job seekers finding their dream jobs</p>
      </div>

      <div className="space-y-4 max-w-md mx-auto">
        {/* Social Login Options */}
        <div className="space-y-3">
          <button
            onClick={onGoogleLogin}
            className="w-full px-4 py-3 border-2 border-gray-400 text-black hover:bg-gray-50 flex items-center justify-center gap-3"
          >
            <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
            Continue with Google
          </button>
          <p className="text-xs text-gray-500 text-center">
            You'll still verify your mobile number so we can secure your account.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Or continue with email</span>
          </div>
        </div>

        {/* Email Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              className="w-full px-4 py-3 border-2 border-gray-400 text-black"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              className="w-full px-4 py-3 border-2 border-gray-400 text-black"
              placeholder="+1 (555) 123-4567"
            />
            <p className="text-xs text-gray-500 mt-1">We'll send a verification code to this number</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
            <input
              type="password"
              className="w-full px-4 py-3 border-2 border-gray-400 text-black"
              placeholder="Create a strong password"
            />
            <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
          </div>
          <div className="flex items-start">
            <input type="checkbox" className="mt-1 mr-2 border-2 border-gray-400" />
            <label className="text-sm text-gray-700">
              I agree to the <span className="underline">Terms of Service</span> and{" "}
              <span className="underline">Privacy Policy</span>
            </label>
          </div>
        </div>
      </div>

      {/* Continue Button for Email Signup */}
      <div className="flex justify-center mt-6">
        <button
          onClick={onEmailSignup}
          className="px-8 py-3 bg-gray-800 text-white border-2 border-gray-900 hover:bg-gray-700"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

// Step 2: Phone Number for Google Auth Users
function PhoneNumberStep({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2">
          Add Your Mobile Number
        </h2>
        <p className="text-gray-600 mt-4">
          We need your phone number to send the verification code and keep your account secure.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
          <input
            type="tel"
            className="w-full px-4 py-3 border-2 border-gray-400 text-black"
            placeholder="+1 (555) 123-4567"
          />
          <p className="text-xs text-gray-500 mt-1">We'll text a one-time passcode to this number.</p>
        </div>
        <div className="bg-gray-50 border-2 border-gray-300 p-4 rounded-lg text-sm text-gray-700">
          <p>Why we ask for this:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Secure your account with multi-factor authentication</li>
            <li>Let recruiters contact you quickly when you opt in</li>
            <li>Send urgent job alerts and interview reminders</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={onContinue}
          className="px-8 py-3 bg-gray-800 text-white border-2 border-gray-900 hover:bg-gray-700"
        >
          Send OTP →
        </button>
      </div>
    </div>
  );
}

// Step 2: OTP Verification
function OTPVerificationStep({ onVerify }: { onVerify: () => void }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [phoneNumber, setPhoneNumber] = useState("+1 (555) 123-4567");
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [tempPhoneNumber, setTempPhoneNumber] = useState(phoneNumber);

  const handleSavePhoneNumber = () => {
    setPhoneNumber(tempPhoneNumber || phoneNumber);
    setIsEditingPhone(false);
  };

  const handleCancelEdit = () => {
    setTempPhoneNumber(phoneNumber);
    setIsEditingPhone(false);
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2">
          Verify Your Phone Number
        </h2>
        <p className="text-gray-600 mt-4">
          We've sent a 6-digit verification code to{" "}
          <span className="font-semibold">{phoneNumber}</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Phone verification is required for all signups, including Google authentication.
        </p>
      </div>

      <div className="bg-gray-50 border-2 border-gray-300 p-4 rounded-lg">
        {isEditingPhone ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Update Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3 border-2 border-gray-400 text-black"
                placeholder="+1 (555) 987-6543"
                value={tempPhoneNumber}
                onChange={(e) => setTempPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancelEdit}
                className="px-4 py-2 border-2 border-gray-400 text-black hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePhoneNumber}
                className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 hover:bg-gray-700"
              >
                Send Code to New Number
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm text-gray-600">Need to use a different number?</p>
              <p className="font-semibold text-black">{phoneNumber}</p>
            </div>
            <button
              onClick={() => setIsEditingPhone(true)}
              className="text-sm font-medium text-gray-800 underline hover:text-black text-left"
            >
              Use different number
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
            Enter Verification Code
          </label>
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-400 text-black focus:border-gray-800 focus:outline-none"
                value={digit}
                onChange={(e) => {
                  const newOtp = [...otp];
                  newOtp[index] = e.target.value.replace(/\D/g, "");
                  setOtp(newOtp);
                  // Auto-focus next input
                  if (e.target.value && index < 5) {
                    const nextInput = e.target.parentElement?.children[index + 1] as HTMLInputElement;
                    nextInput?.focus();
                  }
                }}
              />
            ))}
          </div>
        </div>

        <div className="text-center space-y-3">
          <p className="text-sm text-gray-600">
            Didn't receive the code?{" "}
            <button className="text-gray-800 underline font-medium">Resend Code</button>
          </p>
          <p className="text-xs text-gray-500">
            Code expires in <span className="font-semibold">4:59</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={onVerify}
          className="px-8 py-3 bg-gray-800 text-white border-2 border-gray-900 hover:bg-gray-700"
        >
          Verify & Continue →
        </button>
      </div>
    </div>
  );
}

// Step 3: Email Verification (Optional)
function EmailVerificationStep({ onSkip, onVerify }: { onSkip: () => void; onVerify: () => void }) {
  return (
    <div className="space-y-6 max-w-md mx-auto text-center">
      <div>
        <div className="w-20 h-20 border-4 border-gray-400 rounded-full mx-auto flex items-center justify-center mb-6">
          <span className="text-4xl">✉️</span>
        </div>
        <h2 className="text-2xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2">
          Verify Your Email
        </h2>
        <p className="text-gray-600 mt-4">
          We've sent a verification link to <span className="font-semibold">your.email@example.com</span>
        </p>
      </div>

      <div className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg text-left space-y-3">
        <h3 className="font-semibold text-black">What to do next:</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li>Check your email inbox (and spam folder)</li>
          <li>Click on the verification link in the email</li>
          <li>Return here and click "I've Verified"</li>
        </ol>
      </div>

      <div className="bg-blue-50 border-2 border-blue-300 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Email verification is optional. You can verify it later when applying for jobs or setting up job alerts.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <button
          onClick={onVerify}
          className="px-8 py-3 bg-gray-800 text-white border-2 border-gray-900 hover:bg-gray-700"
        >
          I've Verified My Email
        </button>
        <button
          onClick={onSkip}
          className="px-8 py-3 border-2 border-gray-400 text-black hover:bg-gray-100"
        >
          Skip for Now
        </button>
      </div>
    </div>
  );
}

// Step 4: Account Created Success
function AccountCreatedStep({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="space-y-6 text-center max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="w-24 h-24 border-4 border-gray-800 rounded-full mx-auto flex items-center justify-center mb-6">
          <span className="text-5xl">✓</span>
        </div>
        <h2 className="text-3xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2 inline-block">
          Account Created Successfully!
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Your account has been created. Now let's set up your profile to help you find the perfect job.
        </p>
      </div>

      <div className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg text-left">
        <h3 className="font-semibold text-black mb-4">Next Steps:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="mr-3 text-gray-800">1.</span>
            <span>Complete your profile to get personalized job recommendations</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-800">2.</span>
            <span>Add your work experience and skills</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-800">3.</span>
            <span>Set your job preferences</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-800">4.</span>
            <span>Choose a membership plan to access qualified jobs</span>
          </li>
        </ul>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={onContinue}
          className="px-8 py-3 bg-gray-800 text-white border-2 border-gray-900 hover:bg-gray-700"
        >
          Start Profile Setup →
        </button>
      </div>
    </div>
  );
}

// Step 5: Basic Info
function BasicInfoStep({ onSkip }: { onSkip: () => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2">
          Tell us about yourself
        </h2>
        <p className="text-gray-600">Let's start with the basics</p>
      </div>

      <div className="space-y-4 max-w-2xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 border-gray-400 text-black"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 border-gray-400 text-black"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
          <input
            type="text"
            className="w-full px-4 py-3 border-2 border-gray-400 text-black"
            placeholder="City, State or Zip Code"
          />
          <p className="text-xs text-gray-500 mt-1">This helps us show you relevant jobs</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Job Title</label>
          <input
            type="text"
            className="w-full px-4 py-3 border-2 border-gray-400 text-black"
            placeholder="e.g., Software Engineer, Marketing Manager"
          />
        </div>
      </div>
    </div>
  );
}

// Step 6: Professional Summary
function ProfessionalSummaryStep({ onSkip }: { onSkip: () => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2">
          Professional Summary
        </h2>
        <p className="text-gray-600">Write a brief summary of your professional background</p>
      </div>

      <div className="space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Professional Headline *</label>
          <input
            type="text"
            className="w-full px-4 py-3 border-2 border-gray-400 text-black"
            placeholder="e.g., Experienced Software Engineer | Full Stack Developer"
            maxLength={120}
          />
          <p className="text-xs text-gray-500 mt-1">This appears at the top of your profile</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Professional Summary</label>
          <textarea
            rows={6}
            className="w-full px-4 py-3 border-2 border-gray-400 text-black"
            placeholder="Describe your professional experience, skills, and career goals. This helps employers understand who you are and what you bring to the table."
          />
          <p className="text-xs text-gray-500 mt-1">Recommended: 150-300 words</p>
        </div>
      </div>
    </div>
  );
}

// Step 7: Work Experience
function WorkExperienceStep({ onSkip }: { onSkip: () => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2">
          Work Experience
        </h2>
        <p className="text-gray-600">Add your work history to showcase your experience</p>
      </div>

      <div className="space-y-4 max-w-2xl">
        <div className="border-2 border-gray-300 p-6 rounded-lg space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-black">Experience 1</h3>
            <button className="text-sm text-gray-600 underline">Remove</button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 border-gray-400 text-black"
              placeholder="e.g., Senior Software Engineer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 border-gray-400 text-black"
              placeholder="Company Name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date *</label>
              <input
                type="month"
                className="w-full px-4 py-3 border-2 border-gray-400 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="month"
                className="w-full px-4 py-3 border-2 border-gray-400 text-black"
              />
              <div className="flex items-center mt-2">
                <input type="checkbox" className="mr-2 border-2 border-gray-400" />
                <label className="text-sm text-gray-700">I currently work here</label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-400 text-black"
              placeholder="Describe your responsibilities and achievements in this role..."
            />
          </div>
        </div>

        <button className="px-4 py-2 border-2 border-dashed border-gray-400 text-gray-600 hover:bg-gray-50 w-full">
          + Add Another Experience
        </button>
      </div>
    </div>
  );
}

// Step 8: Education
function EducationStep({ onSkip }: { onSkip: () => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2">
          Education
        </h2>
        <p className="text-gray-600">Add your educational background</p>
      </div>

      <div className="space-y-4 max-w-2xl">
        <div className="border-2 border-gray-300 p-6 rounded-lg space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-black">Education 1</h3>
            <button className="text-sm text-gray-600 underline">Remove</button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">School/University *</label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 border-gray-400 text-black"
              placeholder="e.g., University of California"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Degree *</label>
            <select className="w-full px-4 py-3 border-2 border-gray-400 text-black">
              <option>Select Degree</option>
              <option>High School</option>
              <option>Associate's Degree</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>Doctorate</option>
              <option>Professional Certificate</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Field of Study</label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 border-gray-400 text-black"
              placeholder="e.g., Computer Science, Business Administration"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Year</label>
              <input
                type="number"
                className="w-full px-4 py-3 border-2 border-gray-400 text-black"
                placeholder="2015"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Year</label>
              <input
                type="number"
                className="w-full px-4 py-3 border-2 border-gray-400 text-black"
                placeholder="2019"
              />
            </div>
          </div>
        </div>

        <button className="px-4 py-2 border-2 border-dashed border-gray-400 text-gray-600 hover:bg-gray-50 w-full">
          + Add Another Education
        </button>
      </div>
    </div>
  );
}

// Step 9: Skills
function SkillsStep({ onSkip }: { onSkip: () => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2">
          Skills
        </h2>
        <p className="text-gray-600">Add your key skills to help employers find you</p>
      </div>

      <div className="space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Add Skills</label>
          <input
            type="text"
            className="w-full px-4 py-3 border-2 border-gray-400 text-black"
            placeholder="Type a skill and press Enter (e.g., JavaScript, Project Management)"
          />
          <p className="text-xs text-gray-500 mt-1">Press Enter to add each skill</p>
        </div>

        <div className="border-2 border-gray-300 p-4 rounded-lg min-h-[100px]">
          <p className="text-sm text-gray-500 mb-3">Your Skills:</p>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "React", "Node.js", "Python"].map((skill) => (
              <div
                key={skill}
                className="px-3 py-1 bg-gray-100 border-2 border-gray-400 text-black flex items-center gap-2"
              >
                {skill}
                <button className="text-gray-600 hover:text-black">×</button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 border-2 border-gray-300 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-700 mb-2">Suggested Skills:</p>
          <div className="flex flex-wrap gap-2">
            {["TypeScript", "AWS", "Docker", "Kubernetes", "Agile", "Scrum"].map((skill) => (
              <button
                key={skill}
                className="px-3 py-1 border-2 border-gray-400 text-black hover:bg-gray-200"
              >
                + {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 10: Resume Upload
function ResumeUploadStep({ onSkip }: { onSkip: () => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2">
          Upload Your Resume
        </h2>
        <p className="text-gray-600">Upload your resume to make applying easier</p>
      </div>

      <div className="space-y-4 max-w-2xl">
        <div className="border-2 border-dashed border-gray-400 p-12 rounded-lg text-center">
          <div className="mb-4">
            <div className="w-16 h-16 border-4 border-gray-400 rounded-lg mx-auto flex items-center justify-center">
              <span className="text-2xl">📄</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-black mb-2">Drag & drop your resume here</h3>
          <p className="text-gray-600 mb-4">or</p>
          <button className="px-6 py-2 bg-gray-800 text-white border-2 border-gray-900 hover:bg-gray-700">
            Browse Files
          </button>
          <p className="text-xs text-gray-500 mt-4">
            Supported formats: PDF, DOC, DOCX (Max 5MB)
          </p>
        </div>

        <div className="bg-gray-50 border-2 border-gray-300 p-4 rounded-lg">
          <h4 className="font-medium text-black mb-2">Resume Tips:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Make sure your resume is up to date</li>
            <li>Include relevant keywords from job descriptions</li>
            <li>Keep it concise (1-2 pages recommended)</li>
            <li>We'll parse your resume to auto-fill your profile</li>
          </ul>
        </div>

        <div className="flex items-center">
          <input type="checkbox" className="mr-2 border-2 border-gray-400" />
          <label className="text-sm text-gray-700">
            I want to create my profile manually (skip resume upload)
          </label>
        </div>
      </div>
    </div>
  );
}

// Step 11: Job Preferences
function JobPreferencesStep({ onSkip }: { onSkip: () => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2">
          Job Preferences
        </h2>
        <p className="text-gray-600">Tell us what you're looking for so we can match you with the right jobs</p>
      </div>

      <div className="space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Desired Job Title *</label>
          <input
            type="text"
            className="w-full px-4 py-3 border-2 border-gray-400 text-black"
            placeholder="e.g., Software Engineer, Product Manager"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
          <input
            type="text"
            className="w-full px-4 py-3 border-2 border-gray-400 text-black"
            placeholder="City, State or Remote"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Work Type *</label>
          <div className="space-y-2">
            {["Full-time", "Part-time", "Contract", "Temporary", "Internship"].map((type) => (
              <label key={type} className="flex items-center">
                <input type="checkbox" className="mr-2 border-2 border-gray-400" />
                <span className="text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Remote Work Preference</label>
          <select className="w-full px-4 py-3 border-2 border-gray-400 text-black">
            <option>No preference</option>
            <option>Remote only</option>
            <option>Hybrid</option>
            <option>On-site only</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Minimum</label>
              <input
                type="number"
                className="w-full px-4 py-3 border-2 border-gray-400 text-black"
                placeholder="$50,000"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Maximum</label>
              <input
                type="number"
                className="w-full px-4 py-3 border-2 border-gray-400 text-black"
                placeholder="$100,000"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Job Alerts</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 border-2 border-gray-400" defaultChecked />
              <span className="text-gray-700">Email me when new jobs match my preferences</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 border-2 border-gray-400" />
              <span className="text-gray-700">Send me weekly job digest</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 12: Membership Plan
function MembershipPlanStep({ onSelectPlan }: { onSelectPlan: () => void }) {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "Forever",
      features: [
        "Browse job listings",
        "Apply to 5 jobs per month",
        "Basic profile visibility",
        "Email job alerts"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$19.99",
      period: "per month",
      features: [
        "Unlimited job applications",
        "Priority application status",
        "Enhanced profile visibility",
        "Advanced job search filters",
        "Salary insights",
        "Resume review"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$39.99",
      period: "per month",
      features: [
        "Everything in Professional",
        "Direct contact with recruiters",
        "Featured profile placement",
        "Career coaching sessions",
        "Interview preparation tools",
        "LinkedIn profile optimization"
      ],
      popular: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2 inline-block">
          Choose Your Membership Plan
        </h2>
        <p className="text-gray-600 mt-4">
          Select a plan to access qualified jobs and unlock premium features
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border-2 rounded-lg p-6 relative ${
              plan.popular
                ? "border-gray-800 bg-gray-50"
                : "border-gray-300 bg-white"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-800 text-white px-4 py-1 text-xs font-semibold tracking-wide border-2 border-gray-900 uppercase text-center whitespace-nowrap">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-black mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-black">{plan.price}</span>
                <span className="text-gray-600 text-sm ml-1">/{plan.period}</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <span className="mr-2 text-gray-800">✓</span>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={onSelectPlan}
              className={`w-full py-3 border-2 font-semibold ${
                plan.popular
                  ? "bg-gray-800 text-white border-gray-900 hover:bg-gray-700"
                  : "bg-white text-black border-gray-400 hover:bg-gray-100"
              }`}
            >
              {plan.name === "Free" ? "Continue with Free" : "Select Plan"}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border-2 border-gray-300 p-4 rounded-lg max-w-5xl mx-auto mt-6">
        <p className="text-sm text-gray-700 text-center">
          <strong>All plans include:</strong> Access to job board, profile creation, and basic search features.
          Cancel anytime. No hidden fees.
        </p>
      </div>
    </div>
  );
}

// Step 13: Complete
function CompleteStep() {
  return (
    <div className="space-y-6 text-center">
      <div className="mb-8">
        <div className="w-24 h-24 border-4 border-gray-800 rounded-full mx-auto flex items-center justify-center mb-6">
          <span className="text-5xl">✓</span>
        </div>
        <h2 className="text-3xl font-bold text-black mb-2 border-b-2 border-gray-400 pb-2 inline-block">
          You're All Set!
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Your profile is complete and you're ready to find your dream job.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        <div className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg text-left">
          <h3 className="font-semibold text-black mb-4">What's Next?</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-gray-800">1.</span>
              <span>Browse personalized job recommendations</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-800">2.</span>
              <span>Save jobs you're interested in</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-800">3.</span>
              <span>Apply to jobs with one click using your profile</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-800">4.</span>
              <span>Get notified when employers view your profile</span>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <button className="px-8 py-3 bg-gray-800 text-white border-2 border-gray-900 hover:bg-gray-700">
            Browse Jobs
          </button>
          <button className="px-8 py-3 border-2 border-gray-400 text-black hover:bg-gray-100">
            View My Profile
          </button>
        </div>
      </div>
    </div>
  );
}
