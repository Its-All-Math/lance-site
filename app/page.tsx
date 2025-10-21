"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ChevronRight, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Single‑file React landing page
// TailwindCSS + shadcn/ui + framer-motion
// How to use:
// 1) Replace placeholders (email, links, copy) below.
// 2) Deploy on Vercel (recommended) or Netlify. Works as a single-page app.
// 3) Extend sections (Testimonials, Writing) as you grow.

export default function Landing() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Lance Kizer Consulting</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#testimonials" className="hover:opacity-80">Testimonials</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="default">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight"
            >
              Pragmatic biotech & product strategy for startups
            </motion.h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              I help early-stage teams go from idea to execution—de-risking R&D, building
              data pipelines, and aligning tech milestones with the business case.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild className="group">
                <a href="#contact">
                  Book an intro call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#services">See services</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Available for select advisory and short projects • SF Bay Area / remote
            </p>
          </div>
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>What I typically help with</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4"/> Scale-up strategy (benchtop → pilot)</li>
                  <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4"/> Fermentation data pipelines & dashboards</li>
                  <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4"/> Technical due diligence & roadmap triage</li>
                  <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4"/> Experimental design & analytics (PCA, TEA)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Lightweight services to get traction fast</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Advisory sprints</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">2–4 weeks, clear deliverables: risk map, next 90‑day plan, and KPI suggestions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data & dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">Stand up a clean telemetry/assay pipeline, a few key SQL views, and a usable dashboard.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scale‑up checkpoints</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">Gate reviews from seed train to pilot, with OTR/kLa sanity checks and DSP hand‑offs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About Lance</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I’m a chemical engineer and biotech leader with over two decades of experience turning breakthrough science into scalable products. After receiving my Ph.D in Chemical Engineering (UC Berkeley) I have focused my efforts on a wide range of industries, from pioneering renewable ingredients at Amyris and developing plant-based foods at Ripple, to founding Cana’s molecular beverage platform and leading VitroLabs’ tissue-grown leather, I’ve built teams that translate innovation into reality. Now as CTO at Huue.bio, I’m guiding scale-up of E. coli fermentation to produce sustainable indigo by combining biology, engineering, and strategy to accelerate a cleaner manufacturing future.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild variant="outline">
                <a href="mailto:lance@sak-consulting.net"><Mail className="mr-2 h-4 w-4"/> Email me</a>
              </Button>
              <Button asChild variant="ghost">
                <a href="https://substack.com" target="_blank" rel="noreferrer">
                  Read my Substack <ExternalLink className="ml-2 h-4 w-4"/>
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Focus areas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                  <li>Fermentation & DSP interfaces</li>
                  <li>Data warehousing (Postgres/Metabase)</li>
                  <li>Experimental design, PCA, TEA</li>
                  <li>Early‑stage org & process design</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent notes</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                <ul className="space-y-2">
                  <li><a className="underline" href="#" target="_blank" rel="noreferrer">Case study: 150‑L pilot after‑action</a></li>
                  <li><a className="underline" href="#" target="_blank" rel="noreferrer">SQL views for 0.25‑h telemetry joins</a></li>
                  <li><a className="underline" href="#" target="_blank" rel="noreferrer">OTR/kLa sanity checks in DASGIP</a></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials (placeholder) */}
      <section id="testimonials" className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What clients say</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6 text-gray-700">
                <Quote className="inline mr-2 h-4 w-4"/>
                “Lance turned a messy dataset into decisions in two weeks. We hit our
                next milestone with confidence.”
                <div className="mt-3 text-sm text-gray-500">— Placeholder Client, Seed‑stage bioprocess</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-gray-700">
                <Quote className="inline mr-2 h-4 w-4"/>
                “Clear frameworks, practical playbooks, and zero fluff. Exactly what
                we needed.”
                <div className="mt-3 text-sm text-gray-500">— Placeholder Client, Climate tech</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Let’s talk</h2>
              <p className="mt-3 text-gray-700">Short intro calls are free. Tell me about your bottleneck and timeline.</p>
              <ul className="mt-6 text-sm text-gray-700 space-y-2">
                <li>📧 <a className="underline" href="mailto:lance@sak-consulting.net">lance@sak-consulting.net</a></li>
                <li>🌐 Oakland, CA • Remote‑friendly</li>
              </ul>
            </div>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Request an intro call</CardTitle>
              </CardHeader>
              <CardContent>
                <form action={`mailto:lance@sak-consulting.net`} method="post" encType="text/plain" className="space-y-3">
                  <input type="text" name="name" placeholder="Your name" className="w-full border rounded-xl p-3" required />
                  <input type="email" name="email" placeholder="Your email" className="w-full border rounded-xl p-3" required />
                  <textarea name="message" placeholder="What would you like help with?" className="w-full border rounded-xl p-3 h-28" />
                  <Button type="submit" className="w-full">Send</Button>
                </form>
                <p className="text-xs text-gray-500 mt-3">Or just email me directly.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Lance Kizer Consulting</div>
          <div className="flex items-center gap-4">
            <a href="https://substack.com" target="_blank" rel="noreferrer" className="underline">Substack</a>
            <a href="https://www.linkedin.com/in/lance-kizer-a35a934?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJ2XiuqpkROSLS8VI%2FExA9A%3D%3D" className="underline">LinkedIn</a>
            <a href="#home" className="underline">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
