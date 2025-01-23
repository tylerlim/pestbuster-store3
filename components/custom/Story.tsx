import { Card } from "@chakra-ui/react"
// import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import FeaturesSection from "./FeaturesSection";


const CompanyStory = () => {
  return (
    <Card.Root className="w-full mx-auto" backgroundColor="white">
      <Card.Header>
        <h2 className="text-2xl font-bold">Our Story</h2>
      </Card.Header>
      
      <Card.Body className="space-y-8">
      <div className="w-full">
   <FeaturesSection />
          {/* <div className="space-y-12">  */}
          {/* <Image  
              src="/images/Features.svg" 
              alt="Men by the pool" 
              className="w-full rounded-lg shadow-md"
              width={1000}
              height={500}
            /> */}

          {/* </div> */}
          </div>
      <h2 className="text-xl font-bold text-gray-800">
    Welcome to Pest Buster
  </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">       
            <p className="text-gray-700">
            At Pest Buster, a proud brand by Global Synergy PB Sdn Bhd, we believe that protecting your home should never come at the expense of your family’s health or the planet. That’s why we’ve developed innovative, eco-friendly pest control solutions that empower households and businesses to tackle pests effectively while prioritizing safety and well-being.
            &quot;By eliminating harsh chemicals, our DIY products ensure a healthier living environment for your loved ones and prove that effective pest control and environmental stewardship can go hand in hand. Each Pest Buster solution reflects our unwavering commitment to creating a safer, greener, and healthier world—one household at a time.
            &quot;Join us in redefining pest control. Together, we can protect our homes, safeguard our health, and build a greener future.
            </p>
            
            {/* <p className="text-gray-700">
              At the same time, we saw that &quot;shorts&quot; in the marketplace were getting longer and longer, with more and more fabrication/zip/zip-ties & whoseewhatsis all over them. Where were the proper length men&apos;s shorts that defined generations of shortsmen?
            </p> */}
          </div>
          {/* <div className="flex items-center justify-center"> */}
          <div className="flex flex-col items-center justify-center space-y-4">
          {/* <div> */}
            <Image  
              src="/images/Michelle.jpg" 
              alt="Men by the pool" 
              className="w-1/2 h-auto rounded-lg shadow-md"
              // className="w-full rounded-lg shadow-md"
              width={200}
              height={200}
            />
             <p className="text-gray-700 text-center">
      Michelle Lalitha Founder
    </p>
          </div>
        </div>
       
        
        {/* <p className="text-gray-700">
          Not only were shorts becoming completely unrecognizable, but they were also losing their personality, their craftsmanship. No one was focusing on this forgotten category of men&apos;s apparel, when it&apos;s a product that&apos;s so vital to get right.
        </p> */}
         {/* <h2 className="text-xl font-bold text-gray-800">
         Our Mission
  </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Image 
              src="/images/apple.jpg" 
              alt="Person skateboarding" 
              className="w-full rounded-lg shadow-md"
              width={500}
              height={500}
            />
          </div>
          
          <div className="space-y-4">
             <p className="text-gray-700">
             To create a sustainable environment with Green soliton

            </p> 
            
             <p className="text-gray-700">
              Enter Chubbies - our visceral and irreverent response to all of the above. We launched in September of 2011 and were sold out for 2+ years of our core casual shorts product.
            </p> 
          </div>
        </div> */}
      </Card.Body>
      
      <Card.Footer className="flex justify-end space-x-2">
        <Button variant="outline">Learn More</Button>
        <Button>Shop Now</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default CompanyStory;

// const Feature = ({ title, description }: { title: string; description: string }) => (
//   <HStack align="flex-start" >
//     <Icon  w={6} h={6} color="orange.300" />
//     <Box>
//       <Text fontWeight="bold" fontSize="lg" color="darkgreen">
//         {title}
//       </Text>
//       <Text color="gray.600" fontSize="md">
//         {description}
//       </Text>
//     </Box>
//   </HStack>
// );

// const FeaturesSection = () => {
//   const features = [
//     {
//       title: 'Original Products',
//       description: 'This is one of the most exciting advantages we have. Order now and you will know.',
//     },
//     {
//       title: 'Long-Lasting Peace of Mind',
//       description: 'Enjoy 90 Days of Uninterrupted, Reliable Defense',
//     },
//     {
//       title: 'Advanced Science Meets Nature',
//       description: 'A Powerful, Plant-Based Solution for a Safer Tomorrow',
//     },
//     {
//       title: 'Effortless Protection, Zero Fuss',
//       description: 'No Mess, No Stress—Just Simple, Effective Use',
//     },
//     {
//       title: 'Protection That Cares for Your Loved Ones',
//       description: 'Gentle on the Environment, Safe for Your Family',
//     },
//   ];

//   return (
//     <Container maxW="container.xl" py={16}>
//       <VStack >
//         <Box textAlign="center">
//           <Text fontSize="sm" fontWeight="medium" color="gray.600">
//             FEATURES
//           </Text>
//           <Heading as="h2" fontSize="3xl" color="darkgreen" mt={2}>
//             Complete Features You Get
//           </Heading>
//         </Box>

//         <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} gap={8} position="relative">
//           {features.map((feature, index) => (
//             <GridItem key={index}>
//               <VStack align="stretch" >
//                 <Text fontSize="md" fontWeight="semibold" color="gray.700">
//                   {feature.title}
//                 </Text>
//                 <Text fontSize="sm" color="gray.500">
//                   {feature.description}
//                 </Text>
//               </VStack>
//             </GridItem>
//           ))}
//         </Grid>
//       </VStack>
//     </Container>
//   );
// };