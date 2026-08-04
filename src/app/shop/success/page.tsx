"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

export default function SuccessPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.hero}')` }}
      />
      <div className="fixed inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-xl">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 space-y-6">
          <div className="w-20 h-20 mx-auto bg-amber-400/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-amber-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Payment Successful!
          </h1>

          <p className="text-white/80 text-lg">
            Thank you for your purchase! If you bought the handbook PDF, your
            download email is being prepared now. If it does not arrive in a
            few minutes, please contact support.
          </p>

          <div className="pt-4 space-y-3">
            <Button
              size="lg"
              className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-900 font-bold"
              asChild
            >
              <Link href="/shop">Continue Shopping</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/30 text-white hover:bg-white/10 font-bold"
              asChild
            >
              <Link href="/home">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
