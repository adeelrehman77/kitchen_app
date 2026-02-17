import { Helmet } from 'react-helmet';

const SEO = () => {
    const foodEstablishmentSchema = {
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
        "areaServed": [
            { "@type": "City", "name": "Sharjah" },
            { "@type": "City", "name": "Dubai" },
            { "@type": "City", "name": "Abu Dhabi" },
            { "@type": "City", "name": "Ajman" },
            { "@type": "Country", "name": "United Arab Emirates" },
            { "@type": "Country", "name": "Saudi Arabia" }
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

    const softwareApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Fun Adventure Kitchen SaaS",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "description": "Multi-tenant food business platform for UAE cloud kitchens."
    };

    const schemaData = [foodEstablishmentSchema, softwareApplicationSchema];

    return (
        <Helmet>
            <title>Kitchen Management Software UAE | Multi-Tenant Platform</title>
            <meta name="description" content="The leading cloud kitchen SaaS subscription in the UAE. Manage tenants, delivery, and operations with our multi-tenant food business platform in the UAE." />
            <meta name="keywords" content="kitchen management software UAE, cloud kitchen SaaS UAE, delivery management system" />

            {/* Open Graph for Social Media */}
            <meta property="og:title" content="Kitchen Management Software UAE | Multi-Tenant Platform" />
            <meta property="og:description" content="The leading cloud kitchen SaaS subscription in the UAE. Manage tenants, delivery, and operations." />
            <meta property="og:image" content="https://kitchen.funadventure.ae/assets/og-image.jpg" />

            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
