import { Helmet } from 'react-helmet';

const SEO = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FoodEstablishment",
        "@id": "https://kitchen.funadventure.ae",
        "name": "Fun Adventure Kitchen",
        "url": "https://kitchen.funadventure.ae",
        "logo": "https://kitchen.funadventure.ae/assets/logo.png",
        "description": "Premium healthy meal prep and subscription service across the UAE and GCC.",
        "parentOrganization": {
            "@type": "Organization",
            "name": "Fun Adventure",
            "url": "https://funadventure.ae"
        },
        // This defines your reach beyond just one city
        "areaServed": [
            { "@type": "City", "name": "Sharjah" },
            { "@type": "City", "name": "Dubai" },
            { "@type": "City", "name": "Abu Dhabi" },
            { "@type": "City", "name": "Ajman" },
            { "@type": "Country", "name": "United Arab Emirates" },
            { "@type": "Country", "name": "Saudi Arabia" } // For GCC expansion
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Meal Subscription Plans",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Monthly Meal Prep Subscription"
                    }
                }
            ]
        }
    };

    return (
        <Helmet>
            {/* Broadened Keywords for UAE-wide reach */}
            <title>Best Meal Prep & Healthy Food Delivery UAE | Fun Adventure Kitchen</title>
            <meta name="description" content="Customizable healthy meal plans delivered across Dubai, Sharjah, and Abu Dhabi. Start your subscription today with Fun Adventure Kitchen." />

            {/* Open Graph for Social Media (Crucial for UAE/GCC marketing) */}
            <meta property="og:title" content="Healthy Meal Plans for the UAE & GCC" />
            <meta property="og:description" content="Premium subscriptions for busy professionals and students." />
            <meta property="og:image" content="https://kitchen.funadventure.ae/assets/og-image.jpg" />

            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
