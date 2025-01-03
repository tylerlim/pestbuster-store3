import { Card } from "@chakra-ui/react"
// import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const CompanyStory = () => {
  return (
    <Card.Root className="max-w-4xl mx-auto" backgroundColor="white">
      <Card.Header>
        <h2 className="text-2xl font-bold">Our Story</h2>
      </Card.Header>
      
      <Card.Body className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-gray-700">
              Chubbies was founded in 2011 by a group of friends who found the traditional world of men&apos;s capital-F &quot;Fashion&quot; completely unrelatable. We saw pictures of shirtless men with rippling ab muscles, some standing outside of storefronts coating you with cologne, with the message of &quot;if only you buy our clothes you can try to be as cool as we are&quot; - and we were absolutely repelled.
            </p>
            
            <p className="text-gray-700">
              At the same time, we saw that &quot;shorts&quot; in the marketplace were getting longer and longer, with more and more fabrication/zip/zip-ties & whoseewhatsis all over them. Where were the proper length men&apos;s shorts that defined generations of shortsmen?
            </p>
          </div>
          
          <div>
            <Image  
              src="/images/apple.jpg" 
              alt="Men by the pool" 
              className="w-full rounded-lg shadow-md"
              width={500}
              height={500}
            />
          </div>
        </div>
        
        <p className="text-gray-700">
          Not only were shorts becoming completely unrecognizable, but they were also losing their personality, their craftsmanship. No one was focusing on this forgotten category of men&apos;s apparel, when it&apos;s a product that&apos;s so vital to get right.
        </p>
        
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
              Finally, we founded the company in 2011, 3 years after the financial crisis, 4 years after the launch of the first iPhone, and in the wake of the rapid rise of Facebook, LinkedIn and other social networking apps. People were more stressed, comparing their lives to others on social media, and allowing work to overtake more and more of the work-life balance.
            </p>
            
            <p className="text-gray-700">
              Enter Chubbies - our visceral and irreverent response to all of the above. We launched in September of 2011 and were sold out for 2+ years of our core casual shorts product.
            </p>
          </div>
        </div>
      </Card.Body>
      
      <Card.Footer className="flex justify-end space-x-2">
        <Button variant="outline">Learn More</Button>
        <Button>Shop Now</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default CompanyStory;