"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PhoneInput } from "./phone-input"
import { OtpInput } from "./otp-input"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

export function LoginForm() {
  const [step, setStep] = useState<"phone" | "otp">("phone")

  return (
    <Card className="w-full max-w-md p-6">
      <AnimatePresence mode="wait">
        {step === "phone" ? (
          <motion.div
            key="phone"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <div className="space-y-4">
              <PhoneInput />
              <Button className="w-full" onClick={() => setStep("otp")}>
                Continuar
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="otp"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <h2 className="text-2xl font-bold mb-6">Verificação</h2>
            <div className="space-y-4">
              <OtpInput />
              <Button className="w-full">Verificar</Button>
              <Button variant="ghost" className="w-full" onClick={() => setStep("phone")}>
                Voltar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}