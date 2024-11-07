"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function PhoneInput({ className, label = "Número de Telefone", ...props }: PhoneInputProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor="phone">{label}</Label>
      <Input
        id="phone"
        className={cn("", className)}
        placeholder="+244 923 456 789"
        type="tel"
        {...props}
      />
    </div>
  )
}