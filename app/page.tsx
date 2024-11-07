'use client';

import { Navbar } from '@/components/navbar';
import { AnimatedButton } from '@/components/ui/animated-button';
import { Card } from '@/components/ui/card';
import { MessageSquare, Bot, Clock, ChartBar, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Sparkles } from '@/components/ui/sparkles';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: 'Atendimento Inteligente',
    description:
      'Chatbot equipado com IA e NLP para entender e responder às necessidades do cliente com precisão.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Disponibilidade 24/7',
    description:
      'Atendimento ininterrupto, garantindo respostas rápidas e eficientes a qualquer momento.',
  },
  {
    icon: <ChartBar className="h-6 w-6" />,
    title: 'Análise em Tempo Real',
    description:
      'Dados valiosos sobre o comportamento do usuário para melhorar continuamente o atendimento.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Segurança Avançada',
    description:
      'Proteção de dados e conformidade com regulamentações de privacidade.',
  },
];

const plans = [
  {
    name: 'Essencial',
    price: 'AOA 10.000',
    description: 'Ideal para pequenas empresas',
    features: [
      'Atendimento 24/7',
      'Respostas Inteligentes com IA',
      'Automação de Processos',
      'Encaminhamento Humano',
      'Notificações Proativas',
    ],
  },
  {
    name: 'Avançado',
    price: 'AOA 50.000',
    description: 'Para médias empresas',
    features: [
      'Todas as features do Essencial',
      'Integração com CRM',
      'Agendamento',
      'Análise de Sentimento',
      'Gestão de Leads',
      'Multilíngue',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    description: 'Para grandes empresas',
    features: [
      'Todas as features do Avançado',
      'Proteção de Dados Avançada',
      'Reconhecimento de Imagens',
      'Relatórios Avançados',
      'Customização de Marca',
      'Suporte Dedicado 24/7',
    ],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-16">
        <MaxWidthWrapper className="relative z-10">
          <Sparkles className="w-full">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Transforme seu atendimento com IA
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Automatize seu atendimento no WhatsApp com chatbots inteligentes
                e ofereça uma experiência excepcional aos seus clientes
              </motion.p>
              <motion.div
                className="flex justify-center gap-4 sm:flex-row flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link href="/auth">
                  <AnimatedButton>Começar Gratuitamente</AnimatedButton>
                </Link>
                <AnimatedButton className="max-w-[500px]" variant="outline">
                  Ver Demonstração
                </AnimatedButton>
              </motion.div>
            </motion.div>
          </Sparkles>
        </MaxWidthWrapper>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-16">
        <MaxWidthWrapper>
          <h2 className="text-3xl font-bold text-center mb-12">
            Recursos Principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 h-full">
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <MaxWidthWrapper className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Planos e Preços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className="p-6 h-full flex flex-col items-center w-auto"
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-4 text-center">
                  {plan.price}
                </div>
                <p className="text-muted-foreground mb-6 text-center">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <AnimatedButton className="md:w-full w-full">
                  Escolher Plano
                </AnimatedButton>
              </Card>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <MaxWidthWrapper>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para transformar seu atendimento?
            </h2>
            <p className="text-xl mb-8">
              Comece agora com 15 dias grátis, sem compromisso
            </p>
            <Link href="/auth">
              <Button className="bg-white text-blue-600 hover:bg-white/90">
                Começar Gratuitamente
              </Button>
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
