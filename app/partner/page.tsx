// 'use client'

// import { useState, useEffect,useRef  } from 'react'
// import { motion, useAnimation, useTransform, useScroll } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import Image from 'next/image'

// export default function Partner() {

//   return (
// <div className='flex items-center justify-center'> Mail to bloomscrolling@gmail.com


//  <div><a
//             href="/"
//             className="text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-100 transition duration-300"
//           >
//             Home
//           </a></div>
// </div>

//   )
// }

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useTransform, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Partner() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-indigo-100 to-rose-100 p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch with Bloom</h1>
        <p className="text-lg text-gray-600">
          We are excited to hear from you! Feel free to reach out to us for collaboration, partnership, or inquiries.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-xl text-gray-700 mb-4">Mail to: <span className="text-indigo-600 font-semibold">joinourmission@bloomscrolling.com</span></p>

        <div>
          <a
            href="/"
            className="text-white bg-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
