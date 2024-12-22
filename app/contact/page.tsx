"use client";
import { Card } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Card.Root className="p-6">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          Have questions? We're here to help. Reach out to our team for support.
        </p>
      </Card.Root>
    </main>
  );
}