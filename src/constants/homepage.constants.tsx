import slideShow1 from "../assets/slideshow-1.png";
import slideShow2 from "../assets/slideshow-2.png";
import slideShow3 from "../assets/slideshow-3.png";
import slideShow4 from "../assets/slideshow-4.png";
import howItWorks1 from "../assets/how-it-works-1.png";
import howItWorks2 from "../assets/how-it-works-2.png";
import howItWorks3 from "../assets/how-it-works-3.png";
import howItWorks4 from "../assets/how-it-works-4.png";
import howItWorks5 from "../assets/how-it-works-5.png";
import DateTimeIcon from "../genericComponents/icons/DateTimeIcon";
import SafeDeliveryIcon from "../genericComponents/icons/SafeDeliveryIcon";
import TruckReturnIcon from "../genericComponents/icons/TruckReturnIcon";

export const STEPS = [
    {
        number: "01",
        image: howItWorks1,
        title: "Order Online",
        description: "Choose your storage plan and book your boxes in just a few clicks",
    },
    {
        number: "02",
        image: howItWorks2,
        title: "We Deliver the Box",
        description: "We'll drop off the storage boxes at your doorstep—no heavy lifting required",
        color: "from-red-600 to-red-700",
    },
    {
        number: "03",
        image: howItWorks3,
        title: "We Pick-up",
        description:
            "Pack your items, and our team will collect the boxes and transport them to our secure facility",
        color: "from-emerald-500 to-emerald-600",
    },
    {
        number: "04",
        image: howItWorks4,
        title: "Secure Storage",
        description:
            "Your items are stored safely in our local facility, ready whenever you need them",
    },
    {
        number: "05",
        image: howItWorks5,
        title: "Easy Returns",
        description:
            "We'll return your items when your booking ends or request a return anytime before",
    },
];

export const FEATURES = [
    {
        Icon: DateTimeIcon,
        title: "Flexible Storage Plans",
        description: "Store for as short as one month or as long as you need",
    },
    {
        Icon: SafeDeliveryIcon,
        title: "No Heavy Lifting And Hauling",
        description:
            "We handle the pickup and transport—just pack your items, and we’ll do the rest",
    },
    {
        Icon: TruckReturnIcon,
        title: "On-Demand Returns",
        description:
            "Need something back? Request a return anytime, and we’ll deliver it to your door",
    },
];

export const SLIDESHOW = [
    {
        image: slideShow1,
        alt: "Slideshow Image 1",
    },
    {
        image: slideShow2,
        alt: "Slideshow Image 2",
    },
    {
        image: slideShow3,
        alt: "Slideshow Image 3",
    },
    {
        image: slideShow4,
        alt: "Slideshow Image 4",
    },
];

export interface TestimonialItem {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    text: string;
}

export interface Testimonial {
    left: TestimonialItem[];
    middle: TestimonialItem[];
    right: TestimonialItem[];
}

export const TESTIMONIALS: Testimonial = {
    left: [
        {
            id: 1,
            name: "Darlene Robertson",
            rating: 5,
            text: "I am extremely pleased with the service provided by Ezstorage. Their reliable storage solutions have made my life so much easier. I can trust them to keep my belongings safe and secure. Highly recommend!",
            avatar: "/placeholder.svg?height=60&width=60",
        },
        {
            id: 2,
            name: "Sarah Johnson",
            rating: 5,
            text: "This platform has completely transformed how we manage our projects. The intuitive interface and powerful features make collaboration seamless.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
        {
            id: 3,
            name: "Michael Chen",
            rating: 5,
            text: "The development experience is outstanding. Clean code, great documentation, and excellent performance across all devices.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
        {
            id: 4,
            name: "Emily Rodriguez",
            rating: 5,
            text: "Beautiful design system and components that are both functional and aesthetically pleasing. Our users love the new interface.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
    ],
    middle: [
        {
            id: 5,
            name: "Lisa Thompson",
            rating: 5,
            text: "Game-changing technology that has streamlined our entire workflow. Highly recommend to any growing business.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
        {
            id: 6,
            name: "James Wilson",
            rating: 5,
            text: "Robust architecture and scalable solutions. The technical implementation is top-notch and future-proof.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
        {
            id: 7,
            name: "Anna Martinez",
            rating: 5,
            text: "Efficiency has improved dramatically. What used to take hours now takes minutes. Incredible time savings.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
        {
            id: 8,
            name: "Robert Taylor",
            rating: 5,
            text: "Our conversion rates have never been higher. The user experience is smooth and conversion-optimized.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
    ],
    right: [
        {
            id: 9,
            name: "Jennifer Lee",
            rating: 5,
            text: "Employee satisfaction has increased significantly. The platform is user-friendly and reduces training time.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
        {
            id: 10,
            name: "Mark Anderson",
            rating: 5,
            text: "Cost-effective solution with excellent ROI. The pricing model is transparent and value-driven.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
        {
            id: 11,
            name: "Rachel Green",
            rating: 5,
            text: "Customer satisfaction scores have reached all-time highs. The support and features exceed expectations.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
        {
            id: 12,
            name: "Alex Brown",
            rating: 5,
            text: "The reporting capabilities are phenomenal. Real-time insights help us make better business decisions.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
    ],
};
