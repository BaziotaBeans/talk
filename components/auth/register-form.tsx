"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { PhoneInput } from "./phone-input"

export function RegisterForm() {
  const [step, setStep] = useState<"details" | "verification">("details")

  return (
    <Card className="w-full max-w-md p-6">
      <AnimatePresence mode="wait">
        {step === "details" ? (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <h2 className="text-2xl font-bold mb-6">Registro</h2>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" />
              </div>
              <PhoneInput />
              <div className="grid gap-2">
                <Label htmlFor="company">Nome da Empresa</Label>
                <Input id="company" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
              <Button className="w-full" onClick={() => setStep("verification")}>
                Continuar
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="verification"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <h2 className="text-2xl font-bold mb-6">Verificação</h2>
            <div className="space-y-4">
              <OtpInput />
              <Button className="w-full">Verificar</Button>
              <Button variant="ghost" className="w-full" onClick={() => setStep("details")}>
                Voltar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}