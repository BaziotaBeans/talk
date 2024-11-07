"use client"

import { OTPInput } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

export function OtpInput() {
  return (
    <div className="grid gap-2">
      <Label>Código OTP</Label>
      <OTPInput
        maxLength={6}
        render={({ slots }) => (
          <div className="flex gap-2">
            {slots.map((slot, idx) => (
              <div key={idx} className="w-10">
                {slot}
              </div>
            ))}
          </div>
        )}
      />
    </div>
  )
}