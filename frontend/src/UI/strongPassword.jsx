import { Check, X } from "lucide-react";
import React from "react";
 const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: "At least 6 characters", met: password.length >= 6 },
    { label: "Contain uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contain lowercase letter", met: /[a-z]/.test(password) },
    { label: "Contain a number", met: /\d/.test(password) },
    { label: "Contain special characters", met: /[^A-Za-z0-9]/.test(password) },
  ];
  return (
    <div className="mt-2 space-y-1">
      {criteria.map((item) => (
        <div key={item.label} className="flex items-center test-xs">
          {item.met ? (
            <Check className="size-4 text-violet-500 mr-2" />
          ) : (
            <X className="size-4 text-gray-500 mr-2" />
          )}
          <span className={item.met ? "text-violet-600" : "text-gray-500"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function StrongPassword({ password }) {
  const getStrong = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^A-Za-z0-9]/)) strength++;
    return strength;
  };

  const strong = getStrong(password);

  const getColor = (strength) => {
    if (strength === 0) return "bg-red-500";
    if (strength === 1) return "bg-red-400";
    if (strength === 2) return "bg-yellow-500";
    if (strength === 3) return "bg-yellow-400";
    return "bg-violet-500";
  };

  const getStrongText = (strength) => {
    if (strength === 0) return "very poor";
    if (strength === 1) return "weak";
    if (strength === 2) return "Fair";
    if (strength === 3) return "Good";
    return "Strong";
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-400 ">Password strength</span>
        <span className="text-xs text-gray-400 ">{getStrongText(strong)}</span>
      </div>

      <div className="flex space-x-1">
        {[...Array(4)].map((_, index) => (
          <div
            className={`h-1 w-1/4 rounded-full transition-colors duration-300
                ${index < strong ? getColor(strong) : "bg-gray-700"}
                `}
            key={index}
          />
        ))}
      </div>
      <PasswordCriteria password={password} />
    </div>
  );
}
