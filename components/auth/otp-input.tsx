"use client"

import React from 'react';
import { InputOTP } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

export function OtpInput() {
  return (
    <div className="grid gap-2">
      <Label>Código OTP</Label>
      <InputOTP
        maxLength={6}
        render={({ slots }) => (
          <div className="flex gap-2">
            {slots.map((slot, idx) => (
              <div key={idx} className="w-10">
                {React.isValidElement(slot) ? slot : <>{String(slot)}</>}
              </div>
            ))}
          </div>
        )}
      />
    </div>
  )
}