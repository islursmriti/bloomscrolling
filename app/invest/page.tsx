'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useTransform, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Invest() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-green-100 to-yellow-100 p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Invest in Bloom</h1>
        <p className="text-lg text-gray-600">
          Join us in our mission to transform social media. Invest in Bloom to support a more meaningful, positive, and healthy online experience.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-xl text-gray-700 mb-4">For investment inquiries, contact us at: <span className="text-green-600 font-semibold">invest@bloomscrolling.com</span></p>

        <div>
          <a
            href="/"
            className="text-white bg-green-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
