// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "Digital Wellness Advocate",
//     quote: "Bloom has completely transformed my social media experience. It's refreshing to have a platform that prioritizes positivity and meaningful connections.",
//     avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Sarah"
//   },
//   {
//     name: "Michael Chen",
//     role: "Community Leader",
//     quote: "As someone who manages online communities, I've seen firsthand how Bloom fosters genuine interactions and supports digital well-being.",
//     avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Michael"
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Content Creator",
//     quote: "Bloom's approach to content curation has helped me reach an engaged audience that truly resonates with my message. It's a game-changer for creators.",
//     avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Emily"
//   }
// ]

// export default function Testimonials() {
//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-lg p-6 shadow-md"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center mb-4">
//                 <div className="w-16 h-16 mr-4 relative">
//                   <Image
//                     src={testimonial.avatar}
//                     alt={`Avatar of ${testimonial.name}`}
//                     layout="fill"
//                     className="rounded-full"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{testimonial.name}</h3>
//                   <p className="text-gray-600">{testimonial.role}</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 italic">"{testimonial.quote}"</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Digital Wellness Advocate",
    quote: "Bloom has completely transformed my social media experience. It's refreshing to have a platform that prioritizes positivity and meaningful connections.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Robert"
  },
  {
    name: "Michael Chen",
    role: "Community Leader",
    quote: "As someone who manages online communities, I've seen firsthand how Bloom fosters genuine interactions and supports digital well-being.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Leah"
  },
  {
    name: "Emily Rodriguez",
    role: "Content Creator",
    quote: "Bloom's approach to content curation has helped me reach an engaged audience that truly resonates with my message. It's a game-changer for creators.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Liliana&eyebrows=raisedExcited,raisedExcitedNatural"
  }
]

export default function Testimonials() {
  return (
    <motion.section className="py-20 bg-gradient-to-b from-violet-100 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-pink-600 to-indigo-700 animate-gradient-move text-center mb-12">What Our Users Say</motion.h2>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex items-center"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-white rounded-lg p-6 shadow-md min-w-[300px] max-w-sm mx-4 transition-transform transform hover:scale-110">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 mr-4 relative">
                      <Image
                        src={testimonial.avatar}
                        alt={`Avatar of ${testimonial.name}`}
                        layout="fill"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
                
                {/* Horizontal Line Between Cards */}
                {index !== testimonials.concat(testimonials).length - 1 && (
                  <div className="w-24 h-[2px] bg-gray-500 mx-1"></div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
